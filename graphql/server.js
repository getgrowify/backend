const express = require('express')
const expressGraphQL = require('express-graphql')
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull
} = require('graphql')
const app = express()

const user = [
	{ id: 1, name: 'Springfield Hospital' },
	{ id: 2, name: 'Brampton Civic' },
	{ id: 3, name: 'Quahog Hospital' }
]

const token = [
  { id: 1, name: '13048109348', tokenId: 1 },
  { id: 2, name: '13048109348', tokenId: 1 },
  { id: 3, name: '13048109348', tokenId: 1 },
  { id: 4, name: '13048109348', tokenId: 2 },
  { id: 5, name: '13048109348', tokenId: 2 },
  { id: 6, name: '13048109348', tokenId: 2 },
  { id: 7, name: '13048109348', tokenId: 3 },
  { id: 8, name: '13048109348', tokenId: 3 },
  { id: 9, name: '13048109348', tokenId: 3 },
]

const growify = new GraphQLObjectType({
  name: 'Growify',
  description: 'GROWIFY PROFILE',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    growify: { type: GraphQLNonNull(GraphQLInt) },
    growify: {
      type: token,
      resolve: (token) => {
        return patient.find(user => tokenId === user.tokenId)
      }
    }
  })
})

const seedval = new GraphQLObjectType({
  name: '$EED VALUE',
  description: 'Purchase and Sell',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    seedval: {
      type: val,
      resolve: (val) => {
        return seedval.find(val => seedval === val.seedval)
      }
    }
  })
})

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    growify: {
      type: growify,
      description: 'GrowifyId',
      args: {
        id: { type: GraphQLInt }
    },
      resolve: (parent, args) => patient.find(patientId => tokenId === args.id)
    }
  })
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: () => ({
    buyseed: {
      type: seedval,
      description: 'Buy or sell $EED',
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        growify: { type: GraphQLNonNull(GraphQLInt) }
      },
        return growify
      }
    },
  })
})

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: Mutation
})

app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}))

app.listen(4200, () => console.log('Server Running!!'))
