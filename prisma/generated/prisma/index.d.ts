
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Challenge
 * 
 */
export type Challenge = $Result.DefaultSelection<Prisma.$ChallengePayload>
/**
 * Model Badge
 * 
 */
export type Badge = $Result.DefaultSelection<Prisma.$BadgePayload>
/**
 * Model ChallengeCompletion
 * 
 */
export type ChallengeCompletion = $Result.DefaultSelection<Prisma.$ChallengeCompletionPayload>
/**
 * Model BadgeEarned
 * 
 */
export type BadgeEarned = $Result.DefaultSelection<Prisma.$BadgeEarnedPayload>
/**
 * Model Reward
 * 
 */
export type Reward = $Result.DefaultSelection<Prisma.$RewardPayload>
/**
 * Model RewardClaim
 * 
 */
export type RewardClaim = $Result.DefaultSelection<Prisma.$RewardClaimPayload>
/**
 * Model Recommendation
 * 
 */
export type Recommendation = $Result.DefaultSelection<Prisma.$RecommendationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AuthProvider: {
  EMAIL: 'EMAIL',
  GOOGLE: 'GOOGLE',
  GITHUB: 'GITHUB'
};

export type AuthProvider = (typeof AuthProvider)[keyof typeof AuthProvider]


export const ProgressStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type ProgressStatus = (typeof ProgressStatus)[keyof typeof ProgressStatus]


export const ChallengeType: {
  CLICK: 'CLICK',
  FORM: 'FORM',
  AUDIO: 'AUDIO',
  TIMER: 'TIMER',
  TEXT: 'TEXT'
};

export type ChallengeType = (typeof ChallengeType)[keyof typeof ChallengeType]

}

export type AuthProvider = $Enums.AuthProvider

export const AuthProvider: typeof $Enums.AuthProvider

export type ProgressStatus = $Enums.ProgressStatus

export const ProgressStatus: typeof $Enums.ProgressStatus

export type ChallengeType = $Enums.ChallengeType

export const ChallengeType: typeof $Enums.ChallengeType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.challenge`: Exposes CRUD operations for the **Challenge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Challenges
    * const challenges = await prisma.challenge.findMany()
    * ```
    */
  get challenge(): Prisma.ChallengeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.badge`: Exposes CRUD operations for the **Badge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Badges
    * const badges = await prisma.badge.findMany()
    * ```
    */
  get badge(): Prisma.BadgeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.challengeCompletion`: Exposes CRUD operations for the **ChallengeCompletion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChallengeCompletions
    * const challengeCompletions = await prisma.challengeCompletion.findMany()
    * ```
    */
  get challengeCompletion(): Prisma.ChallengeCompletionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.badgeEarned`: Exposes CRUD operations for the **BadgeEarned** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BadgeEarneds
    * const badgeEarneds = await prisma.badgeEarned.findMany()
    * ```
    */
  get badgeEarned(): Prisma.BadgeEarnedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reward`: Exposes CRUD operations for the **Reward** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rewards
    * const rewards = await prisma.reward.findMany()
    * ```
    */
  get reward(): Prisma.RewardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rewardClaim`: Exposes CRUD operations for the **RewardClaim** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RewardClaims
    * const rewardClaims = await prisma.rewardClaim.findMany()
    * ```
    */
  get rewardClaim(): Prisma.RewardClaimDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recommendation`: Exposes CRUD operations for the **Recommendation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recommendations
    * const recommendations = await prisma.recommendation.findMany()
    * ```
    */
  get recommendation(): Prisma.RecommendationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Challenge: 'Challenge',
    Badge: 'Badge',
    ChallengeCompletion: 'ChallengeCompletion',
    BadgeEarned: 'BadgeEarned',
    Reward: 'Reward',
    RewardClaim: 'RewardClaim',
    Recommendation: 'Recommendation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "challenge" | "badge" | "challengeCompletion" | "badgeEarned" | "reward" | "rewardClaim" | "recommendation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Challenge: {
        payload: Prisma.$ChallengePayload<ExtArgs>
        fields: Prisma.ChallengeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChallengeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChallengeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          findFirst: {
            args: Prisma.ChallengeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChallengeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          findMany: {
            args: Prisma.ChallengeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          create: {
            args: Prisma.ChallengeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          createMany: {
            args: Prisma.ChallengeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChallengeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          delete: {
            args: Prisma.ChallengeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          update: {
            args: Prisma.ChallengeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          deleteMany: {
            args: Prisma.ChallengeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChallengeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChallengeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          upsert: {
            args: Prisma.ChallengeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          aggregate: {
            args: Prisma.ChallengeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallenge>
          }
          groupBy: {
            args: Prisma.ChallengeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChallengeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChallengeCountArgs<ExtArgs>
            result: $Utils.Optional<ChallengeCountAggregateOutputType> | number
          }
        }
      }
      Badge: {
        payload: Prisma.$BadgePayload<ExtArgs>
        fields: Prisma.BadgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BadgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BadgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          findFirst: {
            args: Prisma.BadgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BadgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          findMany: {
            args: Prisma.BadgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>[]
          }
          create: {
            args: Prisma.BadgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          createMany: {
            args: Prisma.BadgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BadgeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>[]
          }
          delete: {
            args: Prisma.BadgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          update: {
            args: Prisma.BadgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          deleteMany: {
            args: Prisma.BadgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BadgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BadgeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>[]
          }
          upsert: {
            args: Prisma.BadgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          aggregate: {
            args: Prisma.BadgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBadge>
          }
          groupBy: {
            args: Prisma.BadgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<BadgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.BadgeCountArgs<ExtArgs>
            result: $Utils.Optional<BadgeCountAggregateOutputType> | number
          }
        }
      }
      ChallengeCompletion: {
        payload: Prisma.$ChallengeCompletionPayload<ExtArgs>
        fields: Prisma.ChallengeCompletionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChallengeCompletionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeCompletionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChallengeCompletionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeCompletionPayload>
          }
          findFirst: {
            args: Prisma.ChallengeCompletionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeCompletionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChallengeCompletionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeCompletionPayload>
          }
          findMany: {
            args: Prisma.ChallengeCompletionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeCompletionPayload>[]
          }
          create: {
            args: Prisma.ChallengeCompletionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeCompletionPayload>
          }
          createMany: {
            args: Prisma.ChallengeCompletionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChallengeCompletionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeCompletionPayload>[]
          }
          delete: {
            args: Prisma.ChallengeCompletionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeCompletionPayload>
          }
          update: {
            args: Prisma.ChallengeCompletionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeCompletionPayload>
          }
          deleteMany: {
            args: Prisma.ChallengeCompletionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChallengeCompletionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChallengeCompletionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeCompletionPayload>[]
          }
          upsert: {
            args: Prisma.ChallengeCompletionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeCompletionPayload>
          }
          aggregate: {
            args: Prisma.ChallengeCompletionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallengeCompletion>
          }
          groupBy: {
            args: Prisma.ChallengeCompletionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChallengeCompletionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChallengeCompletionCountArgs<ExtArgs>
            result: $Utils.Optional<ChallengeCompletionCountAggregateOutputType> | number
          }
        }
      }
      BadgeEarned: {
        payload: Prisma.$BadgeEarnedPayload<ExtArgs>
        fields: Prisma.BadgeEarnedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BadgeEarnedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgeEarnedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BadgeEarnedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgeEarnedPayload>
          }
          findFirst: {
            args: Prisma.BadgeEarnedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgeEarnedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BadgeEarnedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgeEarnedPayload>
          }
          findMany: {
            args: Prisma.BadgeEarnedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgeEarnedPayload>[]
          }
          create: {
            args: Prisma.BadgeEarnedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgeEarnedPayload>
          }
          createMany: {
            args: Prisma.BadgeEarnedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BadgeEarnedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgeEarnedPayload>[]
          }
          delete: {
            args: Prisma.BadgeEarnedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgeEarnedPayload>
          }
          update: {
            args: Prisma.BadgeEarnedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgeEarnedPayload>
          }
          deleteMany: {
            args: Prisma.BadgeEarnedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BadgeEarnedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BadgeEarnedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgeEarnedPayload>[]
          }
          upsert: {
            args: Prisma.BadgeEarnedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgeEarnedPayload>
          }
          aggregate: {
            args: Prisma.BadgeEarnedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBadgeEarned>
          }
          groupBy: {
            args: Prisma.BadgeEarnedGroupByArgs<ExtArgs>
            result: $Utils.Optional<BadgeEarnedGroupByOutputType>[]
          }
          count: {
            args: Prisma.BadgeEarnedCountArgs<ExtArgs>
            result: $Utils.Optional<BadgeEarnedCountAggregateOutputType> | number
          }
        }
      }
      Reward: {
        payload: Prisma.$RewardPayload<ExtArgs>
        fields: Prisma.RewardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RewardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RewardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          findFirst: {
            args: Prisma.RewardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RewardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          findMany: {
            args: Prisma.RewardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>[]
          }
          create: {
            args: Prisma.RewardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          createMany: {
            args: Prisma.RewardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RewardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>[]
          }
          delete: {
            args: Prisma.RewardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          update: {
            args: Prisma.RewardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          deleteMany: {
            args: Prisma.RewardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RewardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RewardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>[]
          }
          upsert: {
            args: Prisma.RewardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          aggregate: {
            args: Prisma.RewardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReward>
          }
          groupBy: {
            args: Prisma.RewardGroupByArgs<ExtArgs>
            result: $Utils.Optional<RewardGroupByOutputType>[]
          }
          count: {
            args: Prisma.RewardCountArgs<ExtArgs>
            result: $Utils.Optional<RewardCountAggregateOutputType> | number
          }
        }
      }
      RewardClaim: {
        payload: Prisma.$RewardClaimPayload<ExtArgs>
        fields: Prisma.RewardClaimFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RewardClaimFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardClaimPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RewardClaimFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardClaimPayload>
          }
          findFirst: {
            args: Prisma.RewardClaimFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardClaimPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RewardClaimFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardClaimPayload>
          }
          findMany: {
            args: Prisma.RewardClaimFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardClaimPayload>[]
          }
          create: {
            args: Prisma.RewardClaimCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardClaimPayload>
          }
          createMany: {
            args: Prisma.RewardClaimCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RewardClaimCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardClaimPayload>[]
          }
          delete: {
            args: Prisma.RewardClaimDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardClaimPayload>
          }
          update: {
            args: Prisma.RewardClaimUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardClaimPayload>
          }
          deleteMany: {
            args: Prisma.RewardClaimDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RewardClaimUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RewardClaimUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardClaimPayload>[]
          }
          upsert: {
            args: Prisma.RewardClaimUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardClaimPayload>
          }
          aggregate: {
            args: Prisma.RewardClaimAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRewardClaim>
          }
          groupBy: {
            args: Prisma.RewardClaimGroupByArgs<ExtArgs>
            result: $Utils.Optional<RewardClaimGroupByOutputType>[]
          }
          count: {
            args: Prisma.RewardClaimCountArgs<ExtArgs>
            result: $Utils.Optional<RewardClaimCountAggregateOutputType> | number
          }
        }
      }
      Recommendation: {
        payload: Prisma.$RecommendationPayload<ExtArgs>
        fields: Prisma.RecommendationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecommendationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecommendationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          findFirst: {
            args: Prisma.RecommendationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecommendationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          findMany: {
            args: Prisma.RecommendationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>[]
          }
          create: {
            args: Prisma.RecommendationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          createMany: {
            args: Prisma.RecommendationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecommendationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>[]
          }
          delete: {
            args: Prisma.RecommendationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          update: {
            args: Prisma.RecommendationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          deleteMany: {
            args: Prisma.RecommendationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecommendationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecommendationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>[]
          }
          upsert: {
            args: Prisma.RecommendationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          aggregate: {
            args: Prisma.RecommendationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecommendation>
          }
          groupBy: {
            args: Prisma.RecommendationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecommendationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecommendationCountArgs<ExtArgs>
            result: $Utils.Optional<RecommendationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    challenge?: ChallengeOmit
    badge?: BadgeOmit
    challengeCompletion?: ChallengeCompletionOmit
    badgeEarned?: BadgeEarnedOmit
    reward?: RewardOmit
    rewardClaim?: RewardClaimOmit
    recommendation?: RecommendationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    badgesEarned: number
    challengeCompletions: number
    rewardClaims: number
    challenges: number
    recommendations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    badgesEarned?: boolean | UserCountOutputTypeCountBadgesEarnedArgs
    challengeCompletions?: boolean | UserCountOutputTypeCountChallengeCompletionsArgs
    rewardClaims?: boolean | UserCountOutputTypeCountRewardClaimsArgs
    challenges?: boolean | UserCountOutputTypeCountChallengesArgs
    recommendations?: boolean | UserCountOutputTypeCountRecommendationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBadgesEarnedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BadgeEarnedWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChallengeCompletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeCompletionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRewardClaimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardClaimWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationWhereInput
  }


  /**
   * Count Type BadgeCountOutputType
   */

  export type BadgeCountOutputType = {
    badgesEarned: number
  }

  export type BadgeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    badgesEarned?: boolean | BadgeCountOutputTypeCountBadgesEarnedArgs
  }

  // Custom InputTypes
  /**
   * BadgeCountOutputType without action
   */
  export type BadgeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeCountOutputType
     */
    select?: BadgeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BadgeCountOutputType without action
   */
  export type BadgeCountOutputTypeCountBadgesEarnedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BadgeEarnedWhereInput
  }


  /**
   * Count Type RewardCountOutputType
   */

  export type RewardCountOutputType = {
    claims: number
  }

  export type RewardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claims?: boolean | RewardCountOutputTypeCountClaimsArgs
  }

  // Custom InputTypes
  /**
   * RewardCountOutputType without action
   */
  export type RewardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardCountOutputType
     */
    select?: RewardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RewardCountOutputType without action
   */
  export type RewardCountOutputTypeCountClaimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardClaimWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    xp: number | null
    level: number | null
  }

  export type UserSumAggregateOutputType = {
    xp: number | null
    level: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    avatarUrl: string | null
    xp: number | null
    level: number | null
    createdAt: Date | null
    updatedAt: Date | null
    authProvider: $Enums.AuthProvider | null
    firstName: string | null
    lastName: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    avatarUrl: string | null
    xp: number | null
    level: number | null
    createdAt: Date | null
    updatedAt: Date | null
    authProvider: $Enums.AuthProvider | null
    firstName: string | null
    lastName: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    avatarUrl: number
    xp: number
    level: number
    createdAt: number
    updatedAt: number
    authProvider: number
    firstName: number
    lastName: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    xp?: true
    level?: true
  }

  export type UserSumAggregateInputType = {
    xp?: true
    level?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    avatarUrl?: true
    xp?: true
    level?: true
    createdAt?: true
    updatedAt?: true
    authProvider?: true
    firstName?: true
    lastName?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    avatarUrl?: true
    xp?: true
    level?: true
    createdAt?: true
    updatedAt?: true
    authProvider?: true
    firstName?: true
    lastName?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    avatarUrl?: true
    xp?: true
    level?: true
    createdAt?: true
    updatedAt?: true
    authProvider?: true
    firstName?: true
    lastName?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    avatarUrl: string | null
    xp: number
    level: number
    createdAt: Date
    updatedAt: Date
    authProvider: $Enums.AuthProvider
    firstName: string
    lastName: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    avatarUrl?: boolean
    xp?: boolean
    level?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authProvider?: boolean
    firstName?: boolean
    lastName?: boolean
    badgesEarned?: boolean | User$badgesEarnedArgs<ExtArgs>
    challengeCompletions?: boolean | User$challengeCompletionsArgs<ExtArgs>
    rewardClaims?: boolean | User$rewardClaimsArgs<ExtArgs>
    challenges?: boolean | User$challengesArgs<ExtArgs>
    recommendations?: boolean | User$recommendationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    avatarUrl?: boolean
    xp?: boolean
    level?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authProvider?: boolean
    firstName?: boolean
    lastName?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    avatarUrl?: boolean
    xp?: boolean
    level?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authProvider?: boolean
    firstName?: boolean
    lastName?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    avatarUrl?: boolean
    xp?: boolean
    level?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authProvider?: boolean
    firstName?: boolean
    lastName?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "avatarUrl" | "xp" | "level" | "createdAt" | "updatedAt" | "authProvider" | "firstName" | "lastName", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    badgesEarned?: boolean | User$badgesEarnedArgs<ExtArgs>
    challengeCompletions?: boolean | User$challengeCompletionsArgs<ExtArgs>
    rewardClaims?: boolean | User$rewardClaimsArgs<ExtArgs>
    challenges?: boolean | User$challengesArgs<ExtArgs>
    recommendations?: boolean | User$recommendationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      badgesEarned: Prisma.$BadgeEarnedPayload<ExtArgs>[]
      challengeCompletions: Prisma.$ChallengeCompletionPayload<ExtArgs>[]
      rewardClaims: Prisma.$RewardClaimPayload<ExtArgs>[]
      challenges: Prisma.$ChallengePayload<ExtArgs>[]
      recommendations: Prisma.$RecommendationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      avatarUrl: string | null
      xp: number
      level: number
      createdAt: Date
      updatedAt: Date
      authProvider: $Enums.AuthProvider
      firstName: string
      lastName: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    badgesEarned<T extends User$badgesEarnedArgs<ExtArgs> = {}>(args?: Subset<T, User$badgesEarnedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgeEarnedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    challengeCompletions<T extends User$challengeCompletionsArgs<ExtArgs> = {}>(args?: Subset<T, User$challengeCompletionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeCompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rewardClaims<T extends User$rewardClaimsArgs<ExtArgs> = {}>(args?: Subset<T, User$rewardClaimsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardClaimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    challenges<T extends User$challengesArgs<ExtArgs> = {}>(args?: Subset<T, User$challengesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recommendations<T extends User$recommendationsArgs<ExtArgs> = {}>(args?: Subset<T, User$recommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly xp: FieldRef<"User", 'Int'>
    readonly level: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly authProvider: FieldRef<"User", 'AuthProvider'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.badgesEarned
   */
  export type User$badgesEarnedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeEarned
     */
    select?: BadgeEarnedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeEarned
     */
    omit?: BadgeEarnedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeEarnedInclude<ExtArgs> | null
    where?: BadgeEarnedWhereInput
    orderBy?: BadgeEarnedOrderByWithRelationInput | BadgeEarnedOrderByWithRelationInput[]
    cursor?: BadgeEarnedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BadgeEarnedScalarFieldEnum | BadgeEarnedScalarFieldEnum[]
  }

  /**
   * User.challengeCompletions
   */
  export type User$challengeCompletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeCompletion
     */
    select?: ChallengeCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeCompletion
     */
    omit?: ChallengeCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeCompletionInclude<ExtArgs> | null
    where?: ChallengeCompletionWhereInput
    orderBy?: ChallengeCompletionOrderByWithRelationInput | ChallengeCompletionOrderByWithRelationInput[]
    cursor?: ChallengeCompletionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengeCompletionScalarFieldEnum | ChallengeCompletionScalarFieldEnum[]
  }

  /**
   * User.rewardClaims
   */
  export type User$rewardClaimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardClaim
     */
    select?: RewardClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardClaim
     */
    omit?: RewardClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardClaimInclude<ExtArgs> | null
    where?: RewardClaimWhereInput
    orderBy?: RewardClaimOrderByWithRelationInput | RewardClaimOrderByWithRelationInput[]
    cursor?: RewardClaimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RewardClaimScalarFieldEnum | RewardClaimScalarFieldEnum[]
  }

  /**
   * User.challenges
   */
  export type User$challengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    where?: ChallengeWhereInput
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    cursor?: ChallengeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * User.recommendations
   */
  export type User$recommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    where?: RecommendationWhereInput
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    cursor?: RecommendationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Challenge
   */

  export type AggregateChallenge = {
    _count: ChallengeCountAggregateOutputType | null
    _avg: ChallengeAvgAggregateOutputType | null
    _sum: ChallengeSumAggregateOutputType | null
    _min: ChallengeMinAggregateOutputType | null
    _max: ChallengeMaxAggregateOutputType | null
  }

  export type ChallengeAvgAggregateOutputType = {
    rewardXp: number | null
    requiredCompletions: number | null
    completionCount: number | null
  }

  export type ChallengeSumAggregateOutputType = {
    rewardXp: number | null
    requiredCompletions: number | null
    completionCount: number | null
  }

  export type ChallengeMinAggregateOutputType = {
    id: string | null
    title: string | null
    rewardXp: number | null
    createdAt: Date | null
    updatedAt: Date | null
    instructions: string | null
    requiredCompletions: number | null
    type: $Enums.ChallengeType | null
    completionCount: number | null
    userId: string | null
  }

  export type ChallengeMaxAggregateOutputType = {
    id: string | null
    title: string | null
    rewardXp: number | null
    createdAt: Date | null
    updatedAt: Date | null
    instructions: string | null
    requiredCompletions: number | null
    type: $Enums.ChallengeType | null
    completionCount: number | null
    userId: string | null
  }

  export type ChallengeCountAggregateOutputType = {
    id: number
    title: number
    rewardXp: number
    createdAt: number
    updatedAt: number
    instructions: number
    requiredCompletions: number
    type: number
    completionCount: number
    userId: number
    metadata: number
    _all: number
  }


  export type ChallengeAvgAggregateInputType = {
    rewardXp?: true
    requiredCompletions?: true
    completionCount?: true
  }

  export type ChallengeSumAggregateInputType = {
    rewardXp?: true
    requiredCompletions?: true
    completionCount?: true
  }

  export type ChallengeMinAggregateInputType = {
    id?: true
    title?: true
    rewardXp?: true
    createdAt?: true
    updatedAt?: true
    instructions?: true
    requiredCompletions?: true
    type?: true
    completionCount?: true
    userId?: true
  }

  export type ChallengeMaxAggregateInputType = {
    id?: true
    title?: true
    rewardXp?: true
    createdAt?: true
    updatedAt?: true
    instructions?: true
    requiredCompletions?: true
    type?: true
    completionCount?: true
    userId?: true
  }

  export type ChallengeCountAggregateInputType = {
    id?: true
    title?: true
    rewardXp?: true
    createdAt?: true
    updatedAt?: true
    instructions?: true
    requiredCompletions?: true
    type?: true
    completionCount?: true
    userId?: true
    metadata?: true
    _all?: true
  }

  export type ChallengeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Challenge to aggregate.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Challenges
    **/
    _count?: true | ChallengeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChallengeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChallengeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengeMaxAggregateInputType
  }

  export type GetChallengeAggregateType<T extends ChallengeAggregateArgs> = {
        [P in keyof T & keyof AggregateChallenge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallenge[P]>
      : GetScalarType<T[P], AggregateChallenge[P]>
  }




  export type ChallengeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeWhereInput
    orderBy?: ChallengeOrderByWithAggregationInput | ChallengeOrderByWithAggregationInput[]
    by: ChallengeScalarFieldEnum[] | ChallengeScalarFieldEnum
    having?: ChallengeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengeCountAggregateInputType | true
    _avg?: ChallengeAvgAggregateInputType
    _sum?: ChallengeSumAggregateInputType
    _min?: ChallengeMinAggregateInputType
    _max?: ChallengeMaxAggregateInputType
  }

  export type ChallengeGroupByOutputType = {
    id: string
    title: string
    rewardXp: number
    createdAt: Date
    updatedAt: Date
    instructions: string
    requiredCompletions: number
    type: $Enums.ChallengeType
    completionCount: number
    userId: string
    metadata: JsonValue | null
    _count: ChallengeCountAggregateOutputType | null
    _avg: ChallengeAvgAggregateOutputType | null
    _sum: ChallengeSumAggregateOutputType | null
    _min: ChallengeMinAggregateOutputType | null
    _max: ChallengeMaxAggregateOutputType | null
  }

  type GetChallengeGroupByPayload<T extends ChallengeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallengeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengeGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengeGroupByOutputType[P]>
        }
      >
    >


  export type ChallengeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    rewardXp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instructions?: boolean
    requiredCompletions?: boolean
    type?: boolean
    completionCount?: boolean
    userId?: boolean
    metadata?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    rewardXp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instructions?: boolean
    requiredCompletions?: boolean
    type?: boolean
    completionCount?: boolean
    userId?: boolean
    metadata?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    rewardXp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instructions?: boolean
    requiredCompletions?: boolean
    type?: boolean
    completionCount?: boolean
    userId?: boolean
    metadata?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectScalar = {
    id?: boolean
    title?: boolean
    rewardXp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instructions?: boolean
    requiredCompletions?: boolean
    type?: boolean
    completionCount?: boolean
    userId?: boolean
    metadata?: boolean
  }

  export type ChallengeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "rewardXp" | "createdAt" | "updatedAt" | "instructions" | "requiredCompletions" | "type" | "completionCount" | "userId" | "metadata", ExtArgs["result"]["challenge"]>
  export type ChallengeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChallengeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChallengeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChallengePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Challenge"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      rewardXp: number
      createdAt: Date
      updatedAt: Date
      instructions: string
      requiredCompletions: number
      type: $Enums.ChallengeType
      completionCount: number
      userId: string
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["challenge"]>
    composites: {}
  }

  type ChallengeGetPayload<S extends boolean | null | undefined | ChallengeDefaultArgs> = $Result.GetResult<Prisma.$ChallengePayload, S>

  type ChallengeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChallengeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChallengeCountAggregateInputType | true
    }

  export interface ChallengeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Challenge'], meta: { name: 'Challenge' } }
    /**
     * Find zero or one Challenge that matches the filter.
     * @param {ChallengeFindUniqueArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChallengeFindUniqueArgs>(args: SelectSubset<T, ChallengeFindUniqueArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Challenge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChallengeFindUniqueOrThrowArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChallengeFindUniqueOrThrowArgs>(args: SelectSubset<T, ChallengeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindFirstArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChallengeFindFirstArgs>(args?: SelectSubset<T, ChallengeFindFirstArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindFirstOrThrowArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChallengeFindFirstOrThrowArgs>(args?: SelectSubset<T, ChallengeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Challenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Challenges
     * const challenges = await prisma.challenge.findMany()
     * 
     * // Get first 10 Challenges
     * const challenges = await prisma.challenge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengeWithIdOnly = await prisma.challenge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChallengeFindManyArgs>(args?: SelectSubset<T, ChallengeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Challenge.
     * @param {ChallengeCreateArgs} args - Arguments to create a Challenge.
     * @example
     * // Create one Challenge
     * const Challenge = await prisma.challenge.create({
     *   data: {
     *     // ... data to create a Challenge
     *   }
     * })
     * 
     */
    create<T extends ChallengeCreateArgs>(args: SelectSubset<T, ChallengeCreateArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Challenges.
     * @param {ChallengeCreateManyArgs} args - Arguments to create many Challenges.
     * @example
     * // Create many Challenges
     * const challenge = await prisma.challenge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChallengeCreateManyArgs>(args?: SelectSubset<T, ChallengeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Challenges and returns the data saved in the database.
     * @param {ChallengeCreateManyAndReturnArgs} args - Arguments to create many Challenges.
     * @example
     * // Create many Challenges
     * const challenge = await prisma.challenge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Challenges and only return the `id`
     * const challengeWithIdOnly = await prisma.challenge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChallengeCreateManyAndReturnArgs>(args?: SelectSubset<T, ChallengeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Challenge.
     * @param {ChallengeDeleteArgs} args - Arguments to delete one Challenge.
     * @example
     * // Delete one Challenge
     * const Challenge = await prisma.challenge.delete({
     *   where: {
     *     // ... filter to delete one Challenge
     *   }
     * })
     * 
     */
    delete<T extends ChallengeDeleteArgs>(args: SelectSubset<T, ChallengeDeleteArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Challenge.
     * @param {ChallengeUpdateArgs} args - Arguments to update one Challenge.
     * @example
     * // Update one Challenge
     * const challenge = await prisma.challenge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChallengeUpdateArgs>(args: SelectSubset<T, ChallengeUpdateArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Challenges.
     * @param {ChallengeDeleteManyArgs} args - Arguments to filter Challenges to delete.
     * @example
     * // Delete a few Challenges
     * const { count } = await prisma.challenge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChallengeDeleteManyArgs>(args?: SelectSubset<T, ChallengeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Challenges
     * const challenge = await prisma.challenge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChallengeUpdateManyArgs>(args: SelectSubset<T, ChallengeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenges and returns the data updated in the database.
     * @param {ChallengeUpdateManyAndReturnArgs} args - Arguments to update many Challenges.
     * @example
     * // Update many Challenges
     * const challenge = await prisma.challenge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Challenges and only return the `id`
     * const challengeWithIdOnly = await prisma.challenge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChallengeUpdateManyAndReturnArgs>(args: SelectSubset<T, ChallengeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Challenge.
     * @param {ChallengeUpsertArgs} args - Arguments to update or create a Challenge.
     * @example
     * // Update or create a Challenge
     * const challenge = await prisma.challenge.upsert({
     *   create: {
     *     // ... data to create a Challenge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Challenge we want to update
     *   }
     * })
     */
    upsert<T extends ChallengeUpsertArgs>(args: SelectSubset<T, ChallengeUpsertArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeCountArgs} args - Arguments to filter Challenges to count.
     * @example
     * // Count the number of Challenges
     * const count = await prisma.challenge.count({
     *   where: {
     *     // ... the filter for the Challenges we want to count
     *   }
     * })
    **/
    count<T extends ChallengeCountArgs>(
      args?: Subset<T, ChallengeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChallengeAggregateArgs>(args: Subset<T, ChallengeAggregateArgs>): Prisma.PrismaPromise<GetChallengeAggregateType<T>>

    /**
     * Group by Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChallengeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChallengeGroupByArgs['orderBy'] }
        : { orderBy?: ChallengeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChallengeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Challenge model
   */
  readonly fields: ChallengeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Challenge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChallengeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Challenge model
   */
  interface ChallengeFieldRefs {
    readonly id: FieldRef<"Challenge", 'String'>
    readonly title: FieldRef<"Challenge", 'String'>
    readonly rewardXp: FieldRef<"Challenge", 'Int'>
    readonly createdAt: FieldRef<"Challenge", 'DateTime'>
    readonly updatedAt: FieldRef<"Challenge", 'DateTime'>
    readonly instructions: FieldRef<"Challenge", 'String'>
    readonly requiredCompletions: FieldRef<"Challenge", 'Int'>
    readonly type: FieldRef<"Challenge", 'ChallengeType'>
    readonly completionCount: FieldRef<"Challenge", 'Int'>
    readonly userId: FieldRef<"Challenge", 'String'>
    readonly metadata: FieldRef<"Challenge", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Challenge findUnique
   */
  export type ChallengeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge findUniqueOrThrow
   */
  export type ChallengeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge findFirst
   */
  export type ChallengeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge findFirstOrThrow
   */
  export type ChallengeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge findMany
   */
  export type ChallengeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenges to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge create
   */
  export type ChallengeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The data needed to create a Challenge.
     */
    data: XOR<ChallengeCreateInput, ChallengeUncheckedCreateInput>
  }

  /**
   * Challenge createMany
   */
  export type ChallengeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Challenges.
     */
    data: ChallengeCreateManyInput | ChallengeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Challenge createManyAndReturn
   */
  export type ChallengeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * The data used to create many Challenges.
     */
    data: ChallengeCreateManyInput | ChallengeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Challenge update
   */
  export type ChallengeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The data needed to update a Challenge.
     */
    data: XOR<ChallengeUpdateInput, ChallengeUncheckedUpdateInput>
    /**
     * Choose, which Challenge to update.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge updateMany
   */
  export type ChallengeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Challenges.
     */
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyInput>
    /**
     * Filter which Challenges to update
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to update.
     */
    limit?: number
  }

  /**
   * Challenge updateManyAndReturn
   */
  export type ChallengeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * The data used to update Challenges.
     */
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyInput>
    /**
     * Filter which Challenges to update
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Challenge upsert
   */
  export type ChallengeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The filter to search for the Challenge to update in case it exists.
     */
    where: ChallengeWhereUniqueInput
    /**
     * In case the Challenge found by the `where` argument doesn't exist, create a new Challenge with this data.
     */
    create: XOR<ChallengeCreateInput, ChallengeUncheckedCreateInput>
    /**
     * In case the Challenge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChallengeUpdateInput, ChallengeUncheckedUpdateInput>
  }

  /**
   * Challenge delete
   */
  export type ChallengeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter which Challenge to delete.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge deleteMany
   */
  export type ChallengeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Challenges to delete
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to delete.
     */
    limit?: number
  }

  /**
   * Challenge without action
   */
  export type ChallengeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
  }


  /**
   * Model Badge
   */

  export type AggregateBadge = {
    _count: BadgeCountAggregateOutputType | null
    _avg: BadgeAvgAggregateOutputType | null
    _sum: BadgeSumAggregateOutputType | null
    _min: BadgeMinAggregateOutputType | null
    _max: BadgeMaxAggregateOutputType | null
  }

  export type BadgeAvgAggregateOutputType = {
    xpRequired: number | null
  }

  export type BadgeSumAggregateOutputType = {
    xpRequired: number | null
  }

  export type BadgeMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    xpRequired: number | null
    createdAt: Date | null
    imagePath: string | null
    isActive: boolean | null
  }

  export type BadgeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    xpRequired: number | null
    createdAt: Date | null
    imagePath: string | null
    isActive: boolean | null
  }

  export type BadgeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    xpRequired: number
    createdAt: number
    imagePath: number
    isActive: number
    _all: number
  }


  export type BadgeAvgAggregateInputType = {
    xpRequired?: true
  }

  export type BadgeSumAggregateInputType = {
    xpRequired?: true
  }

  export type BadgeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    xpRequired?: true
    createdAt?: true
    imagePath?: true
    isActive?: true
  }

  export type BadgeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    xpRequired?: true
    createdAt?: true
    imagePath?: true
    isActive?: true
  }

  export type BadgeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    xpRequired?: true
    createdAt?: true
    imagePath?: true
    isActive?: true
    _all?: true
  }

  export type BadgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Badge to aggregate.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Badges
    **/
    _count?: true | BadgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BadgeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BadgeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BadgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BadgeMaxAggregateInputType
  }

  export type GetBadgeAggregateType<T extends BadgeAggregateArgs> = {
        [P in keyof T & keyof AggregateBadge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBadge[P]>
      : GetScalarType<T[P], AggregateBadge[P]>
  }




  export type BadgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BadgeWhereInput
    orderBy?: BadgeOrderByWithAggregationInput | BadgeOrderByWithAggregationInput[]
    by: BadgeScalarFieldEnum[] | BadgeScalarFieldEnum
    having?: BadgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BadgeCountAggregateInputType | true
    _avg?: BadgeAvgAggregateInputType
    _sum?: BadgeSumAggregateInputType
    _min?: BadgeMinAggregateInputType
    _max?: BadgeMaxAggregateInputType
  }

  export type BadgeGroupByOutputType = {
    id: string
    name: string
    description: string
    xpRequired: number
    createdAt: Date
    imagePath: string
    isActive: boolean
    _count: BadgeCountAggregateOutputType | null
    _avg: BadgeAvgAggregateOutputType | null
    _sum: BadgeSumAggregateOutputType | null
    _min: BadgeMinAggregateOutputType | null
    _max: BadgeMaxAggregateOutputType | null
  }

  type GetBadgeGroupByPayload<T extends BadgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BadgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BadgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BadgeGroupByOutputType[P]>
            : GetScalarType<T[P], BadgeGroupByOutputType[P]>
        }
      >
    >


  export type BadgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    xpRequired?: boolean
    createdAt?: boolean
    imagePath?: boolean
    isActive?: boolean
    badgesEarned?: boolean | Badge$badgesEarnedArgs<ExtArgs>
    _count?: boolean | BadgeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["badge"]>

  export type BadgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    xpRequired?: boolean
    createdAt?: boolean
    imagePath?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["badge"]>

  export type BadgeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    xpRequired?: boolean
    createdAt?: boolean
    imagePath?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["badge"]>

  export type BadgeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    xpRequired?: boolean
    createdAt?: boolean
    imagePath?: boolean
    isActive?: boolean
  }

  export type BadgeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "xpRequired" | "createdAt" | "imagePath" | "isActive", ExtArgs["result"]["badge"]>
  export type BadgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    badgesEarned?: boolean | Badge$badgesEarnedArgs<ExtArgs>
    _count?: boolean | BadgeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BadgeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BadgeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BadgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Badge"
    objects: {
      badgesEarned: Prisma.$BadgeEarnedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      xpRequired: number
      createdAt: Date
      imagePath: string
      isActive: boolean
    }, ExtArgs["result"]["badge"]>
    composites: {}
  }

  type BadgeGetPayload<S extends boolean | null | undefined | BadgeDefaultArgs> = $Result.GetResult<Prisma.$BadgePayload, S>

  type BadgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BadgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BadgeCountAggregateInputType | true
    }

  export interface BadgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Badge'], meta: { name: 'Badge' } }
    /**
     * Find zero or one Badge that matches the filter.
     * @param {BadgeFindUniqueArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BadgeFindUniqueArgs>(args: SelectSubset<T, BadgeFindUniqueArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Badge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BadgeFindUniqueOrThrowArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BadgeFindUniqueOrThrowArgs>(args: SelectSubset<T, BadgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Badge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindFirstArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BadgeFindFirstArgs>(args?: SelectSubset<T, BadgeFindFirstArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Badge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindFirstOrThrowArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BadgeFindFirstOrThrowArgs>(args?: SelectSubset<T, BadgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Badges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Badges
     * const badges = await prisma.badge.findMany()
     * 
     * // Get first 10 Badges
     * const badges = await prisma.badge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const badgeWithIdOnly = await prisma.badge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BadgeFindManyArgs>(args?: SelectSubset<T, BadgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Badge.
     * @param {BadgeCreateArgs} args - Arguments to create a Badge.
     * @example
     * // Create one Badge
     * const Badge = await prisma.badge.create({
     *   data: {
     *     // ... data to create a Badge
     *   }
     * })
     * 
     */
    create<T extends BadgeCreateArgs>(args: SelectSubset<T, BadgeCreateArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Badges.
     * @param {BadgeCreateManyArgs} args - Arguments to create many Badges.
     * @example
     * // Create many Badges
     * const badge = await prisma.badge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BadgeCreateManyArgs>(args?: SelectSubset<T, BadgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Badges and returns the data saved in the database.
     * @param {BadgeCreateManyAndReturnArgs} args - Arguments to create many Badges.
     * @example
     * // Create many Badges
     * const badge = await prisma.badge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Badges and only return the `id`
     * const badgeWithIdOnly = await prisma.badge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BadgeCreateManyAndReturnArgs>(args?: SelectSubset<T, BadgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Badge.
     * @param {BadgeDeleteArgs} args - Arguments to delete one Badge.
     * @example
     * // Delete one Badge
     * const Badge = await prisma.badge.delete({
     *   where: {
     *     // ... filter to delete one Badge
     *   }
     * })
     * 
     */
    delete<T extends BadgeDeleteArgs>(args: SelectSubset<T, BadgeDeleteArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Badge.
     * @param {BadgeUpdateArgs} args - Arguments to update one Badge.
     * @example
     * // Update one Badge
     * const badge = await prisma.badge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BadgeUpdateArgs>(args: SelectSubset<T, BadgeUpdateArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Badges.
     * @param {BadgeDeleteManyArgs} args - Arguments to filter Badges to delete.
     * @example
     * // Delete a few Badges
     * const { count } = await prisma.badge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BadgeDeleteManyArgs>(args?: SelectSubset<T, BadgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Badges
     * const badge = await prisma.badge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BadgeUpdateManyArgs>(args: SelectSubset<T, BadgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Badges and returns the data updated in the database.
     * @param {BadgeUpdateManyAndReturnArgs} args - Arguments to update many Badges.
     * @example
     * // Update many Badges
     * const badge = await prisma.badge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Badges and only return the `id`
     * const badgeWithIdOnly = await prisma.badge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BadgeUpdateManyAndReturnArgs>(args: SelectSubset<T, BadgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Badge.
     * @param {BadgeUpsertArgs} args - Arguments to update or create a Badge.
     * @example
     * // Update or create a Badge
     * const badge = await prisma.badge.upsert({
     *   create: {
     *     // ... data to create a Badge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Badge we want to update
     *   }
     * })
     */
    upsert<T extends BadgeUpsertArgs>(args: SelectSubset<T, BadgeUpsertArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeCountArgs} args - Arguments to filter Badges to count.
     * @example
     * // Count the number of Badges
     * const count = await prisma.badge.count({
     *   where: {
     *     // ... the filter for the Badges we want to count
     *   }
     * })
    **/
    count<T extends BadgeCountArgs>(
      args?: Subset<T, BadgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BadgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Badge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BadgeAggregateArgs>(args: Subset<T, BadgeAggregateArgs>): Prisma.PrismaPromise<GetBadgeAggregateType<T>>

    /**
     * Group by Badge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BadgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BadgeGroupByArgs['orderBy'] }
        : { orderBy?: BadgeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BadgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBadgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Badge model
   */
  readonly fields: BadgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Badge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BadgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    badgesEarned<T extends Badge$badgesEarnedArgs<ExtArgs> = {}>(args?: Subset<T, Badge$badgesEarnedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgeEarnedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Badge model
   */
  interface BadgeFieldRefs {
    readonly id: FieldRef<"Badge", 'String'>
    readonly name: FieldRef<"Badge", 'String'>
    readonly description: FieldRef<"Badge", 'String'>
    readonly xpRequired: FieldRef<"Badge", 'Int'>
    readonly createdAt: FieldRef<"Badge", 'DateTime'>
    readonly imagePath: FieldRef<"Badge", 'String'>
    readonly isActive: FieldRef<"Badge", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Badge findUnique
   */
  export type BadgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge findUniqueOrThrow
   */
  export type BadgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge findFirst
   */
  export type BadgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Badges.
     */
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge findFirstOrThrow
   */
  export type BadgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Badges.
     */
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge findMany
   */
  export type BadgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badges to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge create
   */
  export type BadgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The data needed to create a Badge.
     */
    data: XOR<BadgeCreateInput, BadgeUncheckedCreateInput>
  }

  /**
   * Badge createMany
   */
  export type BadgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Badges.
     */
    data: BadgeCreateManyInput | BadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Badge createManyAndReturn
   */
  export type BadgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * The data used to create many Badges.
     */
    data: BadgeCreateManyInput | BadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Badge update
   */
  export type BadgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The data needed to update a Badge.
     */
    data: XOR<BadgeUpdateInput, BadgeUncheckedUpdateInput>
    /**
     * Choose, which Badge to update.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge updateMany
   */
  export type BadgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Badges.
     */
    data: XOR<BadgeUpdateManyMutationInput, BadgeUncheckedUpdateManyInput>
    /**
     * Filter which Badges to update
     */
    where?: BadgeWhereInput
    /**
     * Limit how many Badges to update.
     */
    limit?: number
  }

  /**
   * Badge updateManyAndReturn
   */
  export type BadgeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * The data used to update Badges.
     */
    data: XOR<BadgeUpdateManyMutationInput, BadgeUncheckedUpdateManyInput>
    /**
     * Filter which Badges to update
     */
    where?: BadgeWhereInput
    /**
     * Limit how many Badges to update.
     */
    limit?: number
  }

  /**
   * Badge upsert
   */
  export type BadgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The filter to search for the Badge to update in case it exists.
     */
    where: BadgeWhereUniqueInput
    /**
     * In case the Badge found by the `where` argument doesn't exist, create a new Badge with this data.
     */
    create: XOR<BadgeCreateInput, BadgeUncheckedCreateInput>
    /**
     * In case the Badge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BadgeUpdateInput, BadgeUncheckedUpdateInput>
  }

  /**
   * Badge delete
   */
  export type BadgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter which Badge to delete.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge deleteMany
   */
  export type BadgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Badges to delete
     */
    where?: BadgeWhereInput
    /**
     * Limit how many Badges to delete.
     */
    limit?: number
  }

  /**
   * Badge.badgesEarned
   */
  export type Badge$badgesEarnedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeEarned
     */
    select?: BadgeEarnedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeEarned
     */
    omit?: BadgeEarnedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeEarnedInclude<ExtArgs> | null
    where?: BadgeEarnedWhereInput
    orderBy?: BadgeEarnedOrderByWithRelationInput | BadgeEarnedOrderByWithRelationInput[]
    cursor?: BadgeEarnedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BadgeEarnedScalarFieldEnum | BadgeEarnedScalarFieldEnum[]
  }

  /**
   * Badge without action
   */
  export type BadgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
  }


  /**
   * Model ChallengeCompletion
   */

  export type AggregateChallengeCompletion = {
    _count: ChallengeCompletionCountAggregateOutputType | null
    _avg: ChallengeCompletionAvgAggregateOutputType | null
    _sum: ChallengeCompletionSumAggregateOutputType | null
    _min: ChallengeCompletionMinAggregateOutputType | null
    _max: ChallengeCompletionMaxAggregateOutputType | null
  }

  export type ChallengeCompletionAvgAggregateOutputType = {
    currentCompletions: number | null
  }

  export type ChallengeCompletionSumAggregateOutputType = {
    currentCompletions: number | null
  }

  export type ChallengeCompletionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    challengeId: string | null
    status: $Enums.ProgressStatus | null
    completedAt: Date | null
    createdAt: Date | null
    currentCompletions: number | null
  }

  export type ChallengeCompletionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    challengeId: string | null
    status: $Enums.ProgressStatus | null
    completedAt: Date | null
    createdAt: Date | null
    currentCompletions: number | null
  }

  export type ChallengeCompletionCountAggregateOutputType = {
    id: number
    userId: number
    challengeId: number
    status: number
    completedAt: number
    createdAt: number
    currentCompletions: number
    _all: number
  }


  export type ChallengeCompletionAvgAggregateInputType = {
    currentCompletions?: true
  }

  export type ChallengeCompletionSumAggregateInputType = {
    currentCompletions?: true
  }

  export type ChallengeCompletionMinAggregateInputType = {
    id?: true
    userId?: true
    challengeId?: true
    status?: true
    completedAt?: true
    createdAt?: true
    currentCompletions?: true
  }

  export type ChallengeCompletionMaxAggregateInputType = {
    id?: true
    userId?: true
    challengeId?: true
    status?: true
    completedAt?: true
    createdAt?: true
    currentCompletions?: true
  }

  export type ChallengeCompletionCountAggregateInputType = {
    id?: true
    userId?: true
    challengeId?: true
    status?: true
    completedAt?: true
    createdAt?: true
    currentCompletions?: true
    _all?: true
  }

  export type ChallengeCompletionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChallengeCompletion to aggregate.
     */
    where?: ChallengeCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeCompletions to fetch.
     */
    orderBy?: ChallengeCompletionOrderByWithRelationInput | ChallengeCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChallengeCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChallengeCompletions
    **/
    _count?: true | ChallengeCompletionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChallengeCompletionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChallengeCompletionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengeCompletionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengeCompletionMaxAggregateInputType
  }

  export type GetChallengeCompletionAggregateType<T extends ChallengeCompletionAggregateArgs> = {
        [P in keyof T & keyof AggregateChallengeCompletion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallengeCompletion[P]>
      : GetScalarType<T[P], AggregateChallengeCompletion[P]>
  }




  export type ChallengeCompletionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeCompletionWhereInput
    orderBy?: ChallengeCompletionOrderByWithAggregationInput | ChallengeCompletionOrderByWithAggregationInput[]
    by: ChallengeCompletionScalarFieldEnum[] | ChallengeCompletionScalarFieldEnum
    having?: ChallengeCompletionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengeCompletionCountAggregateInputType | true
    _avg?: ChallengeCompletionAvgAggregateInputType
    _sum?: ChallengeCompletionSumAggregateInputType
    _min?: ChallengeCompletionMinAggregateInputType
    _max?: ChallengeCompletionMaxAggregateInputType
  }

  export type ChallengeCompletionGroupByOutputType = {
    id: string
    userId: string
    challengeId: string
    status: $Enums.ProgressStatus
    completedAt: Date | null
    createdAt: Date
    currentCompletions: number
    _count: ChallengeCompletionCountAggregateOutputType | null
    _avg: ChallengeCompletionAvgAggregateOutputType | null
    _sum: ChallengeCompletionSumAggregateOutputType | null
    _min: ChallengeCompletionMinAggregateOutputType | null
    _max: ChallengeCompletionMaxAggregateOutputType | null
  }

  type GetChallengeCompletionGroupByPayload<T extends ChallengeCompletionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallengeCompletionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengeCompletionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengeCompletionGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengeCompletionGroupByOutputType[P]>
        }
      >
    >


  export type ChallengeCompletionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    challengeId?: boolean
    status?: boolean
    completedAt?: boolean
    createdAt?: boolean
    currentCompletions?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challengeCompletion"]>

  export type ChallengeCompletionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    challengeId?: boolean
    status?: boolean
    completedAt?: boolean
    createdAt?: boolean
    currentCompletions?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challengeCompletion"]>

  export type ChallengeCompletionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    challengeId?: boolean
    status?: boolean
    completedAt?: boolean
    createdAt?: boolean
    currentCompletions?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challengeCompletion"]>

  export type ChallengeCompletionSelectScalar = {
    id?: boolean
    userId?: boolean
    challengeId?: boolean
    status?: boolean
    completedAt?: boolean
    createdAt?: boolean
    currentCompletions?: boolean
  }

  export type ChallengeCompletionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "challengeId" | "status" | "completedAt" | "createdAt" | "currentCompletions", ExtArgs["result"]["challengeCompletion"]>
  export type ChallengeCompletionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChallengeCompletionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChallengeCompletionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChallengeCompletionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChallengeCompletion"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      challengeId: string
      status: $Enums.ProgressStatus
      completedAt: Date | null
      createdAt: Date
      currentCompletions: number
    }, ExtArgs["result"]["challengeCompletion"]>
    composites: {}
  }

  type ChallengeCompletionGetPayload<S extends boolean | null | undefined | ChallengeCompletionDefaultArgs> = $Result.GetResult<Prisma.$ChallengeCompletionPayload, S>

  type ChallengeCompletionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChallengeCompletionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChallengeCompletionCountAggregateInputType | true
    }

  export interface ChallengeCompletionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChallengeCompletion'], meta: { name: 'ChallengeCompletion' } }
    /**
     * Find zero or one ChallengeCompletion that matches the filter.
     * @param {ChallengeCompletionFindUniqueArgs} args - Arguments to find a ChallengeCompletion
     * @example
     * // Get one ChallengeCompletion
     * const challengeCompletion = await prisma.challengeCompletion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChallengeCompletionFindUniqueArgs>(args: SelectSubset<T, ChallengeCompletionFindUniqueArgs<ExtArgs>>): Prisma__ChallengeCompletionClient<$Result.GetResult<Prisma.$ChallengeCompletionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChallengeCompletion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChallengeCompletionFindUniqueOrThrowArgs} args - Arguments to find a ChallengeCompletion
     * @example
     * // Get one ChallengeCompletion
     * const challengeCompletion = await prisma.challengeCompletion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChallengeCompletionFindUniqueOrThrowArgs>(args: SelectSubset<T, ChallengeCompletionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChallengeCompletionClient<$Result.GetResult<Prisma.$ChallengeCompletionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChallengeCompletion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeCompletionFindFirstArgs} args - Arguments to find a ChallengeCompletion
     * @example
     * // Get one ChallengeCompletion
     * const challengeCompletion = await prisma.challengeCompletion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChallengeCompletionFindFirstArgs>(args?: SelectSubset<T, ChallengeCompletionFindFirstArgs<ExtArgs>>): Prisma__ChallengeCompletionClient<$Result.GetResult<Prisma.$ChallengeCompletionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChallengeCompletion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeCompletionFindFirstOrThrowArgs} args - Arguments to find a ChallengeCompletion
     * @example
     * // Get one ChallengeCompletion
     * const challengeCompletion = await prisma.challengeCompletion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChallengeCompletionFindFirstOrThrowArgs>(args?: SelectSubset<T, ChallengeCompletionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChallengeCompletionClient<$Result.GetResult<Prisma.$ChallengeCompletionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChallengeCompletions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeCompletionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChallengeCompletions
     * const challengeCompletions = await prisma.challengeCompletion.findMany()
     * 
     * // Get first 10 ChallengeCompletions
     * const challengeCompletions = await prisma.challengeCompletion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengeCompletionWithIdOnly = await prisma.challengeCompletion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChallengeCompletionFindManyArgs>(args?: SelectSubset<T, ChallengeCompletionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeCompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChallengeCompletion.
     * @param {ChallengeCompletionCreateArgs} args - Arguments to create a ChallengeCompletion.
     * @example
     * // Create one ChallengeCompletion
     * const ChallengeCompletion = await prisma.challengeCompletion.create({
     *   data: {
     *     // ... data to create a ChallengeCompletion
     *   }
     * })
     * 
     */
    create<T extends ChallengeCompletionCreateArgs>(args: SelectSubset<T, ChallengeCompletionCreateArgs<ExtArgs>>): Prisma__ChallengeCompletionClient<$Result.GetResult<Prisma.$ChallengeCompletionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChallengeCompletions.
     * @param {ChallengeCompletionCreateManyArgs} args - Arguments to create many ChallengeCompletions.
     * @example
     * // Create many ChallengeCompletions
     * const challengeCompletion = await prisma.challengeCompletion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChallengeCompletionCreateManyArgs>(args?: SelectSubset<T, ChallengeCompletionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChallengeCompletions and returns the data saved in the database.
     * @param {ChallengeCompletionCreateManyAndReturnArgs} args - Arguments to create many ChallengeCompletions.
     * @example
     * // Create many ChallengeCompletions
     * const challengeCompletion = await prisma.challengeCompletion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChallengeCompletions and only return the `id`
     * const challengeCompletionWithIdOnly = await prisma.challengeCompletion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChallengeCompletionCreateManyAndReturnArgs>(args?: SelectSubset<T, ChallengeCompletionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeCompletionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChallengeCompletion.
     * @param {ChallengeCompletionDeleteArgs} args - Arguments to delete one ChallengeCompletion.
     * @example
     * // Delete one ChallengeCompletion
     * const ChallengeCompletion = await prisma.challengeCompletion.delete({
     *   where: {
     *     // ... filter to delete one ChallengeCompletion
     *   }
     * })
     * 
     */
    delete<T extends ChallengeCompletionDeleteArgs>(args: SelectSubset<T, ChallengeCompletionDeleteArgs<ExtArgs>>): Prisma__ChallengeCompletionClient<$Result.GetResult<Prisma.$ChallengeCompletionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChallengeCompletion.
     * @param {ChallengeCompletionUpdateArgs} args - Arguments to update one ChallengeCompletion.
     * @example
     * // Update one ChallengeCompletion
     * const challengeCompletion = await prisma.challengeCompletion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChallengeCompletionUpdateArgs>(args: SelectSubset<T, ChallengeCompletionUpdateArgs<ExtArgs>>): Prisma__ChallengeCompletionClient<$Result.GetResult<Prisma.$ChallengeCompletionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChallengeCompletions.
     * @param {ChallengeCompletionDeleteManyArgs} args - Arguments to filter ChallengeCompletions to delete.
     * @example
     * // Delete a few ChallengeCompletions
     * const { count } = await prisma.challengeCompletion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChallengeCompletionDeleteManyArgs>(args?: SelectSubset<T, ChallengeCompletionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChallengeCompletions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeCompletionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChallengeCompletions
     * const challengeCompletion = await prisma.challengeCompletion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChallengeCompletionUpdateManyArgs>(args: SelectSubset<T, ChallengeCompletionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChallengeCompletions and returns the data updated in the database.
     * @param {ChallengeCompletionUpdateManyAndReturnArgs} args - Arguments to update many ChallengeCompletions.
     * @example
     * // Update many ChallengeCompletions
     * const challengeCompletion = await prisma.challengeCompletion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChallengeCompletions and only return the `id`
     * const challengeCompletionWithIdOnly = await prisma.challengeCompletion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChallengeCompletionUpdateManyAndReturnArgs>(args: SelectSubset<T, ChallengeCompletionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeCompletionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChallengeCompletion.
     * @param {ChallengeCompletionUpsertArgs} args - Arguments to update or create a ChallengeCompletion.
     * @example
     * // Update or create a ChallengeCompletion
     * const challengeCompletion = await prisma.challengeCompletion.upsert({
     *   create: {
     *     // ... data to create a ChallengeCompletion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChallengeCompletion we want to update
     *   }
     * })
     */
    upsert<T extends ChallengeCompletionUpsertArgs>(args: SelectSubset<T, ChallengeCompletionUpsertArgs<ExtArgs>>): Prisma__ChallengeCompletionClient<$Result.GetResult<Prisma.$ChallengeCompletionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChallengeCompletions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeCompletionCountArgs} args - Arguments to filter ChallengeCompletions to count.
     * @example
     * // Count the number of ChallengeCompletions
     * const count = await prisma.challengeCompletion.count({
     *   where: {
     *     // ... the filter for the ChallengeCompletions we want to count
     *   }
     * })
    **/
    count<T extends ChallengeCompletionCountArgs>(
      args?: Subset<T, ChallengeCompletionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengeCompletionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChallengeCompletion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeCompletionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChallengeCompletionAggregateArgs>(args: Subset<T, ChallengeCompletionAggregateArgs>): Prisma.PrismaPromise<GetChallengeCompletionAggregateType<T>>

    /**
     * Group by ChallengeCompletion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeCompletionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChallengeCompletionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChallengeCompletionGroupByArgs['orderBy'] }
        : { orderBy?: ChallengeCompletionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChallengeCompletionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengeCompletionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChallengeCompletion model
   */
  readonly fields: ChallengeCompletionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChallengeCompletion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChallengeCompletionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChallengeCompletion model
   */
  interface ChallengeCompletionFieldRefs {
    readonly id: FieldRef<"ChallengeCompletion", 'String'>
    readonly userId: FieldRef<"ChallengeCompletion", 'String'>
    readonly challengeId: FieldRef<"ChallengeCompletion", 'String'>
    readonly status: FieldRef<"ChallengeCompletion", 'ProgressStatus'>
    readonly completedAt: FieldRef<"ChallengeCompletion", 'DateTime'>
    readonly createdAt: FieldRef<"ChallengeCompletion", 'DateTime'>
    readonly currentCompletions: FieldRef<"ChallengeCompletion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ChallengeCompletion findUnique
   */
  export type ChallengeCompletionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeCompletion
     */
    select?: ChallengeCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeCompletion
     */
    omit?: ChallengeCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeCompletionInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeCompletion to fetch.
     */
    where: ChallengeCompletionWhereUniqueInput
  }

  /**
   * ChallengeCompletion findUniqueOrThrow
   */
  export type ChallengeCompletionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeCompletion
     */
    select?: ChallengeCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeCompletion
     */
    omit?: ChallengeCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeCompletionInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeCompletion to fetch.
     */
    where: ChallengeCompletionWhereUniqueInput
  }

  /**
   * ChallengeCompletion findFirst
   */
  export type ChallengeCompletionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeCompletion
     */
    select?: ChallengeCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeCompletion
     */
    omit?: ChallengeCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeCompletionInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeCompletion to fetch.
     */
    where?: ChallengeCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeCompletions to fetch.
     */
    orderBy?: ChallengeCompletionOrderByWithRelationInput | ChallengeCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChallengeCompletions.
     */
    cursor?: ChallengeCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChallengeCompletions.
     */
    distinct?: ChallengeCompletionScalarFieldEnum | ChallengeCompletionScalarFieldEnum[]
  }

  /**
   * ChallengeCompletion findFirstOrThrow
   */
  export type ChallengeCompletionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeCompletion
     */
    select?: ChallengeCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeCompletion
     */
    omit?: ChallengeCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeCompletionInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeCompletion to fetch.
     */
    where?: ChallengeCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeCompletions to fetch.
     */
    orderBy?: ChallengeCompletionOrderByWithRelationInput | ChallengeCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChallengeCompletions.
     */
    cursor?: ChallengeCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChallengeCompletions.
     */
    distinct?: ChallengeCompletionScalarFieldEnum | ChallengeCompletionScalarFieldEnum[]
  }

  /**
   * ChallengeCompletion findMany
   */
  export type ChallengeCompletionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeCompletion
     */
    select?: ChallengeCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeCompletion
     */
    omit?: ChallengeCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeCompletionInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeCompletions to fetch.
     */
    where?: ChallengeCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeCompletions to fetch.
     */
    orderBy?: ChallengeCompletionOrderByWithRelationInput | ChallengeCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChallengeCompletions.
     */
    cursor?: ChallengeCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeCompletions.
     */
    skip?: number
    distinct?: ChallengeCompletionScalarFieldEnum | ChallengeCompletionScalarFieldEnum[]
  }

  /**
   * ChallengeCompletion create
   */
  export type ChallengeCompletionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeCompletion
     */
    select?: ChallengeCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeCompletion
     */
    omit?: ChallengeCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeCompletionInclude<ExtArgs> | null
    /**
     * The data needed to create a ChallengeCompletion.
     */
    data: XOR<ChallengeCompletionCreateInput, ChallengeCompletionUncheckedCreateInput>
  }

  /**
   * ChallengeCompletion createMany
   */
  export type ChallengeCompletionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChallengeCompletions.
     */
    data: ChallengeCompletionCreateManyInput | ChallengeCompletionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChallengeCompletion createManyAndReturn
   */
  export type ChallengeCompletionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeCompletion
     */
    select?: ChallengeCompletionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeCompletion
     */
    omit?: ChallengeCompletionOmit<ExtArgs> | null
    /**
     * The data used to create many ChallengeCompletions.
     */
    data: ChallengeCompletionCreateManyInput | ChallengeCompletionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeCompletionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChallengeCompletion update
   */
  export type ChallengeCompletionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeCompletion
     */
    select?: ChallengeCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeCompletion
     */
    omit?: ChallengeCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeCompletionInclude<ExtArgs> | null
    /**
     * The data needed to update a ChallengeCompletion.
     */
    data: XOR<ChallengeCompletionUpdateInput, ChallengeCompletionUncheckedUpdateInput>
    /**
     * Choose, which ChallengeCompletion to update.
     */
    where: ChallengeCompletionWhereUniqueInput
  }

  /**
   * ChallengeCompletion updateMany
   */
  export type ChallengeCompletionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChallengeCompletions.
     */
    data: XOR<ChallengeCompletionUpdateManyMutationInput, ChallengeCompletionUncheckedUpdateManyInput>
    /**
     * Filter which ChallengeCompletions to update
     */
    where?: ChallengeCompletionWhereInput
    /**
     * Limit how many ChallengeCompletions to update.
     */
    limit?: number
  }

  /**
   * ChallengeCompletion updateManyAndReturn
   */
  export type ChallengeCompletionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeCompletion
     */
    select?: ChallengeCompletionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeCompletion
     */
    omit?: ChallengeCompletionOmit<ExtArgs> | null
    /**
     * The data used to update ChallengeCompletions.
     */
    data: XOR<ChallengeCompletionUpdateManyMutationInput, ChallengeCompletionUncheckedUpdateManyInput>
    /**
     * Filter which ChallengeCompletions to update
     */
    where?: ChallengeCompletionWhereInput
    /**
     * Limit how many ChallengeCompletions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeCompletionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChallengeCompletion upsert
   */
  export type ChallengeCompletionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeCompletion
     */
    select?: ChallengeCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeCompletion
     */
    omit?: ChallengeCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeCompletionInclude<ExtArgs> | null
    /**
     * The filter to search for the ChallengeCompletion to update in case it exists.
     */
    where: ChallengeCompletionWhereUniqueInput
    /**
     * In case the ChallengeCompletion found by the `where` argument doesn't exist, create a new ChallengeCompletion with this data.
     */
    create: XOR<ChallengeCompletionCreateInput, ChallengeCompletionUncheckedCreateInput>
    /**
     * In case the ChallengeCompletion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChallengeCompletionUpdateInput, ChallengeCompletionUncheckedUpdateInput>
  }

  /**
   * ChallengeCompletion delete
   */
  export type ChallengeCompletionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeCompletion
     */
    select?: ChallengeCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeCompletion
     */
    omit?: ChallengeCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeCompletionInclude<ExtArgs> | null
    /**
     * Filter which ChallengeCompletion to delete.
     */
    where: ChallengeCompletionWhereUniqueInput
  }

  /**
   * ChallengeCompletion deleteMany
   */
  export type ChallengeCompletionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChallengeCompletions to delete
     */
    where?: ChallengeCompletionWhereInput
    /**
     * Limit how many ChallengeCompletions to delete.
     */
    limit?: number
  }

  /**
   * ChallengeCompletion without action
   */
  export type ChallengeCompletionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeCompletion
     */
    select?: ChallengeCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeCompletion
     */
    omit?: ChallengeCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeCompletionInclude<ExtArgs> | null
  }


  /**
   * Model BadgeEarned
   */

  export type AggregateBadgeEarned = {
    _count: BadgeEarnedCountAggregateOutputType | null
    _min: BadgeEarnedMinAggregateOutputType | null
    _max: BadgeEarnedMaxAggregateOutputType | null
  }

  export type BadgeEarnedMinAggregateOutputType = {
    id: string | null
    userId: string | null
    badgeId: string | null
    earnedAt: Date | null
  }

  export type BadgeEarnedMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    badgeId: string | null
    earnedAt: Date | null
  }

  export type BadgeEarnedCountAggregateOutputType = {
    id: number
    userId: number
    badgeId: number
    earnedAt: number
    _all: number
  }


  export type BadgeEarnedMinAggregateInputType = {
    id?: true
    userId?: true
    badgeId?: true
    earnedAt?: true
  }

  export type BadgeEarnedMaxAggregateInputType = {
    id?: true
    userId?: true
    badgeId?: true
    earnedAt?: true
  }

  export type BadgeEarnedCountAggregateInputType = {
    id?: true
    userId?: true
    badgeId?: true
    earnedAt?: true
    _all?: true
  }

  export type BadgeEarnedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BadgeEarned to aggregate.
     */
    where?: BadgeEarnedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BadgeEarneds to fetch.
     */
    orderBy?: BadgeEarnedOrderByWithRelationInput | BadgeEarnedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BadgeEarnedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BadgeEarneds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BadgeEarneds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BadgeEarneds
    **/
    _count?: true | BadgeEarnedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BadgeEarnedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BadgeEarnedMaxAggregateInputType
  }

  export type GetBadgeEarnedAggregateType<T extends BadgeEarnedAggregateArgs> = {
        [P in keyof T & keyof AggregateBadgeEarned]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBadgeEarned[P]>
      : GetScalarType<T[P], AggregateBadgeEarned[P]>
  }




  export type BadgeEarnedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BadgeEarnedWhereInput
    orderBy?: BadgeEarnedOrderByWithAggregationInput | BadgeEarnedOrderByWithAggregationInput[]
    by: BadgeEarnedScalarFieldEnum[] | BadgeEarnedScalarFieldEnum
    having?: BadgeEarnedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BadgeEarnedCountAggregateInputType | true
    _min?: BadgeEarnedMinAggregateInputType
    _max?: BadgeEarnedMaxAggregateInputType
  }

  export type BadgeEarnedGroupByOutputType = {
    id: string
    userId: string
    badgeId: string
    earnedAt: Date
    _count: BadgeEarnedCountAggregateOutputType | null
    _min: BadgeEarnedMinAggregateOutputType | null
    _max: BadgeEarnedMaxAggregateOutputType | null
  }

  type GetBadgeEarnedGroupByPayload<T extends BadgeEarnedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BadgeEarnedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BadgeEarnedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BadgeEarnedGroupByOutputType[P]>
            : GetScalarType<T[P], BadgeEarnedGroupByOutputType[P]>
        }
      >
    >


  export type BadgeEarnedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    badgeId?: boolean
    earnedAt?: boolean
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["badgeEarned"]>

  export type BadgeEarnedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    badgeId?: boolean
    earnedAt?: boolean
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["badgeEarned"]>

  export type BadgeEarnedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    badgeId?: boolean
    earnedAt?: boolean
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["badgeEarned"]>

  export type BadgeEarnedSelectScalar = {
    id?: boolean
    userId?: boolean
    badgeId?: boolean
    earnedAt?: boolean
  }

  export type BadgeEarnedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "badgeId" | "earnedAt", ExtArgs["result"]["badgeEarned"]>
  export type BadgeEarnedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BadgeEarnedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BadgeEarnedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BadgeEarnedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BadgeEarned"
    objects: {
      badge: Prisma.$BadgePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      badgeId: string
      earnedAt: Date
    }, ExtArgs["result"]["badgeEarned"]>
    composites: {}
  }

  type BadgeEarnedGetPayload<S extends boolean | null | undefined | BadgeEarnedDefaultArgs> = $Result.GetResult<Prisma.$BadgeEarnedPayload, S>

  type BadgeEarnedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BadgeEarnedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BadgeEarnedCountAggregateInputType | true
    }

  export interface BadgeEarnedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BadgeEarned'], meta: { name: 'BadgeEarned' } }
    /**
     * Find zero or one BadgeEarned that matches the filter.
     * @param {BadgeEarnedFindUniqueArgs} args - Arguments to find a BadgeEarned
     * @example
     * // Get one BadgeEarned
     * const badgeEarned = await prisma.badgeEarned.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BadgeEarnedFindUniqueArgs>(args: SelectSubset<T, BadgeEarnedFindUniqueArgs<ExtArgs>>): Prisma__BadgeEarnedClient<$Result.GetResult<Prisma.$BadgeEarnedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BadgeEarned that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BadgeEarnedFindUniqueOrThrowArgs} args - Arguments to find a BadgeEarned
     * @example
     * // Get one BadgeEarned
     * const badgeEarned = await prisma.badgeEarned.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BadgeEarnedFindUniqueOrThrowArgs>(args: SelectSubset<T, BadgeEarnedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BadgeEarnedClient<$Result.GetResult<Prisma.$BadgeEarnedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BadgeEarned that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeEarnedFindFirstArgs} args - Arguments to find a BadgeEarned
     * @example
     * // Get one BadgeEarned
     * const badgeEarned = await prisma.badgeEarned.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BadgeEarnedFindFirstArgs>(args?: SelectSubset<T, BadgeEarnedFindFirstArgs<ExtArgs>>): Prisma__BadgeEarnedClient<$Result.GetResult<Prisma.$BadgeEarnedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BadgeEarned that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeEarnedFindFirstOrThrowArgs} args - Arguments to find a BadgeEarned
     * @example
     * // Get one BadgeEarned
     * const badgeEarned = await prisma.badgeEarned.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BadgeEarnedFindFirstOrThrowArgs>(args?: SelectSubset<T, BadgeEarnedFindFirstOrThrowArgs<ExtArgs>>): Prisma__BadgeEarnedClient<$Result.GetResult<Prisma.$BadgeEarnedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BadgeEarneds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeEarnedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BadgeEarneds
     * const badgeEarneds = await prisma.badgeEarned.findMany()
     * 
     * // Get first 10 BadgeEarneds
     * const badgeEarneds = await prisma.badgeEarned.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const badgeEarnedWithIdOnly = await prisma.badgeEarned.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BadgeEarnedFindManyArgs>(args?: SelectSubset<T, BadgeEarnedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgeEarnedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BadgeEarned.
     * @param {BadgeEarnedCreateArgs} args - Arguments to create a BadgeEarned.
     * @example
     * // Create one BadgeEarned
     * const BadgeEarned = await prisma.badgeEarned.create({
     *   data: {
     *     // ... data to create a BadgeEarned
     *   }
     * })
     * 
     */
    create<T extends BadgeEarnedCreateArgs>(args: SelectSubset<T, BadgeEarnedCreateArgs<ExtArgs>>): Prisma__BadgeEarnedClient<$Result.GetResult<Prisma.$BadgeEarnedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BadgeEarneds.
     * @param {BadgeEarnedCreateManyArgs} args - Arguments to create many BadgeEarneds.
     * @example
     * // Create many BadgeEarneds
     * const badgeEarned = await prisma.badgeEarned.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BadgeEarnedCreateManyArgs>(args?: SelectSubset<T, BadgeEarnedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BadgeEarneds and returns the data saved in the database.
     * @param {BadgeEarnedCreateManyAndReturnArgs} args - Arguments to create many BadgeEarneds.
     * @example
     * // Create many BadgeEarneds
     * const badgeEarned = await prisma.badgeEarned.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BadgeEarneds and only return the `id`
     * const badgeEarnedWithIdOnly = await prisma.badgeEarned.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BadgeEarnedCreateManyAndReturnArgs>(args?: SelectSubset<T, BadgeEarnedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgeEarnedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BadgeEarned.
     * @param {BadgeEarnedDeleteArgs} args - Arguments to delete one BadgeEarned.
     * @example
     * // Delete one BadgeEarned
     * const BadgeEarned = await prisma.badgeEarned.delete({
     *   where: {
     *     // ... filter to delete one BadgeEarned
     *   }
     * })
     * 
     */
    delete<T extends BadgeEarnedDeleteArgs>(args: SelectSubset<T, BadgeEarnedDeleteArgs<ExtArgs>>): Prisma__BadgeEarnedClient<$Result.GetResult<Prisma.$BadgeEarnedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BadgeEarned.
     * @param {BadgeEarnedUpdateArgs} args - Arguments to update one BadgeEarned.
     * @example
     * // Update one BadgeEarned
     * const badgeEarned = await prisma.badgeEarned.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BadgeEarnedUpdateArgs>(args: SelectSubset<T, BadgeEarnedUpdateArgs<ExtArgs>>): Prisma__BadgeEarnedClient<$Result.GetResult<Prisma.$BadgeEarnedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BadgeEarneds.
     * @param {BadgeEarnedDeleteManyArgs} args - Arguments to filter BadgeEarneds to delete.
     * @example
     * // Delete a few BadgeEarneds
     * const { count } = await prisma.badgeEarned.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BadgeEarnedDeleteManyArgs>(args?: SelectSubset<T, BadgeEarnedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BadgeEarneds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeEarnedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BadgeEarneds
     * const badgeEarned = await prisma.badgeEarned.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BadgeEarnedUpdateManyArgs>(args: SelectSubset<T, BadgeEarnedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BadgeEarneds and returns the data updated in the database.
     * @param {BadgeEarnedUpdateManyAndReturnArgs} args - Arguments to update many BadgeEarneds.
     * @example
     * // Update many BadgeEarneds
     * const badgeEarned = await prisma.badgeEarned.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BadgeEarneds and only return the `id`
     * const badgeEarnedWithIdOnly = await prisma.badgeEarned.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BadgeEarnedUpdateManyAndReturnArgs>(args: SelectSubset<T, BadgeEarnedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgeEarnedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BadgeEarned.
     * @param {BadgeEarnedUpsertArgs} args - Arguments to update or create a BadgeEarned.
     * @example
     * // Update or create a BadgeEarned
     * const badgeEarned = await prisma.badgeEarned.upsert({
     *   create: {
     *     // ... data to create a BadgeEarned
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BadgeEarned we want to update
     *   }
     * })
     */
    upsert<T extends BadgeEarnedUpsertArgs>(args: SelectSubset<T, BadgeEarnedUpsertArgs<ExtArgs>>): Prisma__BadgeEarnedClient<$Result.GetResult<Prisma.$BadgeEarnedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BadgeEarneds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeEarnedCountArgs} args - Arguments to filter BadgeEarneds to count.
     * @example
     * // Count the number of BadgeEarneds
     * const count = await prisma.badgeEarned.count({
     *   where: {
     *     // ... the filter for the BadgeEarneds we want to count
     *   }
     * })
    **/
    count<T extends BadgeEarnedCountArgs>(
      args?: Subset<T, BadgeEarnedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BadgeEarnedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BadgeEarned.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeEarnedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BadgeEarnedAggregateArgs>(args: Subset<T, BadgeEarnedAggregateArgs>): Prisma.PrismaPromise<GetBadgeEarnedAggregateType<T>>

    /**
     * Group by BadgeEarned.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeEarnedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BadgeEarnedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BadgeEarnedGroupByArgs['orderBy'] }
        : { orderBy?: BadgeEarnedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BadgeEarnedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBadgeEarnedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BadgeEarned model
   */
  readonly fields: BadgeEarnedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BadgeEarned.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BadgeEarnedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    badge<T extends BadgeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BadgeDefaultArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BadgeEarned model
   */
  interface BadgeEarnedFieldRefs {
    readonly id: FieldRef<"BadgeEarned", 'String'>
    readonly userId: FieldRef<"BadgeEarned", 'String'>
    readonly badgeId: FieldRef<"BadgeEarned", 'String'>
    readonly earnedAt: FieldRef<"BadgeEarned", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BadgeEarned findUnique
   */
  export type BadgeEarnedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeEarned
     */
    select?: BadgeEarnedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeEarned
     */
    omit?: BadgeEarnedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeEarnedInclude<ExtArgs> | null
    /**
     * Filter, which BadgeEarned to fetch.
     */
    where: BadgeEarnedWhereUniqueInput
  }

  /**
   * BadgeEarned findUniqueOrThrow
   */
  export type BadgeEarnedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeEarned
     */
    select?: BadgeEarnedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeEarned
     */
    omit?: BadgeEarnedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeEarnedInclude<ExtArgs> | null
    /**
     * Filter, which BadgeEarned to fetch.
     */
    where: BadgeEarnedWhereUniqueInput
  }

  /**
   * BadgeEarned findFirst
   */
  export type BadgeEarnedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeEarned
     */
    select?: BadgeEarnedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeEarned
     */
    omit?: BadgeEarnedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeEarnedInclude<ExtArgs> | null
    /**
     * Filter, which BadgeEarned to fetch.
     */
    where?: BadgeEarnedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BadgeEarneds to fetch.
     */
    orderBy?: BadgeEarnedOrderByWithRelationInput | BadgeEarnedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BadgeEarneds.
     */
    cursor?: BadgeEarnedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BadgeEarneds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BadgeEarneds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BadgeEarneds.
     */
    distinct?: BadgeEarnedScalarFieldEnum | BadgeEarnedScalarFieldEnum[]
  }

  /**
   * BadgeEarned findFirstOrThrow
   */
  export type BadgeEarnedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeEarned
     */
    select?: BadgeEarnedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeEarned
     */
    omit?: BadgeEarnedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeEarnedInclude<ExtArgs> | null
    /**
     * Filter, which BadgeEarned to fetch.
     */
    where?: BadgeEarnedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BadgeEarneds to fetch.
     */
    orderBy?: BadgeEarnedOrderByWithRelationInput | BadgeEarnedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BadgeEarneds.
     */
    cursor?: BadgeEarnedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BadgeEarneds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BadgeEarneds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BadgeEarneds.
     */
    distinct?: BadgeEarnedScalarFieldEnum | BadgeEarnedScalarFieldEnum[]
  }

  /**
   * BadgeEarned findMany
   */
  export type BadgeEarnedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeEarned
     */
    select?: BadgeEarnedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeEarned
     */
    omit?: BadgeEarnedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeEarnedInclude<ExtArgs> | null
    /**
     * Filter, which BadgeEarneds to fetch.
     */
    where?: BadgeEarnedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BadgeEarneds to fetch.
     */
    orderBy?: BadgeEarnedOrderByWithRelationInput | BadgeEarnedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BadgeEarneds.
     */
    cursor?: BadgeEarnedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BadgeEarneds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BadgeEarneds.
     */
    skip?: number
    distinct?: BadgeEarnedScalarFieldEnum | BadgeEarnedScalarFieldEnum[]
  }

  /**
   * BadgeEarned create
   */
  export type BadgeEarnedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeEarned
     */
    select?: BadgeEarnedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeEarned
     */
    omit?: BadgeEarnedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeEarnedInclude<ExtArgs> | null
    /**
     * The data needed to create a BadgeEarned.
     */
    data: XOR<BadgeEarnedCreateInput, BadgeEarnedUncheckedCreateInput>
  }

  /**
   * BadgeEarned createMany
   */
  export type BadgeEarnedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BadgeEarneds.
     */
    data: BadgeEarnedCreateManyInput | BadgeEarnedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BadgeEarned createManyAndReturn
   */
  export type BadgeEarnedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeEarned
     */
    select?: BadgeEarnedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeEarned
     */
    omit?: BadgeEarnedOmit<ExtArgs> | null
    /**
     * The data used to create many BadgeEarneds.
     */
    data: BadgeEarnedCreateManyInput | BadgeEarnedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeEarnedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BadgeEarned update
   */
  export type BadgeEarnedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeEarned
     */
    select?: BadgeEarnedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeEarned
     */
    omit?: BadgeEarnedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeEarnedInclude<ExtArgs> | null
    /**
     * The data needed to update a BadgeEarned.
     */
    data: XOR<BadgeEarnedUpdateInput, BadgeEarnedUncheckedUpdateInput>
    /**
     * Choose, which BadgeEarned to update.
     */
    where: BadgeEarnedWhereUniqueInput
  }

  /**
   * BadgeEarned updateMany
   */
  export type BadgeEarnedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BadgeEarneds.
     */
    data: XOR<BadgeEarnedUpdateManyMutationInput, BadgeEarnedUncheckedUpdateManyInput>
    /**
     * Filter which BadgeEarneds to update
     */
    where?: BadgeEarnedWhereInput
    /**
     * Limit how many BadgeEarneds to update.
     */
    limit?: number
  }

  /**
   * BadgeEarned updateManyAndReturn
   */
  export type BadgeEarnedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeEarned
     */
    select?: BadgeEarnedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeEarned
     */
    omit?: BadgeEarnedOmit<ExtArgs> | null
    /**
     * The data used to update BadgeEarneds.
     */
    data: XOR<BadgeEarnedUpdateManyMutationInput, BadgeEarnedUncheckedUpdateManyInput>
    /**
     * Filter which BadgeEarneds to update
     */
    where?: BadgeEarnedWhereInput
    /**
     * Limit how many BadgeEarneds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeEarnedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BadgeEarned upsert
   */
  export type BadgeEarnedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeEarned
     */
    select?: BadgeEarnedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeEarned
     */
    omit?: BadgeEarnedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeEarnedInclude<ExtArgs> | null
    /**
     * The filter to search for the BadgeEarned to update in case it exists.
     */
    where: BadgeEarnedWhereUniqueInput
    /**
     * In case the BadgeEarned found by the `where` argument doesn't exist, create a new BadgeEarned with this data.
     */
    create: XOR<BadgeEarnedCreateInput, BadgeEarnedUncheckedCreateInput>
    /**
     * In case the BadgeEarned was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BadgeEarnedUpdateInput, BadgeEarnedUncheckedUpdateInput>
  }

  /**
   * BadgeEarned delete
   */
  export type BadgeEarnedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeEarned
     */
    select?: BadgeEarnedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeEarned
     */
    omit?: BadgeEarnedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeEarnedInclude<ExtArgs> | null
    /**
     * Filter which BadgeEarned to delete.
     */
    where: BadgeEarnedWhereUniqueInput
  }

  /**
   * BadgeEarned deleteMany
   */
  export type BadgeEarnedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BadgeEarneds to delete
     */
    where?: BadgeEarnedWhereInput
    /**
     * Limit how many BadgeEarneds to delete.
     */
    limit?: number
  }

  /**
   * BadgeEarned without action
   */
  export type BadgeEarnedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeEarned
     */
    select?: BadgeEarnedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeEarned
     */
    omit?: BadgeEarnedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeEarnedInclude<ExtArgs> | null
  }


  /**
   * Model Reward
   */

  export type AggregateReward = {
    _count: RewardCountAggregateOutputType | null
    _avg: RewardAvgAggregateOutputType | null
    _sum: RewardSumAggregateOutputType | null
    _min: RewardMinAggregateOutputType | null
    _max: RewardMaxAggregateOutputType | null
  }

  export type RewardAvgAggregateOutputType = {
    costXp: number | null
  }

  export type RewardSumAggregateOutputType = {
    costXp: number | null
  }

  export type RewardMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    costXp: number | null
    imageUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type RewardMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    costXp: number | null
    imageUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type RewardCountAggregateOutputType = {
    id: number
    name: number
    description: number
    costXp: number
    imageUrl: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type RewardAvgAggregateInputType = {
    costXp?: true
  }

  export type RewardSumAggregateInputType = {
    costXp?: true
  }

  export type RewardMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    costXp?: true
    imageUrl?: true
    isActive?: true
    createdAt?: true
  }

  export type RewardMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    costXp?: true
    imageUrl?: true
    isActive?: true
    createdAt?: true
  }

  export type RewardCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    costXp?: true
    imageUrl?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type RewardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reward to aggregate.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rewards
    **/
    _count?: true | RewardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RewardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RewardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RewardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RewardMaxAggregateInputType
  }

  export type GetRewardAggregateType<T extends RewardAggregateArgs> = {
        [P in keyof T & keyof AggregateReward]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReward[P]>
      : GetScalarType<T[P], AggregateReward[P]>
  }




  export type RewardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardWhereInput
    orderBy?: RewardOrderByWithAggregationInput | RewardOrderByWithAggregationInput[]
    by: RewardScalarFieldEnum[] | RewardScalarFieldEnum
    having?: RewardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RewardCountAggregateInputType | true
    _avg?: RewardAvgAggregateInputType
    _sum?: RewardSumAggregateInputType
    _min?: RewardMinAggregateInputType
    _max?: RewardMaxAggregateInputType
  }

  export type RewardGroupByOutputType = {
    id: string
    name: string
    description: string
    costXp: number
    imageUrl: string
    isActive: boolean
    createdAt: Date
    _count: RewardCountAggregateOutputType | null
    _avg: RewardAvgAggregateOutputType | null
    _sum: RewardSumAggregateOutputType | null
    _min: RewardMinAggregateOutputType | null
    _max: RewardMaxAggregateOutputType | null
  }

  type GetRewardGroupByPayload<T extends RewardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RewardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RewardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RewardGroupByOutputType[P]>
            : GetScalarType<T[P], RewardGroupByOutputType[P]>
        }
      >
    >


  export type RewardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    costXp?: boolean
    imageUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    claims?: boolean | Reward$claimsArgs<ExtArgs>
    _count?: boolean | RewardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reward"]>

  export type RewardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    costXp?: boolean
    imageUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["reward"]>

  export type RewardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    costXp?: boolean
    imageUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["reward"]>

  export type RewardSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    costXp?: boolean
    imageUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type RewardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "costXp" | "imageUrl" | "isActive" | "createdAt", ExtArgs["result"]["reward"]>
  export type RewardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claims?: boolean | Reward$claimsArgs<ExtArgs>
    _count?: boolean | RewardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RewardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RewardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RewardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reward"
    objects: {
      claims: Prisma.$RewardClaimPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      costXp: number
      imageUrl: string
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["reward"]>
    composites: {}
  }

  type RewardGetPayload<S extends boolean | null | undefined | RewardDefaultArgs> = $Result.GetResult<Prisma.$RewardPayload, S>

  type RewardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RewardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RewardCountAggregateInputType | true
    }

  export interface RewardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reward'], meta: { name: 'Reward' } }
    /**
     * Find zero or one Reward that matches the filter.
     * @param {RewardFindUniqueArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RewardFindUniqueArgs>(args: SelectSubset<T, RewardFindUniqueArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reward that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RewardFindUniqueOrThrowArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RewardFindUniqueOrThrowArgs>(args: SelectSubset<T, RewardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reward that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardFindFirstArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RewardFindFirstArgs>(args?: SelectSubset<T, RewardFindFirstArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reward that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardFindFirstOrThrowArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RewardFindFirstOrThrowArgs>(args?: SelectSubset<T, RewardFindFirstOrThrowArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rewards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rewards
     * const rewards = await prisma.reward.findMany()
     * 
     * // Get first 10 Rewards
     * const rewards = await prisma.reward.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rewardWithIdOnly = await prisma.reward.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RewardFindManyArgs>(args?: SelectSubset<T, RewardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reward.
     * @param {RewardCreateArgs} args - Arguments to create a Reward.
     * @example
     * // Create one Reward
     * const Reward = await prisma.reward.create({
     *   data: {
     *     // ... data to create a Reward
     *   }
     * })
     * 
     */
    create<T extends RewardCreateArgs>(args: SelectSubset<T, RewardCreateArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rewards.
     * @param {RewardCreateManyArgs} args - Arguments to create many Rewards.
     * @example
     * // Create many Rewards
     * const reward = await prisma.reward.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RewardCreateManyArgs>(args?: SelectSubset<T, RewardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rewards and returns the data saved in the database.
     * @param {RewardCreateManyAndReturnArgs} args - Arguments to create many Rewards.
     * @example
     * // Create many Rewards
     * const reward = await prisma.reward.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rewards and only return the `id`
     * const rewardWithIdOnly = await prisma.reward.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RewardCreateManyAndReturnArgs>(args?: SelectSubset<T, RewardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reward.
     * @param {RewardDeleteArgs} args - Arguments to delete one Reward.
     * @example
     * // Delete one Reward
     * const Reward = await prisma.reward.delete({
     *   where: {
     *     // ... filter to delete one Reward
     *   }
     * })
     * 
     */
    delete<T extends RewardDeleteArgs>(args: SelectSubset<T, RewardDeleteArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reward.
     * @param {RewardUpdateArgs} args - Arguments to update one Reward.
     * @example
     * // Update one Reward
     * const reward = await prisma.reward.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RewardUpdateArgs>(args: SelectSubset<T, RewardUpdateArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rewards.
     * @param {RewardDeleteManyArgs} args - Arguments to filter Rewards to delete.
     * @example
     * // Delete a few Rewards
     * const { count } = await prisma.reward.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RewardDeleteManyArgs>(args?: SelectSubset<T, RewardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rewards
     * const reward = await prisma.reward.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RewardUpdateManyArgs>(args: SelectSubset<T, RewardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rewards and returns the data updated in the database.
     * @param {RewardUpdateManyAndReturnArgs} args - Arguments to update many Rewards.
     * @example
     * // Update many Rewards
     * const reward = await prisma.reward.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rewards and only return the `id`
     * const rewardWithIdOnly = await prisma.reward.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RewardUpdateManyAndReturnArgs>(args: SelectSubset<T, RewardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reward.
     * @param {RewardUpsertArgs} args - Arguments to update or create a Reward.
     * @example
     * // Update or create a Reward
     * const reward = await prisma.reward.upsert({
     *   create: {
     *     // ... data to create a Reward
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reward we want to update
     *   }
     * })
     */
    upsert<T extends RewardUpsertArgs>(args: SelectSubset<T, RewardUpsertArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardCountArgs} args - Arguments to filter Rewards to count.
     * @example
     * // Count the number of Rewards
     * const count = await prisma.reward.count({
     *   where: {
     *     // ... the filter for the Rewards we want to count
     *   }
     * })
    **/
    count<T extends RewardCountArgs>(
      args?: Subset<T, RewardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RewardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RewardAggregateArgs>(args: Subset<T, RewardAggregateArgs>): Prisma.PrismaPromise<GetRewardAggregateType<T>>

    /**
     * Group by Reward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RewardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RewardGroupByArgs['orderBy'] }
        : { orderBy?: RewardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RewardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRewardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reward model
   */
  readonly fields: RewardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reward.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RewardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    claims<T extends Reward$claimsArgs<ExtArgs> = {}>(args?: Subset<T, Reward$claimsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardClaimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reward model
   */
  interface RewardFieldRefs {
    readonly id: FieldRef<"Reward", 'String'>
    readonly name: FieldRef<"Reward", 'String'>
    readonly description: FieldRef<"Reward", 'String'>
    readonly costXp: FieldRef<"Reward", 'Int'>
    readonly imageUrl: FieldRef<"Reward", 'String'>
    readonly isActive: FieldRef<"Reward", 'Boolean'>
    readonly createdAt: FieldRef<"Reward", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reward findUnique
   */
  export type RewardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward findUniqueOrThrow
   */
  export type RewardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward findFirst
   */
  export type RewardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rewards.
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rewards.
     */
    distinct?: RewardScalarFieldEnum | RewardScalarFieldEnum[]
  }

  /**
   * Reward findFirstOrThrow
   */
  export type RewardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rewards.
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rewards.
     */
    distinct?: RewardScalarFieldEnum | RewardScalarFieldEnum[]
  }

  /**
   * Reward findMany
   */
  export type RewardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Rewards to fetch.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rewards.
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    distinct?: RewardScalarFieldEnum | RewardScalarFieldEnum[]
  }

  /**
   * Reward create
   */
  export type RewardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * The data needed to create a Reward.
     */
    data: XOR<RewardCreateInput, RewardUncheckedCreateInput>
  }

  /**
   * Reward createMany
   */
  export type RewardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rewards.
     */
    data: RewardCreateManyInput | RewardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reward createManyAndReturn
   */
  export type RewardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * The data used to create many Rewards.
     */
    data: RewardCreateManyInput | RewardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reward update
   */
  export type RewardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * The data needed to update a Reward.
     */
    data: XOR<RewardUpdateInput, RewardUncheckedUpdateInput>
    /**
     * Choose, which Reward to update.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward updateMany
   */
  export type RewardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rewards.
     */
    data: XOR<RewardUpdateManyMutationInput, RewardUncheckedUpdateManyInput>
    /**
     * Filter which Rewards to update
     */
    where?: RewardWhereInput
    /**
     * Limit how many Rewards to update.
     */
    limit?: number
  }

  /**
   * Reward updateManyAndReturn
   */
  export type RewardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * The data used to update Rewards.
     */
    data: XOR<RewardUpdateManyMutationInput, RewardUncheckedUpdateManyInput>
    /**
     * Filter which Rewards to update
     */
    where?: RewardWhereInput
    /**
     * Limit how many Rewards to update.
     */
    limit?: number
  }

  /**
   * Reward upsert
   */
  export type RewardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * The filter to search for the Reward to update in case it exists.
     */
    where: RewardWhereUniqueInput
    /**
     * In case the Reward found by the `where` argument doesn't exist, create a new Reward with this data.
     */
    create: XOR<RewardCreateInput, RewardUncheckedCreateInput>
    /**
     * In case the Reward was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RewardUpdateInput, RewardUncheckedUpdateInput>
  }

  /**
   * Reward delete
   */
  export type RewardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter which Reward to delete.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward deleteMany
   */
  export type RewardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rewards to delete
     */
    where?: RewardWhereInput
    /**
     * Limit how many Rewards to delete.
     */
    limit?: number
  }

  /**
   * Reward.claims
   */
  export type Reward$claimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardClaim
     */
    select?: RewardClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardClaim
     */
    omit?: RewardClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardClaimInclude<ExtArgs> | null
    where?: RewardClaimWhereInput
    orderBy?: RewardClaimOrderByWithRelationInput | RewardClaimOrderByWithRelationInput[]
    cursor?: RewardClaimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RewardClaimScalarFieldEnum | RewardClaimScalarFieldEnum[]
  }

  /**
   * Reward without action
   */
  export type RewardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
  }


  /**
   * Model RewardClaim
   */

  export type AggregateRewardClaim = {
    _count: RewardClaimCountAggregateOutputType | null
    _min: RewardClaimMinAggregateOutputType | null
    _max: RewardClaimMaxAggregateOutputType | null
  }

  export type RewardClaimMinAggregateOutputType = {
    id: string | null
    userId: string | null
    rewardId: string | null
    claimedAt: Date | null
  }

  export type RewardClaimMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    rewardId: string | null
    claimedAt: Date | null
  }

  export type RewardClaimCountAggregateOutputType = {
    id: number
    userId: number
    rewardId: number
    claimedAt: number
    _all: number
  }


  export type RewardClaimMinAggregateInputType = {
    id?: true
    userId?: true
    rewardId?: true
    claimedAt?: true
  }

  export type RewardClaimMaxAggregateInputType = {
    id?: true
    userId?: true
    rewardId?: true
    claimedAt?: true
  }

  export type RewardClaimCountAggregateInputType = {
    id?: true
    userId?: true
    rewardId?: true
    claimedAt?: true
    _all?: true
  }

  export type RewardClaimAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RewardClaim to aggregate.
     */
    where?: RewardClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardClaims to fetch.
     */
    orderBy?: RewardClaimOrderByWithRelationInput | RewardClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RewardClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardClaims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardClaims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RewardClaims
    **/
    _count?: true | RewardClaimCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RewardClaimMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RewardClaimMaxAggregateInputType
  }

  export type GetRewardClaimAggregateType<T extends RewardClaimAggregateArgs> = {
        [P in keyof T & keyof AggregateRewardClaim]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRewardClaim[P]>
      : GetScalarType<T[P], AggregateRewardClaim[P]>
  }




  export type RewardClaimGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardClaimWhereInput
    orderBy?: RewardClaimOrderByWithAggregationInput | RewardClaimOrderByWithAggregationInput[]
    by: RewardClaimScalarFieldEnum[] | RewardClaimScalarFieldEnum
    having?: RewardClaimScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RewardClaimCountAggregateInputType | true
    _min?: RewardClaimMinAggregateInputType
    _max?: RewardClaimMaxAggregateInputType
  }

  export type RewardClaimGroupByOutputType = {
    id: string
    userId: string
    rewardId: string
    claimedAt: Date
    _count: RewardClaimCountAggregateOutputType | null
    _min: RewardClaimMinAggregateOutputType | null
    _max: RewardClaimMaxAggregateOutputType | null
  }

  type GetRewardClaimGroupByPayload<T extends RewardClaimGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RewardClaimGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RewardClaimGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RewardClaimGroupByOutputType[P]>
            : GetScalarType<T[P], RewardClaimGroupByOutputType[P]>
        }
      >
    >


  export type RewardClaimSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    rewardId?: boolean
    claimedAt?: boolean
    reward?: boolean | RewardDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rewardClaim"]>

  export type RewardClaimSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    rewardId?: boolean
    claimedAt?: boolean
    reward?: boolean | RewardDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rewardClaim"]>

  export type RewardClaimSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    rewardId?: boolean
    claimedAt?: boolean
    reward?: boolean | RewardDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rewardClaim"]>

  export type RewardClaimSelectScalar = {
    id?: boolean
    userId?: boolean
    rewardId?: boolean
    claimedAt?: boolean
  }

  export type RewardClaimOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "rewardId" | "claimedAt", ExtArgs["result"]["rewardClaim"]>
  export type RewardClaimInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reward?: boolean | RewardDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RewardClaimIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reward?: boolean | RewardDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RewardClaimIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reward?: boolean | RewardDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RewardClaimPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RewardClaim"
    objects: {
      reward: Prisma.$RewardPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      rewardId: string
      claimedAt: Date
    }, ExtArgs["result"]["rewardClaim"]>
    composites: {}
  }

  type RewardClaimGetPayload<S extends boolean | null | undefined | RewardClaimDefaultArgs> = $Result.GetResult<Prisma.$RewardClaimPayload, S>

  type RewardClaimCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RewardClaimFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RewardClaimCountAggregateInputType | true
    }

  export interface RewardClaimDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RewardClaim'], meta: { name: 'RewardClaim' } }
    /**
     * Find zero or one RewardClaim that matches the filter.
     * @param {RewardClaimFindUniqueArgs} args - Arguments to find a RewardClaim
     * @example
     * // Get one RewardClaim
     * const rewardClaim = await prisma.rewardClaim.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RewardClaimFindUniqueArgs>(args: SelectSubset<T, RewardClaimFindUniqueArgs<ExtArgs>>): Prisma__RewardClaimClient<$Result.GetResult<Prisma.$RewardClaimPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RewardClaim that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RewardClaimFindUniqueOrThrowArgs} args - Arguments to find a RewardClaim
     * @example
     * // Get one RewardClaim
     * const rewardClaim = await prisma.rewardClaim.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RewardClaimFindUniqueOrThrowArgs>(args: SelectSubset<T, RewardClaimFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RewardClaimClient<$Result.GetResult<Prisma.$RewardClaimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RewardClaim that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardClaimFindFirstArgs} args - Arguments to find a RewardClaim
     * @example
     * // Get one RewardClaim
     * const rewardClaim = await prisma.rewardClaim.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RewardClaimFindFirstArgs>(args?: SelectSubset<T, RewardClaimFindFirstArgs<ExtArgs>>): Prisma__RewardClaimClient<$Result.GetResult<Prisma.$RewardClaimPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RewardClaim that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardClaimFindFirstOrThrowArgs} args - Arguments to find a RewardClaim
     * @example
     * // Get one RewardClaim
     * const rewardClaim = await prisma.rewardClaim.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RewardClaimFindFirstOrThrowArgs>(args?: SelectSubset<T, RewardClaimFindFirstOrThrowArgs<ExtArgs>>): Prisma__RewardClaimClient<$Result.GetResult<Prisma.$RewardClaimPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RewardClaims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardClaimFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RewardClaims
     * const rewardClaims = await prisma.rewardClaim.findMany()
     * 
     * // Get first 10 RewardClaims
     * const rewardClaims = await prisma.rewardClaim.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rewardClaimWithIdOnly = await prisma.rewardClaim.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RewardClaimFindManyArgs>(args?: SelectSubset<T, RewardClaimFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardClaimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RewardClaim.
     * @param {RewardClaimCreateArgs} args - Arguments to create a RewardClaim.
     * @example
     * // Create one RewardClaim
     * const RewardClaim = await prisma.rewardClaim.create({
     *   data: {
     *     // ... data to create a RewardClaim
     *   }
     * })
     * 
     */
    create<T extends RewardClaimCreateArgs>(args: SelectSubset<T, RewardClaimCreateArgs<ExtArgs>>): Prisma__RewardClaimClient<$Result.GetResult<Prisma.$RewardClaimPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RewardClaims.
     * @param {RewardClaimCreateManyArgs} args - Arguments to create many RewardClaims.
     * @example
     * // Create many RewardClaims
     * const rewardClaim = await prisma.rewardClaim.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RewardClaimCreateManyArgs>(args?: SelectSubset<T, RewardClaimCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RewardClaims and returns the data saved in the database.
     * @param {RewardClaimCreateManyAndReturnArgs} args - Arguments to create many RewardClaims.
     * @example
     * // Create many RewardClaims
     * const rewardClaim = await prisma.rewardClaim.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RewardClaims and only return the `id`
     * const rewardClaimWithIdOnly = await prisma.rewardClaim.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RewardClaimCreateManyAndReturnArgs>(args?: SelectSubset<T, RewardClaimCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardClaimPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RewardClaim.
     * @param {RewardClaimDeleteArgs} args - Arguments to delete one RewardClaim.
     * @example
     * // Delete one RewardClaim
     * const RewardClaim = await prisma.rewardClaim.delete({
     *   where: {
     *     // ... filter to delete one RewardClaim
     *   }
     * })
     * 
     */
    delete<T extends RewardClaimDeleteArgs>(args: SelectSubset<T, RewardClaimDeleteArgs<ExtArgs>>): Prisma__RewardClaimClient<$Result.GetResult<Prisma.$RewardClaimPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RewardClaim.
     * @param {RewardClaimUpdateArgs} args - Arguments to update one RewardClaim.
     * @example
     * // Update one RewardClaim
     * const rewardClaim = await prisma.rewardClaim.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RewardClaimUpdateArgs>(args: SelectSubset<T, RewardClaimUpdateArgs<ExtArgs>>): Prisma__RewardClaimClient<$Result.GetResult<Prisma.$RewardClaimPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RewardClaims.
     * @param {RewardClaimDeleteManyArgs} args - Arguments to filter RewardClaims to delete.
     * @example
     * // Delete a few RewardClaims
     * const { count } = await prisma.rewardClaim.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RewardClaimDeleteManyArgs>(args?: SelectSubset<T, RewardClaimDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RewardClaims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardClaimUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RewardClaims
     * const rewardClaim = await prisma.rewardClaim.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RewardClaimUpdateManyArgs>(args: SelectSubset<T, RewardClaimUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RewardClaims and returns the data updated in the database.
     * @param {RewardClaimUpdateManyAndReturnArgs} args - Arguments to update many RewardClaims.
     * @example
     * // Update many RewardClaims
     * const rewardClaim = await prisma.rewardClaim.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RewardClaims and only return the `id`
     * const rewardClaimWithIdOnly = await prisma.rewardClaim.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RewardClaimUpdateManyAndReturnArgs>(args: SelectSubset<T, RewardClaimUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardClaimPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RewardClaim.
     * @param {RewardClaimUpsertArgs} args - Arguments to update or create a RewardClaim.
     * @example
     * // Update or create a RewardClaim
     * const rewardClaim = await prisma.rewardClaim.upsert({
     *   create: {
     *     // ... data to create a RewardClaim
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RewardClaim we want to update
     *   }
     * })
     */
    upsert<T extends RewardClaimUpsertArgs>(args: SelectSubset<T, RewardClaimUpsertArgs<ExtArgs>>): Prisma__RewardClaimClient<$Result.GetResult<Prisma.$RewardClaimPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RewardClaims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardClaimCountArgs} args - Arguments to filter RewardClaims to count.
     * @example
     * // Count the number of RewardClaims
     * const count = await prisma.rewardClaim.count({
     *   where: {
     *     // ... the filter for the RewardClaims we want to count
     *   }
     * })
    **/
    count<T extends RewardClaimCountArgs>(
      args?: Subset<T, RewardClaimCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RewardClaimCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RewardClaim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardClaimAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RewardClaimAggregateArgs>(args: Subset<T, RewardClaimAggregateArgs>): Prisma.PrismaPromise<GetRewardClaimAggregateType<T>>

    /**
     * Group by RewardClaim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardClaimGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RewardClaimGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RewardClaimGroupByArgs['orderBy'] }
        : { orderBy?: RewardClaimGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RewardClaimGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRewardClaimGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RewardClaim model
   */
  readonly fields: RewardClaimFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RewardClaim.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RewardClaimClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reward<T extends RewardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RewardDefaultArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RewardClaim model
   */
  interface RewardClaimFieldRefs {
    readonly id: FieldRef<"RewardClaim", 'String'>
    readonly userId: FieldRef<"RewardClaim", 'String'>
    readonly rewardId: FieldRef<"RewardClaim", 'String'>
    readonly claimedAt: FieldRef<"RewardClaim", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RewardClaim findUnique
   */
  export type RewardClaimFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardClaim
     */
    select?: RewardClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardClaim
     */
    omit?: RewardClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardClaimInclude<ExtArgs> | null
    /**
     * Filter, which RewardClaim to fetch.
     */
    where: RewardClaimWhereUniqueInput
  }

  /**
   * RewardClaim findUniqueOrThrow
   */
  export type RewardClaimFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardClaim
     */
    select?: RewardClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardClaim
     */
    omit?: RewardClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardClaimInclude<ExtArgs> | null
    /**
     * Filter, which RewardClaim to fetch.
     */
    where: RewardClaimWhereUniqueInput
  }

  /**
   * RewardClaim findFirst
   */
  export type RewardClaimFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardClaim
     */
    select?: RewardClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardClaim
     */
    omit?: RewardClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardClaimInclude<ExtArgs> | null
    /**
     * Filter, which RewardClaim to fetch.
     */
    where?: RewardClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardClaims to fetch.
     */
    orderBy?: RewardClaimOrderByWithRelationInput | RewardClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RewardClaims.
     */
    cursor?: RewardClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardClaims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardClaims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RewardClaims.
     */
    distinct?: RewardClaimScalarFieldEnum | RewardClaimScalarFieldEnum[]
  }

  /**
   * RewardClaim findFirstOrThrow
   */
  export type RewardClaimFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardClaim
     */
    select?: RewardClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardClaim
     */
    omit?: RewardClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardClaimInclude<ExtArgs> | null
    /**
     * Filter, which RewardClaim to fetch.
     */
    where?: RewardClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardClaims to fetch.
     */
    orderBy?: RewardClaimOrderByWithRelationInput | RewardClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RewardClaims.
     */
    cursor?: RewardClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardClaims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardClaims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RewardClaims.
     */
    distinct?: RewardClaimScalarFieldEnum | RewardClaimScalarFieldEnum[]
  }

  /**
   * RewardClaim findMany
   */
  export type RewardClaimFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardClaim
     */
    select?: RewardClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardClaim
     */
    omit?: RewardClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardClaimInclude<ExtArgs> | null
    /**
     * Filter, which RewardClaims to fetch.
     */
    where?: RewardClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardClaims to fetch.
     */
    orderBy?: RewardClaimOrderByWithRelationInput | RewardClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RewardClaims.
     */
    cursor?: RewardClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardClaims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardClaims.
     */
    skip?: number
    distinct?: RewardClaimScalarFieldEnum | RewardClaimScalarFieldEnum[]
  }

  /**
   * RewardClaim create
   */
  export type RewardClaimCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardClaim
     */
    select?: RewardClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardClaim
     */
    omit?: RewardClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardClaimInclude<ExtArgs> | null
    /**
     * The data needed to create a RewardClaim.
     */
    data: XOR<RewardClaimCreateInput, RewardClaimUncheckedCreateInput>
  }

  /**
   * RewardClaim createMany
   */
  export type RewardClaimCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RewardClaims.
     */
    data: RewardClaimCreateManyInput | RewardClaimCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RewardClaim createManyAndReturn
   */
  export type RewardClaimCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardClaim
     */
    select?: RewardClaimSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RewardClaim
     */
    omit?: RewardClaimOmit<ExtArgs> | null
    /**
     * The data used to create many RewardClaims.
     */
    data: RewardClaimCreateManyInput | RewardClaimCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardClaimIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RewardClaim update
   */
  export type RewardClaimUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardClaim
     */
    select?: RewardClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardClaim
     */
    omit?: RewardClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardClaimInclude<ExtArgs> | null
    /**
     * The data needed to update a RewardClaim.
     */
    data: XOR<RewardClaimUpdateInput, RewardClaimUncheckedUpdateInput>
    /**
     * Choose, which RewardClaim to update.
     */
    where: RewardClaimWhereUniqueInput
  }

  /**
   * RewardClaim updateMany
   */
  export type RewardClaimUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RewardClaims.
     */
    data: XOR<RewardClaimUpdateManyMutationInput, RewardClaimUncheckedUpdateManyInput>
    /**
     * Filter which RewardClaims to update
     */
    where?: RewardClaimWhereInput
    /**
     * Limit how many RewardClaims to update.
     */
    limit?: number
  }

  /**
   * RewardClaim updateManyAndReturn
   */
  export type RewardClaimUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardClaim
     */
    select?: RewardClaimSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RewardClaim
     */
    omit?: RewardClaimOmit<ExtArgs> | null
    /**
     * The data used to update RewardClaims.
     */
    data: XOR<RewardClaimUpdateManyMutationInput, RewardClaimUncheckedUpdateManyInput>
    /**
     * Filter which RewardClaims to update
     */
    where?: RewardClaimWhereInput
    /**
     * Limit how many RewardClaims to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardClaimIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RewardClaim upsert
   */
  export type RewardClaimUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardClaim
     */
    select?: RewardClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardClaim
     */
    omit?: RewardClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardClaimInclude<ExtArgs> | null
    /**
     * The filter to search for the RewardClaim to update in case it exists.
     */
    where: RewardClaimWhereUniqueInput
    /**
     * In case the RewardClaim found by the `where` argument doesn't exist, create a new RewardClaim with this data.
     */
    create: XOR<RewardClaimCreateInput, RewardClaimUncheckedCreateInput>
    /**
     * In case the RewardClaim was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RewardClaimUpdateInput, RewardClaimUncheckedUpdateInput>
  }

  /**
   * RewardClaim delete
   */
  export type RewardClaimDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardClaim
     */
    select?: RewardClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardClaim
     */
    omit?: RewardClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardClaimInclude<ExtArgs> | null
    /**
     * Filter which RewardClaim to delete.
     */
    where: RewardClaimWhereUniqueInput
  }

  /**
   * RewardClaim deleteMany
   */
  export type RewardClaimDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RewardClaims to delete
     */
    where?: RewardClaimWhereInput
    /**
     * Limit how many RewardClaims to delete.
     */
    limit?: number
  }

  /**
   * RewardClaim without action
   */
  export type RewardClaimDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardClaim
     */
    select?: RewardClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardClaim
     */
    omit?: RewardClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardClaimInclude<ExtArgs> | null
  }


  /**
   * Model Recommendation
   */

  export type AggregateRecommendation = {
    _count: RecommendationCountAggregateOutputType | null
    _min: RecommendationMinAggregateOutputType | null
    _max: RecommendationMaxAggregateOutputType | null
  }

  export type RecommendationMinAggregateOutputType = {
    id: string | null
    content: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecommendationMaxAggregateOutputType = {
    id: string | null
    content: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecommendationCountAggregateOutputType = {
    id: number
    content: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RecommendationMinAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecommendationMaxAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecommendationCountAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RecommendationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recommendation to aggregate.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recommendations
    **/
    _count?: true | RecommendationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecommendationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecommendationMaxAggregateInputType
  }

  export type GetRecommendationAggregateType<T extends RecommendationAggregateArgs> = {
        [P in keyof T & keyof AggregateRecommendation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecommendation[P]>
      : GetScalarType<T[P], AggregateRecommendation[P]>
  }




  export type RecommendationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationWhereInput
    orderBy?: RecommendationOrderByWithAggregationInput | RecommendationOrderByWithAggregationInput[]
    by: RecommendationScalarFieldEnum[] | RecommendationScalarFieldEnum
    having?: RecommendationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecommendationCountAggregateInputType | true
    _min?: RecommendationMinAggregateInputType
    _max?: RecommendationMaxAggregateInputType
  }

  export type RecommendationGroupByOutputType = {
    id: string
    content: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: RecommendationCountAggregateOutputType | null
    _min: RecommendationMinAggregateOutputType | null
    _max: RecommendationMaxAggregateOutputType | null
  }

  type GetRecommendationGroupByPayload<T extends RecommendationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecommendationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecommendationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecommendationGroupByOutputType[P]>
            : GetScalarType<T[P], RecommendationGroupByOutputType[P]>
        }
      >
    >


  export type RecommendationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendation"]>

  export type RecommendationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendation"]>

  export type RecommendationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendation"]>

  export type RecommendationSelectScalar = {
    id?: boolean
    content?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RecommendationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["recommendation"]>
  export type RecommendationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecommendationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecommendationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RecommendationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recommendation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["recommendation"]>
    composites: {}
  }

  type RecommendationGetPayload<S extends boolean | null | undefined | RecommendationDefaultArgs> = $Result.GetResult<Prisma.$RecommendationPayload, S>

  type RecommendationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecommendationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecommendationCountAggregateInputType | true
    }

  export interface RecommendationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recommendation'], meta: { name: 'Recommendation' } }
    /**
     * Find zero or one Recommendation that matches the filter.
     * @param {RecommendationFindUniqueArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecommendationFindUniqueArgs>(args: SelectSubset<T, RecommendationFindUniqueArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recommendation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecommendationFindUniqueOrThrowArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecommendationFindUniqueOrThrowArgs>(args: SelectSubset<T, RecommendationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recommendation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindFirstArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecommendationFindFirstArgs>(args?: SelectSubset<T, RecommendationFindFirstArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recommendation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindFirstOrThrowArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecommendationFindFirstOrThrowArgs>(args?: SelectSubset<T, RecommendationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recommendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recommendations
     * const recommendations = await prisma.recommendation.findMany()
     * 
     * // Get first 10 Recommendations
     * const recommendations = await prisma.recommendation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recommendationWithIdOnly = await prisma.recommendation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecommendationFindManyArgs>(args?: SelectSubset<T, RecommendationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recommendation.
     * @param {RecommendationCreateArgs} args - Arguments to create a Recommendation.
     * @example
     * // Create one Recommendation
     * const Recommendation = await prisma.recommendation.create({
     *   data: {
     *     // ... data to create a Recommendation
     *   }
     * })
     * 
     */
    create<T extends RecommendationCreateArgs>(args: SelectSubset<T, RecommendationCreateArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recommendations.
     * @param {RecommendationCreateManyArgs} args - Arguments to create many Recommendations.
     * @example
     * // Create many Recommendations
     * const recommendation = await prisma.recommendation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecommendationCreateManyArgs>(args?: SelectSubset<T, RecommendationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recommendations and returns the data saved in the database.
     * @param {RecommendationCreateManyAndReturnArgs} args - Arguments to create many Recommendations.
     * @example
     * // Create many Recommendations
     * const recommendation = await prisma.recommendation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recommendations and only return the `id`
     * const recommendationWithIdOnly = await prisma.recommendation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecommendationCreateManyAndReturnArgs>(args?: SelectSubset<T, RecommendationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recommendation.
     * @param {RecommendationDeleteArgs} args - Arguments to delete one Recommendation.
     * @example
     * // Delete one Recommendation
     * const Recommendation = await prisma.recommendation.delete({
     *   where: {
     *     // ... filter to delete one Recommendation
     *   }
     * })
     * 
     */
    delete<T extends RecommendationDeleteArgs>(args: SelectSubset<T, RecommendationDeleteArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recommendation.
     * @param {RecommendationUpdateArgs} args - Arguments to update one Recommendation.
     * @example
     * // Update one Recommendation
     * const recommendation = await prisma.recommendation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecommendationUpdateArgs>(args: SelectSubset<T, RecommendationUpdateArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recommendations.
     * @param {RecommendationDeleteManyArgs} args - Arguments to filter Recommendations to delete.
     * @example
     * // Delete a few Recommendations
     * const { count } = await prisma.recommendation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecommendationDeleteManyArgs>(args?: SelectSubset<T, RecommendationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recommendations
     * const recommendation = await prisma.recommendation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecommendationUpdateManyArgs>(args: SelectSubset<T, RecommendationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recommendations and returns the data updated in the database.
     * @param {RecommendationUpdateManyAndReturnArgs} args - Arguments to update many Recommendations.
     * @example
     * // Update many Recommendations
     * const recommendation = await prisma.recommendation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recommendations and only return the `id`
     * const recommendationWithIdOnly = await prisma.recommendation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecommendationUpdateManyAndReturnArgs>(args: SelectSubset<T, RecommendationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recommendation.
     * @param {RecommendationUpsertArgs} args - Arguments to update or create a Recommendation.
     * @example
     * // Update or create a Recommendation
     * const recommendation = await prisma.recommendation.upsert({
     *   create: {
     *     // ... data to create a Recommendation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recommendation we want to update
     *   }
     * })
     */
    upsert<T extends RecommendationUpsertArgs>(args: SelectSubset<T, RecommendationUpsertArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationCountArgs} args - Arguments to filter Recommendations to count.
     * @example
     * // Count the number of Recommendations
     * const count = await prisma.recommendation.count({
     *   where: {
     *     // ... the filter for the Recommendations we want to count
     *   }
     * })
    **/
    count<T extends RecommendationCountArgs>(
      args?: Subset<T, RecommendationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecommendationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecommendationAggregateArgs>(args: Subset<T, RecommendationAggregateArgs>): Prisma.PrismaPromise<GetRecommendationAggregateType<T>>

    /**
     * Group by Recommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecommendationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecommendationGroupByArgs['orderBy'] }
        : { orderBy?: RecommendationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecommendationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecommendationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recommendation model
   */
  readonly fields: RecommendationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recommendation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecommendationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Recommendation model
   */
  interface RecommendationFieldRefs {
    readonly id: FieldRef<"Recommendation", 'String'>
    readonly content: FieldRef<"Recommendation", 'String'>
    readonly userId: FieldRef<"Recommendation", 'String'>
    readonly createdAt: FieldRef<"Recommendation", 'DateTime'>
    readonly updatedAt: FieldRef<"Recommendation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Recommendation findUnique
   */
  export type RecommendationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation findUniqueOrThrow
   */
  export type RecommendationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation findFirst
   */
  export type RecommendationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recommendations.
     */
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Recommendation findFirstOrThrow
   */
  export type RecommendationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recommendations.
     */
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Recommendation findMany
   */
  export type RecommendationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendations to fetch.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Recommendation create
   */
  export type RecommendationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * The data needed to create a Recommendation.
     */
    data: XOR<RecommendationCreateInput, RecommendationUncheckedCreateInput>
  }

  /**
   * Recommendation createMany
   */
  export type RecommendationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recommendations.
     */
    data: RecommendationCreateManyInput | RecommendationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recommendation createManyAndReturn
   */
  export type RecommendationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * The data used to create many Recommendations.
     */
    data: RecommendationCreateManyInput | RecommendationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recommendation update
   */
  export type RecommendationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * The data needed to update a Recommendation.
     */
    data: XOR<RecommendationUpdateInput, RecommendationUncheckedUpdateInput>
    /**
     * Choose, which Recommendation to update.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation updateMany
   */
  export type RecommendationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recommendations.
     */
    data: XOR<RecommendationUpdateManyMutationInput, RecommendationUncheckedUpdateManyInput>
    /**
     * Filter which Recommendations to update
     */
    where?: RecommendationWhereInput
    /**
     * Limit how many Recommendations to update.
     */
    limit?: number
  }

  /**
   * Recommendation updateManyAndReturn
   */
  export type RecommendationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * The data used to update Recommendations.
     */
    data: XOR<RecommendationUpdateManyMutationInput, RecommendationUncheckedUpdateManyInput>
    /**
     * Filter which Recommendations to update
     */
    where?: RecommendationWhereInput
    /**
     * Limit how many Recommendations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recommendation upsert
   */
  export type RecommendationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * The filter to search for the Recommendation to update in case it exists.
     */
    where: RecommendationWhereUniqueInput
    /**
     * In case the Recommendation found by the `where` argument doesn't exist, create a new Recommendation with this data.
     */
    create: XOR<RecommendationCreateInput, RecommendationUncheckedCreateInput>
    /**
     * In case the Recommendation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecommendationUpdateInput, RecommendationUncheckedUpdateInput>
  }

  /**
   * Recommendation delete
   */
  export type RecommendationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter which Recommendation to delete.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation deleteMany
   */
  export type RecommendationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recommendations to delete
     */
    where?: RecommendationWhereInput
    /**
     * Limit how many Recommendations to delete.
     */
    limit?: number
  }

  /**
   * Recommendation without action
   */
  export type RecommendationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    avatarUrl: 'avatarUrl',
    xp: 'xp',
    level: 'level',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    authProvider: 'authProvider',
    firstName: 'firstName',
    lastName: 'lastName'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChallengeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    rewardXp: 'rewardXp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    instructions: 'instructions',
    requiredCompletions: 'requiredCompletions',
    type: 'type',
    completionCount: 'completionCount',
    userId: 'userId',
    metadata: 'metadata'
  };

  export type ChallengeScalarFieldEnum = (typeof ChallengeScalarFieldEnum)[keyof typeof ChallengeScalarFieldEnum]


  export const BadgeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    xpRequired: 'xpRequired',
    createdAt: 'createdAt',
    imagePath: 'imagePath',
    isActive: 'isActive'
  };

  export type BadgeScalarFieldEnum = (typeof BadgeScalarFieldEnum)[keyof typeof BadgeScalarFieldEnum]


  export const ChallengeCompletionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    challengeId: 'challengeId',
    status: 'status',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    currentCompletions: 'currentCompletions'
  };

  export type ChallengeCompletionScalarFieldEnum = (typeof ChallengeCompletionScalarFieldEnum)[keyof typeof ChallengeCompletionScalarFieldEnum]


  export const BadgeEarnedScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    badgeId: 'badgeId',
    earnedAt: 'earnedAt'
  };

  export type BadgeEarnedScalarFieldEnum = (typeof BadgeEarnedScalarFieldEnum)[keyof typeof BadgeEarnedScalarFieldEnum]


  export const RewardScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    costXp: 'costXp',
    imageUrl: 'imageUrl',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type RewardScalarFieldEnum = (typeof RewardScalarFieldEnum)[keyof typeof RewardScalarFieldEnum]


  export const RewardClaimScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    rewardId: 'rewardId',
    claimedAt: 'claimedAt'
  };

  export type RewardClaimScalarFieldEnum = (typeof RewardClaimScalarFieldEnum)[keyof typeof RewardClaimScalarFieldEnum]


  export const RecommendationScalarFieldEnum: {
    id: 'id',
    content: 'content',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RecommendationScalarFieldEnum = (typeof RecommendationScalarFieldEnum)[keyof typeof RecommendationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AuthProvider'
   */
  export type EnumAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthProvider'>
    


  /**
   * Reference to a field of type 'AuthProvider[]'
   */
  export type ListEnumAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthProvider[]'>
    


  /**
   * Reference to a field of type 'ChallengeType'
   */
  export type EnumChallengeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChallengeType'>
    


  /**
   * Reference to a field of type 'ChallengeType[]'
   */
  export type ListEnumChallengeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChallengeType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ProgressStatus'
   */
  export type EnumProgressStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProgressStatus'>
    


  /**
   * Reference to a field of type 'ProgressStatus[]'
   */
  export type ListEnumProgressStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProgressStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    xp?: IntFilter<"User"> | number
    level?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    authProvider?: EnumAuthProviderFilter<"User"> | $Enums.AuthProvider
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    badgesEarned?: BadgeEarnedListRelationFilter
    challengeCompletions?: ChallengeCompletionListRelationFilter
    rewardClaims?: RewardClaimListRelationFilter
    challenges?: ChallengeListRelationFilter
    recommendations?: RecommendationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    xp?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authProvider?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    badgesEarned?: BadgeEarnedOrderByRelationAggregateInput
    challengeCompletions?: ChallengeCompletionOrderByRelationAggregateInput
    rewardClaims?: RewardClaimOrderByRelationAggregateInput
    challenges?: ChallengeOrderByRelationAggregateInput
    recommendations?: RecommendationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    avatarUrl?: StringNullableFilter<"User"> | string | null
    xp?: IntFilter<"User"> | number
    level?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    authProvider?: EnumAuthProviderFilter<"User"> | $Enums.AuthProvider
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    badgesEarned?: BadgeEarnedListRelationFilter
    challengeCompletions?: ChallengeCompletionListRelationFilter
    rewardClaims?: RewardClaimListRelationFilter
    challenges?: ChallengeListRelationFilter
    recommendations?: RecommendationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    xp?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authProvider?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    xp?: IntWithAggregatesFilter<"User"> | number
    level?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    authProvider?: EnumAuthProviderWithAggregatesFilter<"User"> | $Enums.AuthProvider
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
  }

  export type ChallengeWhereInput = {
    AND?: ChallengeWhereInput | ChallengeWhereInput[]
    OR?: ChallengeWhereInput[]
    NOT?: ChallengeWhereInput | ChallengeWhereInput[]
    id?: StringFilter<"Challenge"> | string
    title?: StringFilter<"Challenge"> | string
    rewardXp?: IntFilter<"Challenge"> | number
    createdAt?: DateTimeFilter<"Challenge"> | Date | string
    updatedAt?: DateTimeFilter<"Challenge"> | Date | string
    instructions?: StringFilter<"Challenge"> | string
    requiredCompletions?: IntFilter<"Challenge"> | number
    type?: EnumChallengeTypeFilter<"Challenge"> | $Enums.ChallengeType
    completionCount?: IntFilter<"Challenge"> | number
    userId?: StringFilter<"Challenge"> | string
    metadata?: JsonNullableFilter<"Challenge">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChallengeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    rewardXp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    instructions?: SortOrder
    requiredCompletions?: SortOrder
    type?: SortOrder
    completionCount?: SortOrder
    userId?: SortOrder
    metadata?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ChallengeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChallengeWhereInput | ChallengeWhereInput[]
    OR?: ChallengeWhereInput[]
    NOT?: ChallengeWhereInput | ChallengeWhereInput[]
    title?: StringFilter<"Challenge"> | string
    rewardXp?: IntFilter<"Challenge"> | number
    createdAt?: DateTimeFilter<"Challenge"> | Date | string
    updatedAt?: DateTimeFilter<"Challenge"> | Date | string
    instructions?: StringFilter<"Challenge"> | string
    requiredCompletions?: IntFilter<"Challenge"> | number
    type?: EnumChallengeTypeFilter<"Challenge"> | $Enums.ChallengeType
    completionCount?: IntFilter<"Challenge"> | number
    userId?: StringFilter<"Challenge"> | string
    metadata?: JsonNullableFilter<"Challenge">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ChallengeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    rewardXp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    instructions?: SortOrder
    requiredCompletions?: SortOrder
    type?: SortOrder
    completionCount?: SortOrder
    userId?: SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: ChallengeCountOrderByAggregateInput
    _avg?: ChallengeAvgOrderByAggregateInput
    _max?: ChallengeMaxOrderByAggregateInput
    _min?: ChallengeMinOrderByAggregateInput
    _sum?: ChallengeSumOrderByAggregateInput
  }

  export type ChallengeScalarWhereWithAggregatesInput = {
    AND?: ChallengeScalarWhereWithAggregatesInput | ChallengeScalarWhereWithAggregatesInput[]
    OR?: ChallengeScalarWhereWithAggregatesInput[]
    NOT?: ChallengeScalarWhereWithAggregatesInput | ChallengeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Challenge"> | string
    title?: StringWithAggregatesFilter<"Challenge"> | string
    rewardXp?: IntWithAggregatesFilter<"Challenge"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Challenge"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Challenge"> | Date | string
    instructions?: StringWithAggregatesFilter<"Challenge"> | string
    requiredCompletions?: IntWithAggregatesFilter<"Challenge"> | number
    type?: EnumChallengeTypeWithAggregatesFilter<"Challenge"> | $Enums.ChallengeType
    completionCount?: IntWithAggregatesFilter<"Challenge"> | number
    userId?: StringWithAggregatesFilter<"Challenge"> | string
    metadata?: JsonNullableWithAggregatesFilter<"Challenge">
  }

  export type BadgeWhereInput = {
    AND?: BadgeWhereInput | BadgeWhereInput[]
    OR?: BadgeWhereInput[]
    NOT?: BadgeWhereInput | BadgeWhereInput[]
    id?: StringFilter<"Badge"> | string
    name?: StringFilter<"Badge"> | string
    description?: StringFilter<"Badge"> | string
    xpRequired?: IntFilter<"Badge"> | number
    createdAt?: DateTimeFilter<"Badge"> | Date | string
    imagePath?: StringFilter<"Badge"> | string
    isActive?: BoolFilter<"Badge"> | boolean
    badgesEarned?: BadgeEarnedListRelationFilter
  }

  export type BadgeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    xpRequired?: SortOrder
    createdAt?: SortOrder
    imagePath?: SortOrder
    isActive?: SortOrder
    badgesEarned?: BadgeEarnedOrderByRelationAggregateInput
  }

  export type BadgeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BadgeWhereInput | BadgeWhereInput[]
    OR?: BadgeWhereInput[]
    NOT?: BadgeWhereInput | BadgeWhereInput[]
    name?: StringFilter<"Badge"> | string
    description?: StringFilter<"Badge"> | string
    xpRequired?: IntFilter<"Badge"> | number
    createdAt?: DateTimeFilter<"Badge"> | Date | string
    imagePath?: StringFilter<"Badge"> | string
    isActive?: BoolFilter<"Badge"> | boolean
    badgesEarned?: BadgeEarnedListRelationFilter
  }, "id">

  export type BadgeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    xpRequired?: SortOrder
    createdAt?: SortOrder
    imagePath?: SortOrder
    isActive?: SortOrder
    _count?: BadgeCountOrderByAggregateInput
    _avg?: BadgeAvgOrderByAggregateInput
    _max?: BadgeMaxOrderByAggregateInput
    _min?: BadgeMinOrderByAggregateInput
    _sum?: BadgeSumOrderByAggregateInput
  }

  export type BadgeScalarWhereWithAggregatesInput = {
    AND?: BadgeScalarWhereWithAggregatesInput | BadgeScalarWhereWithAggregatesInput[]
    OR?: BadgeScalarWhereWithAggregatesInput[]
    NOT?: BadgeScalarWhereWithAggregatesInput | BadgeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Badge"> | string
    name?: StringWithAggregatesFilter<"Badge"> | string
    description?: StringWithAggregatesFilter<"Badge"> | string
    xpRequired?: IntWithAggregatesFilter<"Badge"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Badge"> | Date | string
    imagePath?: StringWithAggregatesFilter<"Badge"> | string
    isActive?: BoolWithAggregatesFilter<"Badge"> | boolean
  }

  export type ChallengeCompletionWhereInput = {
    AND?: ChallengeCompletionWhereInput | ChallengeCompletionWhereInput[]
    OR?: ChallengeCompletionWhereInput[]
    NOT?: ChallengeCompletionWhereInput | ChallengeCompletionWhereInput[]
    id?: StringFilter<"ChallengeCompletion"> | string
    userId?: StringFilter<"ChallengeCompletion"> | string
    challengeId?: StringFilter<"ChallengeCompletion"> | string
    status?: EnumProgressStatusFilter<"ChallengeCompletion"> | $Enums.ProgressStatus
    completedAt?: DateTimeNullableFilter<"ChallengeCompletion"> | Date | string | null
    createdAt?: DateTimeFilter<"ChallengeCompletion"> | Date | string
    currentCompletions?: IntFilter<"ChallengeCompletion"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChallengeCompletionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    status?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    currentCompletions?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ChallengeCompletionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChallengeCompletionWhereInput | ChallengeCompletionWhereInput[]
    OR?: ChallengeCompletionWhereInput[]
    NOT?: ChallengeCompletionWhereInput | ChallengeCompletionWhereInput[]
    userId?: StringFilter<"ChallengeCompletion"> | string
    challengeId?: StringFilter<"ChallengeCompletion"> | string
    status?: EnumProgressStatusFilter<"ChallengeCompletion"> | $Enums.ProgressStatus
    completedAt?: DateTimeNullableFilter<"ChallengeCompletion"> | Date | string | null
    createdAt?: DateTimeFilter<"ChallengeCompletion"> | Date | string
    currentCompletions?: IntFilter<"ChallengeCompletion"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ChallengeCompletionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    status?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    currentCompletions?: SortOrder
    _count?: ChallengeCompletionCountOrderByAggregateInput
    _avg?: ChallengeCompletionAvgOrderByAggregateInput
    _max?: ChallengeCompletionMaxOrderByAggregateInput
    _min?: ChallengeCompletionMinOrderByAggregateInput
    _sum?: ChallengeCompletionSumOrderByAggregateInput
  }

  export type ChallengeCompletionScalarWhereWithAggregatesInput = {
    AND?: ChallengeCompletionScalarWhereWithAggregatesInput | ChallengeCompletionScalarWhereWithAggregatesInput[]
    OR?: ChallengeCompletionScalarWhereWithAggregatesInput[]
    NOT?: ChallengeCompletionScalarWhereWithAggregatesInput | ChallengeCompletionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChallengeCompletion"> | string
    userId?: StringWithAggregatesFilter<"ChallengeCompletion"> | string
    challengeId?: StringWithAggregatesFilter<"ChallengeCompletion"> | string
    status?: EnumProgressStatusWithAggregatesFilter<"ChallengeCompletion"> | $Enums.ProgressStatus
    completedAt?: DateTimeNullableWithAggregatesFilter<"ChallengeCompletion"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ChallengeCompletion"> | Date | string
    currentCompletions?: IntWithAggregatesFilter<"ChallengeCompletion"> | number
  }

  export type BadgeEarnedWhereInput = {
    AND?: BadgeEarnedWhereInput | BadgeEarnedWhereInput[]
    OR?: BadgeEarnedWhereInput[]
    NOT?: BadgeEarnedWhereInput | BadgeEarnedWhereInput[]
    id?: StringFilter<"BadgeEarned"> | string
    userId?: StringFilter<"BadgeEarned"> | string
    badgeId?: StringFilter<"BadgeEarned"> | string
    earnedAt?: DateTimeFilter<"BadgeEarned"> | Date | string
    badge?: XOR<BadgeScalarRelationFilter, BadgeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BadgeEarnedOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    earnedAt?: SortOrder
    badge?: BadgeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type BadgeEarnedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BadgeEarnedWhereInput | BadgeEarnedWhereInput[]
    OR?: BadgeEarnedWhereInput[]
    NOT?: BadgeEarnedWhereInput | BadgeEarnedWhereInput[]
    userId?: StringFilter<"BadgeEarned"> | string
    badgeId?: StringFilter<"BadgeEarned"> | string
    earnedAt?: DateTimeFilter<"BadgeEarned"> | Date | string
    badge?: XOR<BadgeScalarRelationFilter, BadgeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BadgeEarnedOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    earnedAt?: SortOrder
    _count?: BadgeEarnedCountOrderByAggregateInput
    _max?: BadgeEarnedMaxOrderByAggregateInput
    _min?: BadgeEarnedMinOrderByAggregateInput
  }

  export type BadgeEarnedScalarWhereWithAggregatesInput = {
    AND?: BadgeEarnedScalarWhereWithAggregatesInput | BadgeEarnedScalarWhereWithAggregatesInput[]
    OR?: BadgeEarnedScalarWhereWithAggregatesInput[]
    NOT?: BadgeEarnedScalarWhereWithAggregatesInput | BadgeEarnedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BadgeEarned"> | string
    userId?: StringWithAggregatesFilter<"BadgeEarned"> | string
    badgeId?: StringWithAggregatesFilter<"BadgeEarned"> | string
    earnedAt?: DateTimeWithAggregatesFilter<"BadgeEarned"> | Date | string
  }

  export type RewardWhereInput = {
    AND?: RewardWhereInput | RewardWhereInput[]
    OR?: RewardWhereInput[]
    NOT?: RewardWhereInput | RewardWhereInput[]
    id?: StringFilter<"Reward"> | string
    name?: StringFilter<"Reward"> | string
    description?: StringFilter<"Reward"> | string
    costXp?: IntFilter<"Reward"> | number
    imageUrl?: StringFilter<"Reward"> | string
    isActive?: BoolFilter<"Reward"> | boolean
    createdAt?: DateTimeFilter<"Reward"> | Date | string
    claims?: RewardClaimListRelationFilter
  }

  export type RewardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    costXp?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    claims?: RewardClaimOrderByRelationAggregateInput
  }

  export type RewardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RewardWhereInput | RewardWhereInput[]
    OR?: RewardWhereInput[]
    NOT?: RewardWhereInput | RewardWhereInput[]
    name?: StringFilter<"Reward"> | string
    description?: StringFilter<"Reward"> | string
    costXp?: IntFilter<"Reward"> | number
    imageUrl?: StringFilter<"Reward"> | string
    isActive?: BoolFilter<"Reward"> | boolean
    createdAt?: DateTimeFilter<"Reward"> | Date | string
    claims?: RewardClaimListRelationFilter
  }, "id">

  export type RewardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    costXp?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: RewardCountOrderByAggregateInput
    _avg?: RewardAvgOrderByAggregateInput
    _max?: RewardMaxOrderByAggregateInput
    _min?: RewardMinOrderByAggregateInput
    _sum?: RewardSumOrderByAggregateInput
  }

  export type RewardScalarWhereWithAggregatesInput = {
    AND?: RewardScalarWhereWithAggregatesInput | RewardScalarWhereWithAggregatesInput[]
    OR?: RewardScalarWhereWithAggregatesInput[]
    NOT?: RewardScalarWhereWithAggregatesInput | RewardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reward"> | string
    name?: StringWithAggregatesFilter<"Reward"> | string
    description?: StringWithAggregatesFilter<"Reward"> | string
    costXp?: IntWithAggregatesFilter<"Reward"> | number
    imageUrl?: StringWithAggregatesFilter<"Reward"> | string
    isActive?: BoolWithAggregatesFilter<"Reward"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Reward"> | Date | string
  }

  export type RewardClaimWhereInput = {
    AND?: RewardClaimWhereInput | RewardClaimWhereInput[]
    OR?: RewardClaimWhereInput[]
    NOT?: RewardClaimWhereInput | RewardClaimWhereInput[]
    id?: StringFilter<"RewardClaim"> | string
    userId?: StringFilter<"RewardClaim"> | string
    rewardId?: StringFilter<"RewardClaim"> | string
    claimedAt?: DateTimeFilter<"RewardClaim"> | Date | string
    reward?: XOR<RewardScalarRelationFilter, RewardWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RewardClaimOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    rewardId?: SortOrder
    claimedAt?: SortOrder
    reward?: RewardOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RewardClaimWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RewardClaimWhereInput | RewardClaimWhereInput[]
    OR?: RewardClaimWhereInput[]
    NOT?: RewardClaimWhereInput | RewardClaimWhereInput[]
    userId?: StringFilter<"RewardClaim"> | string
    rewardId?: StringFilter<"RewardClaim"> | string
    claimedAt?: DateTimeFilter<"RewardClaim"> | Date | string
    reward?: XOR<RewardScalarRelationFilter, RewardWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RewardClaimOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    rewardId?: SortOrder
    claimedAt?: SortOrder
    _count?: RewardClaimCountOrderByAggregateInput
    _max?: RewardClaimMaxOrderByAggregateInput
    _min?: RewardClaimMinOrderByAggregateInput
  }

  export type RewardClaimScalarWhereWithAggregatesInput = {
    AND?: RewardClaimScalarWhereWithAggregatesInput | RewardClaimScalarWhereWithAggregatesInput[]
    OR?: RewardClaimScalarWhereWithAggregatesInput[]
    NOT?: RewardClaimScalarWhereWithAggregatesInput | RewardClaimScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RewardClaim"> | string
    userId?: StringWithAggregatesFilter<"RewardClaim"> | string
    rewardId?: StringWithAggregatesFilter<"RewardClaim"> | string
    claimedAt?: DateTimeWithAggregatesFilter<"RewardClaim"> | Date | string
  }

  export type RecommendationWhereInput = {
    AND?: RecommendationWhereInput | RecommendationWhereInput[]
    OR?: RecommendationWhereInput[]
    NOT?: RecommendationWhereInput | RecommendationWhereInput[]
    id?: StringFilter<"Recommendation"> | string
    content?: StringFilter<"Recommendation"> | string
    userId?: StringFilter<"Recommendation"> | string
    createdAt?: DateTimeFilter<"Recommendation"> | Date | string
    updatedAt?: DateTimeFilter<"Recommendation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RecommendationOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RecommendationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecommendationWhereInput | RecommendationWhereInput[]
    OR?: RecommendationWhereInput[]
    NOT?: RecommendationWhereInput | RecommendationWhereInput[]
    content?: StringFilter<"Recommendation"> | string
    userId?: StringFilter<"Recommendation"> | string
    createdAt?: DateTimeFilter<"Recommendation"> | Date | string
    updatedAt?: DateTimeFilter<"Recommendation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RecommendationOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RecommendationCountOrderByAggregateInput
    _max?: RecommendationMaxOrderByAggregateInput
    _min?: RecommendationMinOrderByAggregateInput
  }

  export type RecommendationScalarWhereWithAggregatesInput = {
    AND?: RecommendationScalarWhereWithAggregatesInput | RecommendationScalarWhereWithAggregatesInput[]
    OR?: RecommendationScalarWhereWithAggregatesInput[]
    NOT?: RecommendationScalarWhereWithAggregatesInput | RecommendationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Recommendation"> | string
    content?: StringWithAggregatesFilter<"Recommendation"> | string
    userId?: StringWithAggregatesFilter<"Recommendation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Recommendation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Recommendation"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    avatarUrl?: string | null
    xp?: number
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authProvider?: $Enums.AuthProvider
    firstName: string
    lastName: string
    badgesEarned?: BadgeEarnedCreateNestedManyWithoutUserInput
    challengeCompletions?: ChallengeCompletionCreateNestedManyWithoutUserInput
    rewardClaims?: RewardClaimCreateNestedManyWithoutUserInput
    challenges?: ChallengeCreateNestedManyWithoutUserInput
    recommendations?: RecommendationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    avatarUrl?: string | null
    xp?: number
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authProvider?: $Enums.AuthProvider
    firstName: string
    lastName: string
    badgesEarned?: BadgeEarnedUncheckedCreateNestedManyWithoutUserInput
    challengeCompletions?: ChallengeCompletionUncheckedCreateNestedManyWithoutUserInput
    rewardClaims?: RewardClaimUncheckedCreateNestedManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    badgesEarned?: BadgeEarnedUpdateManyWithoutUserNestedInput
    challengeCompletions?: ChallengeCompletionUpdateManyWithoutUserNestedInput
    rewardClaims?: RewardClaimUpdateManyWithoutUserNestedInput
    challenges?: ChallengeUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    badgesEarned?: BadgeEarnedUncheckedUpdateManyWithoutUserNestedInput
    challengeCompletions?: ChallengeCompletionUncheckedUpdateManyWithoutUserNestedInput
    rewardClaims?: RewardClaimUncheckedUpdateManyWithoutUserNestedInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    avatarUrl?: string | null
    xp?: number
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authProvider?: $Enums.AuthProvider
    firstName: string
    lastName: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type ChallengeCreateInput = {
    id?: string
    title: string
    rewardXp?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    instructions: string
    requiredCompletions?: number
    type: $Enums.ChallengeType
    completionCount?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutChallengesInput
  }

  export type ChallengeUncheckedCreateInput = {
    id?: string
    title: string
    rewardXp?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    instructions: string
    requiredCompletions?: number
    type: $Enums.ChallengeType
    completionCount?: number
    userId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ChallengeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rewardXp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructions?: StringFieldUpdateOperationsInput | string
    requiredCompletions?: IntFieldUpdateOperationsInput | number
    type?: EnumChallengeTypeFieldUpdateOperationsInput | $Enums.ChallengeType
    completionCount?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutChallengesNestedInput
  }

  export type ChallengeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rewardXp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructions?: StringFieldUpdateOperationsInput | string
    requiredCompletions?: IntFieldUpdateOperationsInput | number
    type?: EnumChallengeTypeFieldUpdateOperationsInput | $Enums.ChallengeType
    completionCount?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ChallengeCreateManyInput = {
    id?: string
    title: string
    rewardXp?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    instructions: string
    requiredCompletions?: number
    type: $Enums.ChallengeType
    completionCount?: number
    userId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ChallengeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rewardXp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructions?: StringFieldUpdateOperationsInput | string
    requiredCompletions?: IntFieldUpdateOperationsInput | number
    type?: EnumChallengeTypeFieldUpdateOperationsInput | $Enums.ChallengeType
    completionCount?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ChallengeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rewardXp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructions?: StringFieldUpdateOperationsInput | string
    requiredCompletions?: IntFieldUpdateOperationsInput | number
    type?: EnumChallengeTypeFieldUpdateOperationsInput | $Enums.ChallengeType
    completionCount?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BadgeCreateInput = {
    id?: string
    name: string
    description: string
    xpRequired: number
    createdAt?: Date | string
    imagePath?: string
    isActive?: boolean
    badgesEarned?: BadgeEarnedCreateNestedManyWithoutBadgeInput
  }

  export type BadgeUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    xpRequired: number
    createdAt?: Date | string
    imagePath?: string
    isActive?: boolean
    badgesEarned?: BadgeEarnedUncheckedCreateNestedManyWithoutBadgeInput
  }

  export type BadgeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xpRequired?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    badgesEarned?: BadgeEarnedUpdateManyWithoutBadgeNestedInput
  }

  export type BadgeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xpRequired?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    badgesEarned?: BadgeEarnedUncheckedUpdateManyWithoutBadgeNestedInput
  }

  export type BadgeCreateManyInput = {
    id?: string
    name: string
    description: string
    xpRequired: number
    createdAt?: Date | string
    imagePath?: string
    isActive?: boolean
  }

  export type BadgeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xpRequired?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BadgeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xpRequired?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChallengeCompletionCreateInput = {
    id?: string
    challengeId: string
    status?: $Enums.ProgressStatus
    completedAt?: Date | string | null
    createdAt?: Date | string
    currentCompletions?: number
    user: UserCreateNestedOneWithoutChallengeCompletionsInput
  }

  export type ChallengeCompletionUncheckedCreateInput = {
    id?: string
    userId: string
    challengeId: string
    status?: $Enums.ProgressStatus
    completedAt?: Date | string | null
    createdAt?: Date | string
    currentCompletions?: number
  }

  export type ChallengeCompletionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentCompletions?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutChallengeCompletionsNestedInput
  }

  export type ChallengeCompletionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentCompletions?: IntFieldUpdateOperationsInput | number
  }

  export type ChallengeCompletionCreateManyInput = {
    id?: string
    userId: string
    challengeId: string
    status?: $Enums.ProgressStatus
    completedAt?: Date | string | null
    createdAt?: Date | string
    currentCompletions?: number
  }

  export type ChallengeCompletionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentCompletions?: IntFieldUpdateOperationsInput | number
  }

  export type ChallengeCompletionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentCompletions?: IntFieldUpdateOperationsInput | number
  }

  export type BadgeEarnedCreateInput = {
    id?: string
    earnedAt?: Date | string
    badge: BadgeCreateNestedOneWithoutBadgesEarnedInput
    user: UserCreateNestedOneWithoutBadgesEarnedInput
  }

  export type BadgeEarnedUncheckedCreateInput = {
    id?: string
    userId: string
    badgeId: string
    earnedAt?: Date | string
  }

  export type BadgeEarnedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badge?: BadgeUpdateOneRequiredWithoutBadgesEarnedNestedInput
    user?: UserUpdateOneRequiredWithoutBadgesEarnedNestedInput
  }

  export type BadgeEarnedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    badgeId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeEarnedCreateManyInput = {
    id?: string
    userId: string
    badgeId: string
    earnedAt?: Date | string
  }

  export type BadgeEarnedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeEarnedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    badgeId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardCreateInput = {
    id?: string
    name: string
    description: string
    costXp: number
    imageUrl: string
    isActive?: boolean
    createdAt?: Date | string
    claims?: RewardClaimCreateNestedManyWithoutRewardInput
  }

  export type RewardUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    costXp: number
    imageUrl: string
    isActive?: boolean
    createdAt?: Date | string
    claims?: RewardClaimUncheckedCreateNestedManyWithoutRewardInput
  }

  export type RewardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    costXp?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: RewardClaimUpdateManyWithoutRewardNestedInput
  }

  export type RewardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    costXp?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: RewardClaimUncheckedUpdateManyWithoutRewardNestedInput
  }

  export type RewardCreateManyInput = {
    id?: string
    name: string
    description: string
    costXp: number
    imageUrl: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type RewardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    costXp?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    costXp?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardClaimCreateInput = {
    id?: string
    claimedAt?: Date | string
    reward: RewardCreateNestedOneWithoutClaimsInput
    user: UserCreateNestedOneWithoutRewardClaimsInput
  }

  export type RewardClaimUncheckedCreateInput = {
    id?: string
    userId: string
    rewardId: string
    claimedAt?: Date | string
  }

  export type RewardClaimUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reward?: RewardUpdateOneRequiredWithoutClaimsNestedInput
    user?: UserUpdateOneRequiredWithoutRewardClaimsNestedInput
  }

  export type RewardClaimUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rewardId?: StringFieldUpdateOperationsInput | string
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardClaimCreateManyInput = {
    id?: string
    userId: string
    rewardId: string
    claimedAt?: Date | string
  }

  export type RewardClaimUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardClaimUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rewardId?: StringFieldUpdateOperationsInput | string
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRecommendationsInput
  }

  export type RecommendationUncheckedCreateInput = {
    id?: string
    content: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecommendationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecommendationsNestedInput
  }

  export type RecommendationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationCreateManyInput = {
    id?: string
    content: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecommendationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider
  }

  export type BadgeEarnedListRelationFilter = {
    every?: BadgeEarnedWhereInput
    some?: BadgeEarnedWhereInput
    none?: BadgeEarnedWhereInput
  }

  export type ChallengeCompletionListRelationFilter = {
    every?: ChallengeCompletionWhereInput
    some?: ChallengeCompletionWhereInput
    none?: ChallengeCompletionWhereInput
  }

  export type RewardClaimListRelationFilter = {
    every?: RewardClaimWhereInput
    some?: RewardClaimWhereInput
    none?: RewardClaimWhereInput
  }

  export type ChallengeListRelationFilter = {
    every?: ChallengeWhereInput
    some?: ChallengeWhereInput
    none?: ChallengeWhereInput
  }

  export type RecommendationListRelationFilter = {
    every?: RecommendationWhereInput
    some?: RecommendationWhereInput
    none?: RecommendationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BadgeEarnedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChallengeCompletionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RewardClaimOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChallengeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecommendationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    avatarUrl?: SortOrder
    xp?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authProvider?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    xp?: SortOrder
    level?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    avatarUrl?: SortOrder
    xp?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authProvider?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    avatarUrl?: SortOrder
    xp?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authProvider?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    xp?: SortOrder
    level?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthProviderFilter<$PrismaModel>
    _max?: NestedEnumAuthProviderFilter<$PrismaModel>
  }

  export type EnumChallengeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ChallengeType | EnumChallengeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChallengeType[] | ListEnumChallengeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChallengeType[] | ListEnumChallengeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChallengeTypeFilter<$PrismaModel> | $Enums.ChallengeType
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChallengeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    rewardXp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    instructions?: SortOrder
    requiredCompletions?: SortOrder
    type?: SortOrder
    completionCount?: SortOrder
    userId?: SortOrder
    metadata?: SortOrder
  }

  export type ChallengeAvgOrderByAggregateInput = {
    rewardXp?: SortOrder
    requiredCompletions?: SortOrder
    completionCount?: SortOrder
  }

  export type ChallengeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    rewardXp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    instructions?: SortOrder
    requiredCompletions?: SortOrder
    type?: SortOrder
    completionCount?: SortOrder
    userId?: SortOrder
  }

  export type ChallengeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    rewardXp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    instructions?: SortOrder
    requiredCompletions?: SortOrder
    type?: SortOrder
    completionCount?: SortOrder
    userId?: SortOrder
  }

  export type ChallengeSumOrderByAggregateInput = {
    rewardXp?: SortOrder
    requiredCompletions?: SortOrder
    completionCount?: SortOrder
  }

  export type EnumChallengeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChallengeType | EnumChallengeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChallengeType[] | ListEnumChallengeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChallengeType[] | ListEnumChallengeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChallengeTypeWithAggregatesFilter<$PrismaModel> | $Enums.ChallengeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChallengeTypeFilter<$PrismaModel>
    _max?: NestedEnumChallengeTypeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BadgeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    xpRequired?: SortOrder
    createdAt?: SortOrder
    imagePath?: SortOrder
    isActive?: SortOrder
  }

  export type BadgeAvgOrderByAggregateInput = {
    xpRequired?: SortOrder
  }

  export type BadgeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    xpRequired?: SortOrder
    createdAt?: SortOrder
    imagePath?: SortOrder
    isActive?: SortOrder
  }

  export type BadgeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    xpRequired?: SortOrder
    createdAt?: SortOrder
    imagePath?: SortOrder
    isActive?: SortOrder
  }

  export type BadgeSumOrderByAggregateInput = {
    xpRequired?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumProgressStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgressStatus | EnumProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProgressStatusFilter<$PrismaModel> | $Enums.ProgressStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ChallengeCompletionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    status?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    currentCompletions?: SortOrder
  }

  export type ChallengeCompletionAvgOrderByAggregateInput = {
    currentCompletions?: SortOrder
  }

  export type ChallengeCompletionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    status?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    currentCompletions?: SortOrder
  }

  export type ChallengeCompletionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    status?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    currentCompletions?: SortOrder
  }

  export type ChallengeCompletionSumOrderByAggregateInput = {
    currentCompletions?: SortOrder
  }

  export type EnumProgressStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgressStatus | EnumProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProgressStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProgressStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProgressStatusFilter<$PrismaModel>
    _max?: NestedEnumProgressStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BadgeScalarRelationFilter = {
    is?: BadgeWhereInput
    isNot?: BadgeWhereInput
  }

  export type BadgeEarnedCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    earnedAt?: SortOrder
  }

  export type BadgeEarnedMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    earnedAt?: SortOrder
  }

  export type BadgeEarnedMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    earnedAt?: SortOrder
  }

  export type RewardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    costXp?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type RewardAvgOrderByAggregateInput = {
    costXp?: SortOrder
  }

  export type RewardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    costXp?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type RewardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    costXp?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type RewardSumOrderByAggregateInput = {
    costXp?: SortOrder
  }

  export type RewardScalarRelationFilter = {
    is?: RewardWhereInput
    isNot?: RewardWhereInput
  }

  export type RewardClaimCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rewardId?: SortOrder
    claimedAt?: SortOrder
  }

  export type RewardClaimMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rewardId?: SortOrder
    claimedAt?: SortOrder
  }

  export type RewardClaimMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rewardId?: SortOrder
    claimedAt?: SortOrder
  }

  export type RecommendationCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecommendationMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecommendationMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BadgeEarnedCreateNestedManyWithoutUserInput = {
    create?: XOR<BadgeEarnedCreateWithoutUserInput, BadgeEarnedUncheckedCreateWithoutUserInput> | BadgeEarnedCreateWithoutUserInput[] | BadgeEarnedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BadgeEarnedCreateOrConnectWithoutUserInput | BadgeEarnedCreateOrConnectWithoutUserInput[]
    createMany?: BadgeEarnedCreateManyUserInputEnvelope
    connect?: BadgeEarnedWhereUniqueInput | BadgeEarnedWhereUniqueInput[]
  }

  export type ChallengeCompletionCreateNestedManyWithoutUserInput = {
    create?: XOR<ChallengeCompletionCreateWithoutUserInput, ChallengeCompletionUncheckedCreateWithoutUserInput> | ChallengeCompletionCreateWithoutUserInput[] | ChallengeCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChallengeCompletionCreateOrConnectWithoutUserInput | ChallengeCompletionCreateOrConnectWithoutUserInput[]
    createMany?: ChallengeCompletionCreateManyUserInputEnvelope
    connect?: ChallengeCompletionWhereUniqueInput | ChallengeCompletionWhereUniqueInput[]
  }

  export type RewardClaimCreateNestedManyWithoutUserInput = {
    create?: XOR<RewardClaimCreateWithoutUserInput, RewardClaimUncheckedCreateWithoutUserInput> | RewardClaimCreateWithoutUserInput[] | RewardClaimUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RewardClaimCreateOrConnectWithoutUserInput | RewardClaimCreateOrConnectWithoutUserInput[]
    createMany?: RewardClaimCreateManyUserInputEnvelope
    connect?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
  }

  export type ChallengeCreateNestedManyWithoutUserInput = {
    create?: XOR<ChallengeCreateWithoutUserInput, ChallengeUncheckedCreateWithoutUserInput> | ChallengeCreateWithoutUserInput[] | ChallengeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutUserInput | ChallengeCreateOrConnectWithoutUserInput[]
    createMany?: ChallengeCreateManyUserInputEnvelope
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
  }

  export type RecommendationCreateNestedManyWithoutUserInput = {
    create?: XOR<RecommendationCreateWithoutUserInput, RecommendationUncheckedCreateWithoutUserInput> | RecommendationCreateWithoutUserInput[] | RecommendationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutUserInput | RecommendationCreateOrConnectWithoutUserInput[]
    createMany?: RecommendationCreateManyUserInputEnvelope
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
  }

  export type BadgeEarnedUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BadgeEarnedCreateWithoutUserInput, BadgeEarnedUncheckedCreateWithoutUserInput> | BadgeEarnedCreateWithoutUserInput[] | BadgeEarnedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BadgeEarnedCreateOrConnectWithoutUserInput | BadgeEarnedCreateOrConnectWithoutUserInput[]
    createMany?: BadgeEarnedCreateManyUserInputEnvelope
    connect?: BadgeEarnedWhereUniqueInput | BadgeEarnedWhereUniqueInput[]
  }

  export type ChallengeCompletionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChallengeCompletionCreateWithoutUserInput, ChallengeCompletionUncheckedCreateWithoutUserInput> | ChallengeCompletionCreateWithoutUserInput[] | ChallengeCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChallengeCompletionCreateOrConnectWithoutUserInput | ChallengeCompletionCreateOrConnectWithoutUserInput[]
    createMany?: ChallengeCompletionCreateManyUserInputEnvelope
    connect?: ChallengeCompletionWhereUniqueInput | ChallengeCompletionWhereUniqueInput[]
  }

  export type RewardClaimUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RewardClaimCreateWithoutUserInput, RewardClaimUncheckedCreateWithoutUserInput> | RewardClaimCreateWithoutUserInput[] | RewardClaimUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RewardClaimCreateOrConnectWithoutUserInput | RewardClaimCreateOrConnectWithoutUserInput[]
    createMany?: RewardClaimCreateManyUserInputEnvelope
    connect?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
  }

  export type ChallengeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChallengeCreateWithoutUserInput, ChallengeUncheckedCreateWithoutUserInput> | ChallengeCreateWithoutUserInput[] | ChallengeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutUserInput | ChallengeCreateOrConnectWithoutUserInput[]
    createMany?: ChallengeCreateManyUserInputEnvelope
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
  }

  export type RecommendationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RecommendationCreateWithoutUserInput, RecommendationUncheckedCreateWithoutUserInput> | RecommendationCreateWithoutUserInput[] | RecommendationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutUserInput | RecommendationCreateOrConnectWithoutUserInput[]
    createMany?: RecommendationCreateManyUserInputEnvelope
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumAuthProviderFieldUpdateOperationsInput = {
    set?: $Enums.AuthProvider
  }

  export type BadgeEarnedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BadgeEarnedCreateWithoutUserInput, BadgeEarnedUncheckedCreateWithoutUserInput> | BadgeEarnedCreateWithoutUserInput[] | BadgeEarnedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BadgeEarnedCreateOrConnectWithoutUserInput | BadgeEarnedCreateOrConnectWithoutUserInput[]
    upsert?: BadgeEarnedUpsertWithWhereUniqueWithoutUserInput | BadgeEarnedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BadgeEarnedCreateManyUserInputEnvelope
    set?: BadgeEarnedWhereUniqueInput | BadgeEarnedWhereUniqueInput[]
    disconnect?: BadgeEarnedWhereUniqueInput | BadgeEarnedWhereUniqueInput[]
    delete?: BadgeEarnedWhereUniqueInput | BadgeEarnedWhereUniqueInput[]
    connect?: BadgeEarnedWhereUniqueInput | BadgeEarnedWhereUniqueInput[]
    update?: BadgeEarnedUpdateWithWhereUniqueWithoutUserInput | BadgeEarnedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BadgeEarnedUpdateManyWithWhereWithoutUserInput | BadgeEarnedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BadgeEarnedScalarWhereInput | BadgeEarnedScalarWhereInput[]
  }

  export type ChallengeCompletionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChallengeCompletionCreateWithoutUserInput, ChallengeCompletionUncheckedCreateWithoutUserInput> | ChallengeCompletionCreateWithoutUserInput[] | ChallengeCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChallengeCompletionCreateOrConnectWithoutUserInput | ChallengeCompletionCreateOrConnectWithoutUserInput[]
    upsert?: ChallengeCompletionUpsertWithWhereUniqueWithoutUserInput | ChallengeCompletionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChallengeCompletionCreateManyUserInputEnvelope
    set?: ChallengeCompletionWhereUniqueInput | ChallengeCompletionWhereUniqueInput[]
    disconnect?: ChallengeCompletionWhereUniqueInput | ChallengeCompletionWhereUniqueInput[]
    delete?: ChallengeCompletionWhereUniqueInput | ChallengeCompletionWhereUniqueInput[]
    connect?: ChallengeCompletionWhereUniqueInput | ChallengeCompletionWhereUniqueInput[]
    update?: ChallengeCompletionUpdateWithWhereUniqueWithoutUserInput | ChallengeCompletionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChallengeCompletionUpdateManyWithWhereWithoutUserInput | ChallengeCompletionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChallengeCompletionScalarWhereInput | ChallengeCompletionScalarWhereInput[]
  }

  export type RewardClaimUpdateManyWithoutUserNestedInput = {
    create?: XOR<RewardClaimCreateWithoutUserInput, RewardClaimUncheckedCreateWithoutUserInput> | RewardClaimCreateWithoutUserInput[] | RewardClaimUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RewardClaimCreateOrConnectWithoutUserInput | RewardClaimCreateOrConnectWithoutUserInput[]
    upsert?: RewardClaimUpsertWithWhereUniqueWithoutUserInput | RewardClaimUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RewardClaimCreateManyUserInputEnvelope
    set?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
    disconnect?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
    delete?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
    connect?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
    update?: RewardClaimUpdateWithWhereUniqueWithoutUserInput | RewardClaimUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RewardClaimUpdateManyWithWhereWithoutUserInput | RewardClaimUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RewardClaimScalarWhereInput | RewardClaimScalarWhereInput[]
  }

  export type ChallengeUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChallengeCreateWithoutUserInput, ChallengeUncheckedCreateWithoutUserInput> | ChallengeCreateWithoutUserInput[] | ChallengeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutUserInput | ChallengeCreateOrConnectWithoutUserInput[]
    upsert?: ChallengeUpsertWithWhereUniqueWithoutUserInput | ChallengeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChallengeCreateManyUserInputEnvelope
    set?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    disconnect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    delete?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    update?: ChallengeUpdateWithWhereUniqueWithoutUserInput | ChallengeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChallengeUpdateManyWithWhereWithoutUserInput | ChallengeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
  }

  export type RecommendationUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecommendationCreateWithoutUserInput, RecommendationUncheckedCreateWithoutUserInput> | RecommendationCreateWithoutUserInput[] | RecommendationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutUserInput | RecommendationCreateOrConnectWithoutUserInput[]
    upsert?: RecommendationUpsertWithWhereUniqueWithoutUserInput | RecommendationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecommendationCreateManyUserInputEnvelope
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    disconnect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    update?: RecommendationUpdateWithWhereUniqueWithoutUserInput | RecommendationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecommendationUpdateManyWithWhereWithoutUserInput | RecommendationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
  }

  export type BadgeEarnedUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BadgeEarnedCreateWithoutUserInput, BadgeEarnedUncheckedCreateWithoutUserInput> | BadgeEarnedCreateWithoutUserInput[] | BadgeEarnedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BadgeEarnedCreateOrConnectWithoutUserInput | BadgeEarnedCreateOrConnectWithoutUserInput[]
    upsert?: BadgeEarnedUpsertWithWhereUniqueWithoutUserInput | BadgeEarnedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BadgeEarnedCreateManyUserInputEnvelope
    set?: BadgeEarnedWhereUniqueInput | BadgeEarnedWhereUniqueInput[]
    disconnect?: BadgeEarnedWhereUniqueInput | BadgeEarnedWhereUniqueInput[]
    delete?: BadgeEarnedWhereUniqueInput | BadgeEarnedWhereUniqueInput[]
    connect?: BadgeEarnedWhereUniqueInput | BadgeEarnedWhereUniqueInput[]
    update?: BadgeEarnedUpdateWithWhereUniqueWithoutUserInput | BadgeEarnedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BadgeEarnedUpdateManyWithWhereWithoutUserInput | BadgeEarnedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BadgeEarnedScalarWhereInput | BadgeEarnedScalarWhereInput[]
  }

  export type ChallengeCompletionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChallengeCompletionCreateWithoutUserInput, ChallengeCompletionUncheckedCreateWithoutUserInput> | ChallengeCompletionCreateWithoutUserInput[] | ChallengeCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChallengeCompletionCreateOrConnectWithoutUserInput | ChallengeCompletionCreateOrConnectWithoutUserInput[]
    upsert?: ChallengeCompletionUpsertWithWhereUniqueWithoutUserInput | ChallengeCompletionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChallengeCompletionCreateManyUserInputEnvelope
    set?: ChallengeCompletionWhereUniqueInput | ChallengeCompletionWhereUniqueInput[]
    disconnect?: ChallengeCompletionWhereUniqueInput | ChallengeCompletionWhereUniqueInput[]
    delete?: ChallengeCompletionWhereUniqueInput | ChallengeCompletionWhereUniqueInput[]
    connect?: ChallengeCompletionWhereUniqueInput | ChallengeCompletionWhereUniqueInput[]
    update?: ChallengeCompletionUpdateWithWhereUniqueWithoutUserInput | ChallengeCompletionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChallengeCompletionUpdateManyWithWhereWithoutUserInput | ChallengeCompletionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChallengeCompletionScalarWhereInput | ChallengeCompletionScalarWhereInput[]
  }

  export type RewardClaimUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RewardClaimCreateWithoutUserInput, RewardClaimUncheckedCreateWithoutUserInput> | RewardClaimCreateWithoutUserInput[] | RewardClaimUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RewardClaimCreateOrConnectWithoutUserInput | RewardClaimCreateOrConnectWithoutUserInput[]
    upsert?: RewardClaimUpsertWithWhereUniqueWithoutUserInput | RewardClaimUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RewardClaimCreateManyUserInputEnvelope
    set?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
    disconnect?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
    delete?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
    connect?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
    update?: RewardClaimUpdateWithWhereUniqueWithoutUserInput | RewardClaimUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RewardClaimUpdateManyWithWhereWithoutUserInput | RewardClaimUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RewardClaimScalarWhereInput | RewardClaimScalarWhereInput[]
  }

  export type ChallengeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChallengeCreateWithoutUserInput, ChallengeUncheckedCreateWithoutUserInput> | ChallengeCreateWithoutUserInput[] | ChallengeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutUserInput | ChallengeCreateOrConnectWithoutUserInput[]
    upsert?: ChallengeUpsertWithWhereUniqueWithoutUserInput | ChallengeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChallengeCreateManyUserInputEnvelope
    set?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    disconnect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    delete?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    update?: ChallengeUpdateWithWhereUniqueWithoutUserInput | ChallengeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChallengeUpdateManyWithWhereWithoutUserInput | ChallengeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
  }

  export type RecommendationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecommendationCreateWithoutUserInput, RecommendationUncheckedCreateWithoutUserInput> | RecommendationCreateWithoutUserInput[] | RecommendationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutUserInput | RecommendationCreateOrConnectWithoutUserInput[]
    upsert?: RecommendationUpsertWithWhereUniqueWithoutUserInput | RecommendationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecommendationCreateManyUserInputEnvelope
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    disconnect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    update?: RecommendationUpdateWithWhereUniqueWithoutUserInput | RecommendationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecommendationUpdateManyWithWhereWithoutUserInput | RecommendationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutChallengesInput = {
    create?: XOR<UserCreateWithoutChallengesInput, UserUncheckedCreateWithoutChallengesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChallengesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumChallengeTypeFieldUpdateOperationsInput = {
    set?: $Enums.ChallengeType
  }

  export type UserUpdateOneRequiredWithoutChallengesNestedInput = {
    create?: XOR<UserCreateWithoutChallengesInput, UserUncheckedCreateWithoutChallengesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChallengesInput
    upsert?: UserUpsertWithoutChallengesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChallengesInput, UserUpdateWithoutChallengesInput>, UserUncheckedUpdateWithoutChallengesInput>
  }

  export type BadgeEarnedCreateNestedManyWithoutBadgeInput = {
    create?: XOR<BadgeEarnedCreateWithoutBadgeInput, BadgeEarnedUncheckedCreateWithoutBadgeInput> | BadgeEarnedCreateWithoutBadgeInput[] | BadgeEarnedUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: BadgeEarnedCreateOrConnectWithoutBadgeInput | BadgeEarnedCreateOrConnectWithoutBadgeInput[]
    createMany?: BadgeEarnedCreateManyBadgeInputEnvelope
    connect?: BadgeEarnedWhereUniqueInput | BadgeEarnedWhereUniqueInput[]
  }

  export type BadgeEarnedUncheckedCreateNestedManyWithoutBadgeInput = {
    create?: XOR<BadgeEarnedCreateWithoutBadgeInput, BadgeEarnedUncheckedCreateWithoutBadgeInput> | BadgeEarnedCreateWithoutBadgeInput[] | BadgeEarnedUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: BadgeEarnedCreateOrConnectWithoutBadgeInput | BadgeEarnedCreateOrConnectWithoutBadgeInput[]
    createMany?: BadgeEarnedCreateManyBadgeInputEnvelope
    connect?: BadgeEarnedWhereUniqueInput | BadgeEarnedWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BadgeEarnedUpdateManyWithoutBadgeNestedInput = {
    create?: XOR<BadgeEarnedCreateWithoutBadgeInput, BadgeEarnedUncheckedCreateWithoutBadgeInput> | BadgeEarnedCreateWithoutBadgeInput[] | BadgeEarnedUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: BadgeEarnedCreateOrConnectWithoutBadgeInput | BadgeEarnedCreateOrConnectWithoutBadgeInput[]
    upsert?: BadgeEarnedUpsertWithWhereUniqueWithoutBadgeInput | BadgeEarnedUpsertWithWhereUniqueWithoutBadgeInput[]
    createMany?: BadgeEarnedCreateManyBadgeInputEnvelope
    set?: BadgeEarnedWhereUniqueInput | BadgeEarnedWhereUniqueInput[]
    disconnect?: BadgeEarnedWhereUniqueInput | BadgeEarnedWhereUniqueInput[]
    delete?: BadgeEarnedWhereUniqueInput | BadgeEarnedWhereUniqueInput[]
    connect?: BadgeEarnedWhereUniqueInput | BadgeEarnedWhereUniqueInput[]
    update?: BadgeEarnedUpdateWithWhereUniqueWithoutBadgeInput | BadgeEarnedUpdateWithWhereUniqueWithoutBadgeInput[]
    updateMany?: BadgeEarnedUpdateManyWithWhereWithoutBadgeInput | BadgeEarnedUpdateManyWithWhereWithoutBadgeInput[]
    deleteMany?: BadgeEarnedScalarWhereInput | BadgeEarnedScalarWhereInput[]
  }

  export type BadgeEarnedUncheckedUpdateManyWithoutBadgeNestedInput = {
    create?: XOR<BadgeEarnedCreateWithoutBadgeInput, BadgeEarnedUncheckedCreateWithoutBadgeInput> | BadgeEarnedCreateWithoutBadgeInput[] | BadgeEarnedUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: BadgeEarnedCreateOrConnectWithoutBadgeInput | BadgeEarnedCreateOrConnectWithoutBadgeInput[]
    upsert?: BadgeEarnedUpsertWithWhereUniqueWithoutBadgeInput | BadgeEarnedUpsertWithWhereUniqueWithoutBadgeInput[]
    createMany?: BadgeEarnedCreateManyBadgeInputEnvelope
    set?: BadgeEarnedWhereUniqueInput | BadgeEarnedWhereUniqueInput[]
    disconnect?: BadgeEarnedWhereUniqueInput | BadgeEarnedWhereUniqueInput[]
    delete?: BadgeEarnedWhereUniqueInput | BadgeEarnedWhereUniqueInput[]
    connect?: BadgeEarnedWhereUniqueInput | BadgeEarnedWhereUniqueInput[]
    update?: BadgeEarnedUpdateWithWhereUniqueWithoutBadgeInput | BadgeEarnedUpdateWithWhereUniqueWithoutBadgeInput[]
    updateMany?: BadgeEarnedUpdateManyWithWhereWithoutBadgeInput | BadgeEarnedUpdateManyWithWhereWithoutBadgeInput[]
    deleteMany?: BadgeEarnedScalarWhereInput | BadgeEarnedScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutChallengeCompletionsInput = {
    create?: XOR<UserCreateWithoutChallengeCompletionsInput, UserUncheckedCreateWithoutChallengeCompletionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChallengeCompletionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumProgressStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProgressStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutChallengeCompletionsNestedInput = {
    create?: XOR<UserCreateWithoutChallengeCompletionsInput, UserUncheckedCreateWithoutChallengeCompletionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChallengeCompletionsInput
    upsert?: UserUpsertWithoutChallengeCompletionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChallengeCompletionsInput, UserUpdateWithoutChallengeCompletionsInput>, UserUncheckedUpdateWithoutChallengeCompletionsInput>
  }

  export type BadgeCreateNestedOneWithoutBadgesEarnedInput = {
    create?: XOR<BadgeCreateWithoutBadgesEarnedInput, BadgeUncheckedCreateWithoutBadgesEarnedInput>
    connectOrCreate?: BadgeCreateOrConnectWithoutBadgesEarnedInput
    connect?: BadgeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBadgesEarnedInput = {
    create?: XOR<UserCreateWithoutBadgesEarnedInput, UserUncheckedCreateWithoutBadgesEarnedInput>
    connectOrCreate?: UserCreateOrConnectWithoutBadgesEarnedInput
    connect?: UserWhereUniqueInput
  }

  export type BadgeUpdateOneRequiredWithoutBadgesEarnedNestedInput = {
    create?: XOR<BadgeCreateWithoutBadgesEarnedInput, BadgeUncheckedCreateWithoutBadgesEarnedInput>
    connectOrCreate?: BadgeCreateOrConnectWithoutBadgesEarnedInput
    upsert?: BadgeUpsertWithoutBadgesEarnedInput
    connect?: BadgeWhereUniqueInput
    update?: XOR<XOR<BadgeUpdateToOneWithWhereWithoutBadgesEarnedInput, BadgeUpdateWithoutBadgesEarnedInput>, BadgeUncheckedUpdateWithoutBadgesEarnedInput>
  }

  export type UserUpdateOneRequiredWithoutBadgesEarnedNestedInput = {
    create?: XOR<UserCreateWithoutBadgesEarnedInput, UserUncheckedCreateWithoutBadgesEarnedInput>
    connectOrCreate?: UserCreateOrConnectWithoutBadgesEarnedInput
    upsert?: UserUpsertWithoutBadgesEarnedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBadgesEarnedInput, UserUpdateWithoutBadgesEarnedInput>, UserUncheckedUpdateWithoutBadgesEarnedInput>
  }

  export type RewardClaimCreateNestedManyWithoutRewardInput = {
    create?: XOR<RewardClaimCreateWithoutRewardInput, RewardClaimUncheckedCreateWithoutRewardInput> | RewardClaimCreateWithoutRewardInput[] | RewardClaimUncheckedCreateWithoutRewardInput[]
    connectOrCreate?: RewardClaimCreateOrConnectWithoutRewardInput | RewardClaimCreateOrConnectWithoutRewardInput[]
    createMany?: RewardClaimCreateManyRewardInputEnvelope
    connect?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
  }

  export type RewardClaimUncheckedCreateNestedManyWithoutRewardInput = {
    create?: XOR<RewardClaimCreateWithoutRewardInput, RewardClaimUncheckedCreateWithoutRewardInput> | RewardClaimCreateWithoutRewardInput[] | RewardClaimUncheckedCreateWithoutRewardInput[]
    connectOrCreate?: RewardClaimCreateOrConnectWithoutRewardInput | RewardClaimCreateOrConnectWithoutRewardInput[]
    createMany?: RewardClaimCreateManyRewardInputEnvelope
    connect?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
  }

  export type RewardClaimUpdateManyWithoutRewardNestedInput = {
    create?: XOR<RewardClaimCreateWithoutRewardInput, RewardClaimUncheckedCreateWithoutRewardInput> | RewardClaimCreateWithoutRewardInput[] | RewardClaimUncheckedCreateWithoutRewardInput[]
    connectOrCreate?: RewardClaimCreateOrConnectWithoutRewardInput | RewardClaimCreateOrConnectWithoutRewardInput[]
    upsert?: RewardClaimUpsertWithWhereUniqueWithoutRewardInput | RewardClaimUpsertWithWhereUniqueWithoutRewardInput[]
    createMany?: RewardClaimCreateManyRewardInputEnvelope
    set?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
    disconnect?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
    delete?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
    connect?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
    update?: RewardClaimUpdateWithWhereUniqueWithoutRewardInput | RewardClaimUpdateWithWhereUniqueWithoutRewardInput[]
    updateMany?: RewardClaimUpdateManyWithWhereWithoutRewardInput | RewardClaimUpdateManyWithWhereWithoutRewardInput[]
    deleteMany?: RewardClaimScalarWhereInput | RewardClaimScalarWhereInput[]
  }

  export type RewardClaimUncheckedUpdateManyWithoutRewardNestedInput = {
    create?: XOR<RewardClaimCreateWithoutRewardInput, RewardClaimUncheckedCreateWithoutRewardInput> | RewardClaimCreateWithoutRewardInput[] | RewardClaimUncheckedCreateWithoutRewardInput[]
    connectOrCreate?: RewardClaimCreateOrConnectWithoutRewardInput | RewardClaimCreateOrConnectWithoutRewardInput[]
    upsert?: RewardClaimUpsertWithWhereUniqueWithoutRewardInput | RewardClaimUpsertWithWhereUniqueWithoutRewardInput[]
    createMany?: RewardClaimCreateManyRewardInputEnvelope
    set?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
    disconnect?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
    delete?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
    connect?: RewardClaimWhereUniqueInput | RewardClaimWhereUniqueInput[]
    update?: RewardClaimUpdateWithWhereUniqueWithoutRewardInput | RewardClaimUpdateWithWhereUniqueWithoutRewardInput[]
    updateMany?: RewardClaimUpdateManyWithWhereWithoutRewardInput | RewardClaimUpdateManyWithWhereWithoutRewardInput[]
    deleteMany?: RewardClaimScalarWhereInput | RewardClaimScalarWhereInput[]
  }

  export type RewardCreateNestedOneWithoutClaimsInput = {
    create?: XOR<RewardCreateWithoutClaimsInput, RewardUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: RewardCreateOrConnectWithoutClaimsInput
    connect?: RewardWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRewardClaimsInput = {
    create?: XOR<UserCreateWithoutRewardClaimsInput, UserUncheckedCreateWithoutRewardClaimsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRewardClaimsInput
    connect?: UserWhereUniqueInput
  }

  export type RewardUpdateOneRequiredWithoutClaimsNestedInput = {
    create?: XOR<RewardCreateWithoutClaimsInput, RewardUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: RewardCreateOrConnectWithoutClaimsInput
    upsert?: RewardUpsertWithoutClaimsInput
    connect?: RewardWhereUniqueInput
    update?: XOR<XOR<RewardUpdateToOneWithWhereWithoutClaimsInput, RewardUpdateWithoutClaimsInput>, RewardUncheckedUpdateWithoutClaimsInput>
  }

  export type UserUpdateOneRequiredWithoutRewardClaimsNestedInput = {
    create?: XOR<UserCreateWithoutRewardClaimsInput, UserUncheckedCreateWithoutRewardClaimsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRewardClaimsInput
    upsert?: UserUpsertWithoutRewardClaimsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRewardClaimsInput, UserUpdateWithoutRewardClaimsInput>, UserUncheckedUpdateWithoutRewardClaimsInput>
  }

  export type UserCreateNestedOneWithoutRecommendationsInput = {
    create?: XOR<UserCreateWithoutRecommendationsInput, UserUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecommendationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRecommendationsNestedInput = {
    create?: XOR<UserCreateWithoutRecommendationsInput, UserUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecommendationsInput
    upsert?: UserUpsertWithoutRecommendationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecommendationsInput, UserUpdateWithoutRecommendationsInput>, UserUncheckedUpdateWithoutRecommendationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthProviderFilter<$PrismaModel>
    _max?: NestedEnumAuthProviderFilter<$PrismaModel>
  }

  export type NestedEnumChallengeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ChallengeType | EnumChallengeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChallengeType[] | ListEnumChallengeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChallengeType[] | ListEnumChallengeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChallengeTypeFilter<$PrismaModel> | $Enums.ChallengeType
  }

  export type NestedEnumChallengeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChallengeType | EnumChallengeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChallengeType[] | ListEnumChallengeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChallengeType[] | ListEnumChallengeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChallengeTypeWithAggregatesFilter<$PrismaModel> | $Enums.ChallengeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChallengeTypeFilter<$PrismaModel>
    _max?: NestedEnumChallengeTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumProgressStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgressStatus | EnumProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProgressStatusFilter<$PrismaModel> | $Enums.ProgressStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumProgressStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgressStatus | EnumProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProgressStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProgressStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProgressStatusFilter<$PrismaModel>
    _max?: NestedEnumProgressStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BadgeEarnedCreateWithoutUserInput = {
    id?: string
    earnedAt?: Date | string
    badge: BadgeCreateNestedOneWithoutBadgesEarnedInput
  }

  export type BadgeEarnedUncheckedCreateWithoutUserInput = {
    id?: string
    badgeId: string
    earnedAt?: Date | string
  }

  export type BadgeEarnedCreateOrConnectWithoutUserInput = {
    where: BadgeEarnedWhereUniqueInput
    create: XOR<BadgeEarnedCreateWithoutUserInput, BadgeEarnedUncheckedCreateWithoutUserInput>
  }

  export type BadgeEarnedCreateManyUserInputEnvelope = {
    data: BadgeEarnedCreateManyUserInput | BadgeEarnedCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChallengeCompletionCreateWithoutUserInput = {
    id?: string
    challengeId: string
    status?: $Enums.ProgressStatus
    completedAt?: Date | string | null
    createdAt?: Date | string
    currentCompletions?: number
  }

  export type ChallengeCompletionUncheckedCreateWithoutUserInput = {
    id?: string
    challengeId: string
    status?: $Enums.ProgressStatus
    completedAt?: Date | string | null
    createdAt?: Date | string
    currentCompletions?: number
  }

  export type ChallengeCompletionCreateOrConnectWithoutUserInput = {
    where: ChallengeCompletionWhereUniqueInput
    create: XOR<ChallengeCompletionCreateWithoutUserInput, ChallengeCompletionUncheckedCreateWithoutUserInput>
  }

  export type ChallengeCompletionCreateManyUserInputEnvelope = {
    data: ChallengeCompletionCreateManyUserInput | ChallengeCompletionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RewardClaimCreateWithoutUserInput = {
    id?: string
    claimedAt?: Date | string
    reward: RewardCreateNestedOneWithoutClaimsInput
  }

  export type RewardClaimUncheckedCreateWithoutUserInput = {
    id?: string
    rewardId: string
    claimedAt?: Date | string
  }

  export type RewardClaimCreateOrConnectWithoutUserInput = {
    where: RewardClaimWhereUniqueInput
    create: XOR<RewardClaimCreateWithoutUserInput, RewardClaimUncheckedCreateWithoutUserInput>
  }

  export type RewardClaimCreateManyUserInputEnvelope = {
    data: RewardClaimCreateManyUserInput | RewardClaimCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChallengeCreateWithoutUserInput = {
    id?: string
    title: string
    rewardXp?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    instructions: string
    requiredCompletions?: number
    type: $Enums.ChallengeType
    completionCount?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ChallengeUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    rewardXp?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    instructions: string
    requiredCompletions?: number
    type: $Enums.ChallengeType
    completionCount?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ChallengeCreateOrConnectWithoutUserInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutUserInput, ChallengeUncheckedCreateWithoutUserInput>
  }

  export type ChallengeCreateManyUserInputEnvelope = {
    data: ChallengeCreateManyUserInput | ChallengeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RecommendationCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecommendationUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecommendationCreateOrConnectWithoutUserInput = {
    where: RecommendationWhereUniqueInput
    create: XOR<RecommendationCreateWithoutUserInput, RecommendationUncheckedCreateWithoutUserInput>
  }

  export type RecommendationCreateManyUserInputEnvelope = {
    data: RecommendationCreateManyUserInput | RecommendationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BadgeEarnedUpsertWithWhereUniqueWithoutUserInput = {
    where: BadgeEarnedWhereUniqueInput
    update: XOR<BadgeEarnedUpdateWithoutUserInput, BadgeEarnedUncheckedUpdateWithoutUserInput>
    create: XOR<BadgeEarnedCreateWithoutUserInput, BadgeEarnedUncheckedCreateWithoutUserInput>
  }

  export type BadgeEarnedUpdateWithWhereUniqueWithoutUserInput = {
    where: BadgeEarnedWhereUniqueInput
    data: XOR<BadgeEarnedUpdateWithoutUserInput, BadgeEarnedUncheckedUpdateWithoutUserInput>
  }

  export type BadgeEarnedUpdateManyWithWhereWithoutUserInput = {
    where: BadgeEarnedScalarWhereInput
    data: XOR<BadgeEarnedUpdateManyMutationInput, BadgeEarnedUncheckedUpdateManyWithoutUserInput>
  }

  export type BadgeEarnedScalarWhereInput = {
    AND?: BadgeEarnedScalarWhereInput | BadgeEarnedScalarWhereInput[]
    OR?: BadgeEarnedScalarWhereInput[]
    NOT?: BadgeEarnedScalarWhereInput | BadgeEarnedScalarWhereInput[]
    id?: StringFilter<"BadgeEarned"> | string
    userId?: StringFilter<"BadgeEarned"> | string
    badgeId?: StringFilter<"BadgeEarned"> | string
    earnedAt?: DateTimeFilter<"BadgeEarned"> | Date | string
  }

  export type ChallengeCompletionUpsertWithWhereUniqueWithoutUserInput = {
    where: ChallengeCompletionWhereUniqueInput
    update: XOR<ChallengeCompletionUpdateWithoutUserInput, ChallengeCompletionUncheckedUpdateWithoutUserInput>
    create: XOR<ChallengeCompletionCreateWithoutUserInput, ChallengeCompletionUncheckedCreateWithoutUserInput>
  }

  export type ChallengeCompletionUpdateWithWhereUniqueWithoutUserInput = {
    where: ChallengeCompletionWhereUniqueInput
    data: XOR<ChallengeCompletionUpdateWithoutUserInput, ChallengeCompletionUncheckedUpdateWithoutUserInput>
  }

  export type ChallengeCompletionUpdateManyWithWhereWithoutUserInput = {
    where: ChallengeCompletionScalarWhereInput
    data: XOR<ChallengeCompletionUpdateManyMutationInput, ChallengeCompletionUncheckedUpdateManyWithoutUserInput>
  }

  export type ChallengeCompletionScalarWhereInput = {
    AND?: ChallengeCompletionScalarWhereInput | ChallengeCompletionScalarWhereInput[]
    OR?: ChallengeCompletionScalarWhereInput[]
    NOT?: ChallengeCompletionScalarWhereInput | ChallengeCompletionScalarWhereInput[]
    id?: StringFilter<"ChallengeCompletion"> | string
    userId?: StringFilter<"ChallengeCompletion"> | string
    challengeId?: StringFilter<"ChallengeCompletion"> | string
    status?: EnumProgressStatusFilter<"ChallengeCompletion"> | $Enums.ProgressStatus
    completedAt?: DateTimeNullableFilter<"ChallengeCompletion"> | Date | string | null
    createdAt?: DateTimeFilter<"ChallengeCompletion"> | Date | string
    currentCompletions?: IntFilter<"ChallengeCompletion"> | number
  }

  export type RewardClaimUpsertWithWhereUniqueWithoutUserInput = {
    where: RewardClaimWhereUniqueInput
    update: XOR<RewardClaimUpdateWithoutUserInput, RewardClaimUncheckedUpdateWithoutUserInput>
    create: XOR<RewardClaimCreateWithoutUserInput, RewardClaimUncheckedCreateWithoutUserInput>
  }

  export type RewardClaimUpdateWithWhereUniqueWithoutUserInput = {
    where: RewardClaimWhereUniqueInput
    data: XOR<RewardClaimUpdateWithoutUserInput, RewardClaimUncheckedUpdateWithoutUserInput>
  }

  export type RewardClaimUpdateManyWithWhereWithoutUserInput = {
    where: RewardClaimScalarWhereInput
    data: XOR<RewardClaimUpdateManyMutationInput, RewardClaimUncheckedUpdateManyWithoutUserInput>
  }

  export type RewardClaimScalarWhereInput = {
    AND?: RewardClaimScalarWhereInput | RewardClaimScalarWhereInput[]
    OR?: RewardClaimScalarWhereInput[]
    NOT?: RewardClaimScalarWhereInput | RewardClaimScalarWhereInput[]
    id?: StringFilter<"RewardClaim"> | string
    userId?: StringFilter<"RewardClaim"> | string
    rewardId?: StringFilter<"RewardClaim"> | string
    claimedAt?: DateTimeFilter<"RewardClaim"> | Date | string
  }

  export type ChallengeUpsertWithWhereUniqueWithoutUserInput = {
    where: ChallengeWhereUniqueInput
    update: XOR<ChallengeUpdateWithoutUserInput, ChallengeUncheckedUpdateWithoutUserInput>
    create: XOR<ChallengeCreateWithoutUserInput, ChallengeUncheckedCreateWithoutUserInput>
  }

  export type ChallengeUpdateWithWhereUniqueWithoutUserInput = {
    where: ChallengeWhereUniqueInput
    data: XOR<ChallengeUpdateWithoutUserInput, ChallengeUncheckedUpdateWithoutUserInput>
  }

  export type ChallengeUpdateManyWithWhereWithoutUserInput = {
    where: ChallengeScalarWhereInput
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyWithoutUserInput>
  }

  export type ChallengeScalarWhereInput = {
    AND?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
    OR?: ChallengeScalarWhereInput[]
    NOT?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
    id?: StringFilter<"Challenge"> | string
    title?: StringFilter<"Challenge"> | string
    rewardXp?: IntFilter<"Challenge"> | number
    createdAt?: DateTimeFilter<"Challenge"> | Date | string
    updatedAt?: DateTimeFilter<"Challenge"> | Date | string
    instructions?: StringFilter<"Challenge"> | string
    requiredCompletions?: IntFilter<"Challenge"> | number
    type?: EnumChallengeTypeFilter<"Challenge"> | $Enums.ChallengeType
    completionCount?: IntFilter<"Challenge"> | number
    userId?: StringFilter<"Challenge"> | string
    metadata?: JsonNullableFilter<"Challenge">
  }

  export type RecommendationUpsertWithWhereUniqueWithoutUserInput = {
    where: RecommendationWhereUniqueInput
    update: XOR<RecommendationUpdateWithoutUserInput, RecommendationUncheckedUpdateWithoutUserInput>
    create: XOR<RecommendationCreateWithoutUserInput, RecommendationUncheckedCreateWithoutUserInput>
  }

  export type RecommendationUpdateWithWhereUniqueWithoutUserInput = {
    where: RecommendationWhereUniqueInput
    data: XOR<RecommendationUpdateWithoutUserInput, RecommendationUncheckedUpdateWithoutUserInput>
  }

  export type RecommendationUpdateManyWithWhereWithoutUserInput = {
    where: RecommendationScalarWhereInput
    data: XOR<RecommendationUpdateManyMutationInput, RecommendationUncheckedUpdateManyWithoutUserInput>
  }

  export type RecommendationScalarWhereInput = {
    AND?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
    OR?: RecommendationScalarWhereInput[]
    NOT?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
    id?: StringFilter<"Recommendation"> | string
    content?: StringFilter<"Recommendation"> | string
    userId?: StringFilter<"Recommendation"> | string
    createdAt?: DateTimeFilter<"Recommendation"> | Date | string
    updatedAt?: DateTimeFilter<"Recommendation"> | Date | string
  }

  export type UserCreateWithoutChallengesInput = {
    id?: string
    email: string
    avatarUrl?: string | null
    xp?: number
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authProvider?: $Enums.AuthProvider
    firstName: string
    lastName: string
    badgesEarned?: BadgeEarnedCreateNestedManyWithoutUserInput
    challengeCompletions?: ChallengeCompletionCreateNestedManyWithoutUserInput
    rewardClaims?: RewardClaimCreateNestedManyWithoutUserInput
    recommendations?: RecommendationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChallengesInput = {
    id?: string
    email: string
    avatarUrl?: string | null
    xp?: number
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authProvider?: $Enums.AuthProvider
    firstName: string
    lastName: string
    badgesEarned?: BadgeEarnedUncheckedCreateNestedManyWithoutUserInput
    challengeCompletions?: ChallengeCompletionUncheckedCreateNestedManyWithoutUserInput
    rewardClaims?: RewardClaimUncheckedCreateNestedManyWithoutUserInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChallengesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChallengesInput, UserUncheckedCreateWithoutChallengesInput>
  }

  export type UserUpsertWithoutChallengesInput = {
    update: XOR<UserUpdateWithoutChallengesInput, UserUncheckedUpdateWithoutChallengesInput>
    create: XOR<UserCreateWithoutChallengesInput, UserUncheckedCreateWithoutChallengesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChallengesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChallengesInput, UserUncheckedUpdateWithoutChallengesInput>
  }

  export type UserUpdateWithoutChallengesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    badgesEarned?: BadgeEarnedUpdateManyWithoutUserNestedInput
    challengeCompletions?: ChallengeCompletionUpdateManyWithoutUserNestedInput
    rewardClaims?: RewardClaimUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChallengesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    badgesEarned?: BadgeEarnedUncheckedUpdateManyWithoutUserNestedInput
    challengeCompletions?: ChallengeCompletionUncheckedUpdateManyWithoutUserNestedInput
    rewardClaims?: RewardClaimUncheckedUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BadgeEarnedCreateWithoutBadgeInput = {
    id?: string
    earnedAt?: Date | string
    user: UserCreateNestedOneWithoutBadgesEarnedInput
  }

  export type BadgeEarnedUncheckedCreateWithoutBadgeInput = {
    id?: string
    userId: string
    earnedAt?: Date | string
  }

  export type BadgeEarnedCreateOrConnectWithoutBadgeInput = {
    where: BadgeEarnedWhereUniqueInput
    create: XOR<BadgeEarnedCreateWithoutBadgeInput, BadgeEarnedUncheckedCreateWithoutBadgeInput>
  }

  export type BadgeEarnedCreateManyBadgeInputEnvelope = {
    data: BadgeEarnedCreateManyBadgeInput | BadgeEarnedCreateManyBadgeInput[]
    skipDuplicates?: boolean
  }

  export type BadgeEarnedUpsertWithWhereUniqueWithoutBadgeInput = {
    where: BadgeEarnedWhereUniqueInput
    update: XOR<BadgeEarnedUpdateWithoutBadgeInput, BadgeEarnedUncheckedUpdateWithoutBadgeInput>
    create: XOR<BadgeEarnedCreateWithoutBadgeInput, BadgeEarnedUncheckedCreateWithoutBadgeInput>
  }

  export type BadgeEarnedUpdateWithWhereUniqueWithoutBadgeInput = {
    where: BadgeEarnedWhereUniqueInput
    data: XOR<BadgeEarnedUpdateWithoutBadgeInput, BadgeEarnedUncheckedUpdateWithoutBadgeInput>
  }

  export type BadgeEarnedUpdateManyWithWhereWithoutBadgeInput = {
    where: BadgeEarnedScalarWhereInput
    data: XOR<BadgeEarnedUpdateManyMutationInput, BadgeEarnedUncheckedUpdateManyWithoutBadgeInput>
  }

  export type UserCreateWithoutChallengeCompletionsInput = {
    id?: string
    email: string
    avatarUrl?: string | null
    xp?: number
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authProvider?: $Enums.AuthProvider
    firstName: string
    lastName: string
    badgesEarned?: BadgeEarnedCreateNestedManyWithoutUserInput
    rewardClaims?: RewardClaimCreateNestedManyWithoutUserInput
    challenges?: ChallengeCreateNestedManyWithoutUserInput
    recommendations?: RecommendationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChallengeCompletionsInput = {
    id?: string
    email: string
    avatarUrl?: string | null
    xp?: number
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authProvider?: $Enums.AuthProvider
    firstName: string
    lastName: string
    badgesEarned?: BadgeEarnedUncheckedCreateNestedManyWithoutUserInput
    rewardClaims?: RewardClaimUncheckedCreateNestedManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChallengeCompletionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChallengeCompletionsInput, UserUncheckedCreateWithoutChallengeCompletionsInput>
  }

  export type UserUpsertWithoutChallengeCompletionsInput = {
    update: XOR<UserUpdateWithoutChallengeCompletionsInput, UserUncheckedUpdateWithoutChallengeCompletionsInput>
    create: XOR<UserCreateWithoutChallengeCompletionsInput, UserUncheckedCreateWithoutChallengeCompletionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChallengeCompletionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChallengeCompletionsInput, UserUncheckedUpdateWithoutChallengeCompletionsInput>
  }

  export type UserUpdateWithoutChallengeCompletionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    badgesEarned?: BadgeEarnedUpdateManyWithoutUserNestedInput
    rewardClaims?: RewardClaimUpdateManyWithoutUserNestedInput
    challenges?: ChallengeUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChallengeCompletionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    badgesEarned?: BadgeEarnedUncheckedUpdateManyWithoutUserNestedInput
    rewardClaims?: RewardClaimUncheckedUpdateManyWithoutUserNestedInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BadgeCreateWithoutBadgesEarnedInput = {
    id?: string
    name: string
    description: string
    xpRequired: number
    createdAt?: Date | string
    imagePath?: string
    isActive?: boolean
  }

  export type BadgeUncheckedCreateWithoutBadgesEarnedInput = {
    id?: string
    name: string
    description: string
    xpRequired: number
    createdAt?: Date | string
    imagePath?: string
    isActive?: boolean
  }

  export type BadgeCreateOrConnectWithoutBadgesEarnedInput = {
    where: BadgeWhereUniqueInput
    create: XOR<BadgeCreateWithoutBadgesEarnedInput, BadgeUncheckedCreateWithoutBadgesEarnedInput>
  }

  export type UserCreateWithoutBadgesEarnedInput = {
    id?: string
    email: string
    avatarUrl?: string | null
    xp?: number
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authProvider?: $Enums.AuthProvider
    firstName: string
    lastName: string
    challengeCompletions?: ChallengeCompletionCreateNestedManyWithoutUserInput
    rewardClaims?: RewardClaimCreateNestedManyWithoutUserInput
    challenges?: ChallengeCreateNestedManyWithoutUserInput
    recommendations?: RecommendationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBadgesEarnedInput = {
    id?: string
    email: string
    avatarUrl?: string | null
    xp?: number
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authProvider?: $Enums.AuthProvider
    firstName: string
    lastName: string
    challengeCompletions?: ChallengeCompletionUncheckedCreateNestedManyWithoutUserInput
    rewardClaims?: RewardClaimUncheckedCreateNestedManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBadgesEarnedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBadgesEarnedInput, UserUncheckedCreateWithoutBadgesEarnedInput>
  }

  export type BadgeUpsertWithoutBadgesEarnedInput = {
    update: XOR<BadgeUpdateWithoutBadgesEarnedInput, BadgeUncheckedUpdateWithoutBadgesEarnedInput>
    create: XOR<BadgeCreateWithoutBadgesEarnedInput, BadgeUncheckedCreateWithoutBadgesEarnedInput>
    where?: BadgeWhereInput
  }

  export type BadgeUpdateToOneWithWhereWithoutBadgesEarnedInput = {
    where?: BadgeWhereInput
    data: XOR<BadgeUpdateWithoutBadgesEarnedInput, BadgeUncheckedUpdateWithoutBadgesEarnedInput>
  }

  export type BadgeUpdateWithoutBadgesEarnedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xpRequired?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BadgeUncheckedUpdateWithoutBadgesEarnedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xpRequired?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUpsertWithoutBadgesEarnedInput = {
    update: XOR<UserUpdateWithoutBadgesEarnedInput, UserUncheckedUpdateWithoutBadgesEarnedInput>
    create: XOR<UserCreateWithoutBadgesEarnedInput, UserUncheckedCreateWithoutBadgesEarnedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBadgesEarnedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBadgesEarnedInput, UserUncheckedUpdateWithoutBadgesEarnedInput>
  }

  export type UserUpdateWithoutBadgesEarnedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    challengeCompletions?: ChallengeCompletionUpdateManyWithoutUserNestedInput
    rewardClaims?: RewardClaimUpdateManyWithoutUserNestedInput
    challenges?: ChallengeUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBadgesEarnedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    challengeCompletions?: ChallengeCompletionUncheckedUpdateManyWithoutUserNestedInput
    rewardClaims?: RewardClaimUncheckedUpdateManyWithoutUserNestedInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RewardClaimCreateWithoutRewardInput = {
    id?: string
    claimedAt?: Date | string
    user: UserCreateNestedOneWithoutRewardClaimsInput
  }

  export type RewardClaimUncheckedCreateWithoutRewardInput = {
    id?: string
    userId: string
    claimedAt?: Date | string
  }

  export type RewardClaimCreateOrConnectWithoutRewardInput = {
    where: RewardClaimWhereUniqueInput
    create: XOR<RewardClaimCreateWithoutRewardInput, RewardClaimUncheckedCreateWithoutRewardInput>
  }

  export type RewardClaimCreateManyRewardInputEnvelope = {
    data: RewardClaimCreateManyRewardInput | RewardClaimCreateManyRewardInput[]
    skipDuplicates?: boolean
  }

  export type RewardClaimUpsertWithWhereUniqueWithoutRewardInput = {
    where: RewardClaimWhereUniqueInput
    update: XOR<RewardClaimUpdateWithoutRewardInput, RewardClaimUncheckedUpdateWithoutRewardInput>
    create: XOR<RewardClaimCreateWithoutRewardInput, RewardClaimUncheckedCreateWithoutRewardInput>
  }

  export type RewardClaimUpdateWithWhereUniqueWithoutRewardInput = {
    where: RewardClaimWhereUniqueInput
    data: XOR<RewardClaimUpdateWithoutRewardInput, RewardClaimUncheckedUpdateWithoutRewardInput>
  }

  export type RewardClaimUpdateManyWithWhereWithoutRewardInput = {
    where: RewardClaimScalarWhereInput
    data: XOR<RewardClaimUpdateManyMutationInput, RewardClaimUncheckedUpdateManyWithoutRewardInput>
  }

  export type RewardCreateWithoutClaimsInput = {
    id?: string
    name: string
    description: string
    costXp: number
    imageUrl: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type RewardUncheckedCreateWithoutClaimsInput = {
    id?: string
    name: string
    description: string
    costXp: number
    imageUrl: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type RewardCreateOrConnectWithoutClaimsInput = {
    where: RewardWhereUniqueInput
    create: XOR<RewardCreateWithoutClaimsInput, RewardUncheckedCreateWithoutClaimsInput>
  }

  export type UserCreateWithoutRewardClaimsInput = {
    id?: string
    email: string
    avatarUrl?: string | null
    xp?: number
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authProvider?: $Enums.AuthProvider
    firstName: string
    lastName: string
    badgesEarned?: BadgeEarnedCreateNestedManyWithoutUserInput
    challengeCompletions?: ChallengeCompletionCreateNestedManyWithoutUserInput
    challenges?: ChallengeCreateNestedManyWithoutUserInput
    recommendations?: RecommendationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRewardClaimsInput = {
    id?: string
    email: string
    avatarUrl?: string | null
    xp?: number
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authProvider?: $Enums.AuthProvider
    firstName: string
    lastName: string
    badgesEarned?: BadgeEarnedUncheckedCreateNestedManyWithoutUserInput
    challengeCompletions?: ChallengeCompletionUncheckedCreateNestedManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateNestedManyWithoutUserInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRewardClaimsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRewardClaimsInput, UserUncheckedCreateWithoutRewardClaimsInput>
  }

  export type RewardUpsertWithoutClaimsInput = {
    update: XOR<RewardUpdateWithoutClaimsInput, RewardUncheckedUpdateWithoutClaimsInput>
    create: XOR<RewardCreateWithoutClaimsInput, RewardUncheckedCreateWithoutClaimsInput>
    where?: RewardWhereInput
  }

  export type RewardUpdateToOneWithWhereWithoutClaimsInput = {
    where?: RewardWhereInput
    data: XOR<RewardUpdateWithoutClaimsInput, RewardUncheckedUpdateWithoutClaimsInput>
  }

  export type RewardUpdateWithoutClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    costXp?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardUncheckedUpdateWithoutClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    costXp?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutRewardClaimsInput = {
    update: XOR<UserUpdateWithoutRewardClaimsInput, UserUncheckedUpdateWithoutRewardClaimsInput>
    create: XOR<UserCreateWithoutRewardClaimsInput, UserUncheckedCreateWithoutRewardClaimsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRewardClaimsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRewardClaimsInput, UserUncheckedUpdateWithoutRewardClaimsInput>
  }

  export type UserUpdateWithoutRewardClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    badgesEarned?: BadgeEarnedUpdateManyWithoutUserNestedInput
    challengeCompletions?: ChallengeCompletionUpdateManyWithoutUserNestedInput
    challenges?: ChallengeUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRewardClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    badgesEarned?: BadgeEarnedUncheckedUpdateManyWithoutUserNestedInput
    challengeCompletions?: ChallengeCompletionUncheckedUpdateManyWithoutUserNestedInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutRecommendationsInput = {
    id?: string
    email: string
    avatarUrl?: string | null
    xp?: number
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authProvider?: $Enums.AuthProvider
    firstName: string
    lastName: string
    badgesEarned?: BadgeEarnedCreateNestedManyWithoutUserInput
    challengeCompletions?: ChallengeCompletionCreateNestedManyWithoutUserInput
    rewardClaims?: RewardClaimCreateNestedManyWithoutUserInput
    challenges?: ChallengeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRecommendationsInput = {
    id?: string
    email: string
    avatarUrl?: string | null
    xp?: number
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authProvider?: $Enums.AuthProvider
    firstName: string
    lastName: string
    badgesEarned?: BadgeEarnedUncheckedCreateNestedManyWithoutUserInput
    challengeCompletions?: ChallengeCompletionUncheckedCreateNestedManyWithoutUserInput
    rewardClaims?: RewardClaimUncheckedCreateNestedManyWithoutUserInput
    challenges?: ChallengeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRecommendationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecommendationsInput, UserUncheckedCreateWithoutRecommendationsInput>
  }

  export type UserUpsertWithoutRecommendationsInput = {
    update: XOR<UserUpdateWithoutRecommendationsInput, UserUncheckedUpdateWithoutRecommendationsInput>
    create: XOR<UserCreateWithoutRecommendationsInput, UserUncheckedCreateWithoutRecommendationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecommendationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecommendationsInput, UserUncheckedUpdateWithoutRecommendationsInput>
  }

  export type UserUpdateWithoutRecommendationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    badgesEarned?: BadgeEarnedUpdateManyWithoutUserNestedInput
    challengeCompletions?: ChallengeCompletionUpdateManyWithoutUserNestedInput
    rewardClaims?: RewardClaimUpdateManyWithoutUserNestedInput
    challenges?: ChallengeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRecommendationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    badgesEarned?: BadgeEarnedUncheckedUpdateManyWithoutUserNestedInput
    challengeCompletions?: ChallengeCompletionUncheckedUpdateManyWithoutUserNestedInput
    rewardClaims?: RewardClaimUncheckedUpdateManyWithoutUserNestedInput
    challenges?: ChallengeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BadgeEarnedCreateManyUserInput = {
    id?: string
    badgeId: string
    earnedAt?: Date | string
  }

  export type ChallengeCompletionCreateManyUserInput = {
    id?: string
    challengeId: string
    status?: $Enums.ProgressStatus
    completedAt?: Date | string | null
    createdAt?: Date | string
    currentCompletions?: number
  }

  export type RewardClaimCreateManyUserInput = {
    id?: string
    rewardId: string
    claimedAt?: Date | string
  }

  export type ChallengeCreateManyUserInput = {
    id?: string
    title: string
    rewardXp?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    instructions: string
    requiredCompletions?: number
    type: $Enums.ChallengeType
    completionCount?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RecommendationCreateManyUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BadgeEarnedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badge?: BadgeUpdateOneRequiredWithoutBadgesEarnedNestedInput
  }

  export type BadgeEarnedUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    badgeId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeEarnedUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    badgeId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeCompletionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentCompletions?: IntFieldUpdateOperationsInput | number
  }

  export type ChallengeCompletionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentCompletions?: IntFieldUpdateOperationsInput | number
  }

  export type ChallengeCompletionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentCompletions?: IntFieldUpdateOperationsInput | number
  }

  export type RewardClaimUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reward?: RewardUpdateOneRequiredWithoutClaimsNestedInput
  }

  export type RewardClaimUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rewardId?: StringFieldUpdateOperationsInput | string
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardClaimUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rewardId?: StringFieldUpdateOperationsInput | string
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rewardXp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructions?: StringFieldUpdateOperationsInput | string
    requiredCompletions?: IntFieldUpdateOperationsInput | number
    type?: EnumChallengeTypeFieldUpdateOperationsInput | $Enums.ChallengeType
    completionCount?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ChallengeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rewardXp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructions?: StringFieldUpdateOperationsInput | string
    requiredCompletions?: IntFieldUpdateOperationsInput | number
    type?: EnumChallengeTypeFieldUpdateOperationsInput | $Enums.ChallengeType
    completionCount?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ChallengeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rewardXp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructions?: StringFieldUpdateOperationsInput | string
    requiredCompletions?: IntFieldUpdateOperationsInput | number
    type?: EnumChallengeTypeFieldUpdateOperationsInput | $Enums.ChallengeType
    completionCount?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RecommendationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeEarnedCreateManyBadgeInput = {
    id?: string
    userId: string
    earnedAt?: Date | string
  }

  export type BadgeEarnedUpdateWithoutBadgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBadgesEarnedNestedInput
  }

  export type BadgeEarnedUncheckedUpdateWithoutBadgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeEarnedUncheckedUpdateManyWithoutBadgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardClaimCreateManyRewardInput = {
    id?: string
    userId: string
    claimedAt?: Date | string
  }

  export type RewardClaimUpdateWithoutRewardInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRewardClaimsNestedInput
  }

  export type RewardClaimUncheckedUpdateWithoutRewardInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardClaimUncheckedUpdateManyWithoutRewardInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}