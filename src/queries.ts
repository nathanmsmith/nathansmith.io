type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>
  ne?: Maybe<Scalars['Boolean']>
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>
}

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>
  ne?: Maybe<Scalars['Date']>
  gt?: Maybe<Scalars['Date']>
  gte?: Maybe<Scalars['Date']>
  lt?: Maybe<Scalars['Date']>
  lte?: Maybe<Scalars['Date']>
  in?: Maybe<Array<Maybe<Scalars['Date']>>>
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>
}

export type Directory = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  sourceInstanceName?: Maybe<Scalars['String']>
  absolutePath?: Maybe<Scalars['String']>
  relativePath?: Maybe<Scalars['String']>
  extension?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Int']>
  prettySize?: Maybe<Scalars['String']>
  modifiedTime?: Maybe<Scalars['Date']>
  accessTime?: Maybe<Scalars['Date']>
  changeTime?: Maybe<Scalars['Date']>
  birthTime?: Maybe<Scalars['Date']>
  root?: Maybe<Scalars['String']>
  dir?: Maybe<Scalars['String']>
  base?: Maybe<Scalars['String']>
  ext?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  relativeDirectory?: Maybe<Scalars['String']>
  dev?: Maybe<Scalars['Int']>
  mode?: Maybe<Scalars['Int']>
  nlink?: Maybe<Scalars['Int']>
  uid?: Maybe<Scalars['Int']>
  gid?: Maybe<Scalars['Int']>
  rdev?: Maybe<Scalars['Int']>
  blksize?: Maybe<Scalars['Int']>
  ino?: Maybe<Scalars['Int']>
  blocks?: Maybe<Scalars['Int']>
  atimeMs?: Maybe<Scalars['Float']>
  mtimeMs?: Maybe<Scalars['Float']>
  ctimeMs?: Maybe<Scalars['Float']>
  birthtimeMs?: Maybe<Scalars['Float']>
  atime?: Maybe<Scalars['Date']>
  mtime?: Maybe<Scalars['Date']>
  ctime?: Maybe<Scalars['Date']>
  birthtime?: Maybe<Scalars['Date']>
}

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryBirthtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryConnection = {
  totalCount: Scalars['Int']
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<DirectoryGroupConnection>
}

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: DirectoryFieldsEnum
}

export type DirectoryEdge = {
  next?: Maybe<Directory>
  node: Directory
  previous?: Maybe<Directory>
}

export enum DirectoryFieldsEnum {
  Id = 'id',
  Parent___Id = 'parent___id',
  Parent___Parent___Id = 'parent___parent___id',
  Parent___Parent___Parent___Id = 'parent___parent___parent___id',
  Parent___Parent___Parent___Children = 'parent___parent___parent___children',
  Parent___Parent___Children = 'parent___parent___children',
  Parent___Parent___Children___Id = 'parent___parent___children___id',
  Parent___Parent___Children___Children = 'parent___parent___children___children',
  Parent___Parent___Internal___Content = 'parent___parent___internal___content',
  Parent___Parent___Internal___ContentDigest = 'parent___parent___internal___contentDigest',
  Parent___Parent___Internal___Description = 'parent___parent___internal___description',
  Parent___Parent___Internal___FieldOwners = 'parent___parent___internal___fieldOwners',
  Parent___Parent___Internal___IgnoreType = 'parent___parent___internal___ignoreType',
  Parent___Parent___Internal___MediaType = 'parent___parent___internal___mediaType',
  Parent___Parent___Internal___Owner = 'parent___parent___internal___owner',
  Parent___Parent___Internal___Type = 'parent___parent___internal___type',
  Parent___Children = 'parent___children',
  Parent___Children___Id = 'parent___children___id',
  Parent___Children___Parent___Id = 'parent___children___parent___id',
  Parent___Children___Parent___Children = 'parent___children___parent___children',
  Parent___Children___Children = 'parent___children___children',
  Parent___Children___Children___Id = 'parent___children___children___id',
  Parent___Children___Children___Children = 'parent___children___children___children',
  Parent___Children___Internal___Content = 'parent___children___internal___content',
  Parent___Children___Internal___ContentDigest = 'parent___children___internal___contentDigest',
  Parent___Children___Internal___Description = 'parent___children___internal___description',
  Parent___Children___Internal___FieldOwners = 'parent___children___internal___fieldOwners',
  Parent___Children___Internal___IgnoreType = 'parent___children___internal___ignoreType',
  Parent___Children___Internal___MediaType = 'parent___children___internal___mediaType',
  Parent___Children___Internal___Owner = 'parent___children___internal___owner',
  Parent___Children___Internal___Type = 'parent___children___internal___type',
  Parent___Internal___Content = 'parent___internal___content',
  Parent___Internal___ContentDigest = 'parent___internal___contentDigest',
  Parent___Internal___Description = 'parent___internal___description',
  Parent___Internal___FieldOwners = 'parent___internal___fieldOwners',
  Parent___Internal___IgnoreType = 'parent___internal___ignoreType',
  Parent___Internal___MediaType = 'parent___internal___mediaType',
  Parent___Internal___Owner = 'parent___internal___owner',
  Parent___Internal___Type = 'parent___internal___type',
  Children = 'children',
  Children___Id = 'children___id',
  Children___Parent___Id = 'children___parent___id',
  Children___Parent___Parent___Id = 'children___parent___parent___id',
  Children___Parent___Parent___Children = 'children___parent___parent___children',
  Children___Parent___Children = 'children___parent___children',
  Children___Parent___Children___Id = 'children___parent___children___id',
  Children___Parent___Children___Children = 'children___parent___children___children',
  Children___Parent___Internal___Content = 'children___parent___internal___content',
  Children___Parent___Internal___ContentDigest = 'children___parent___internal___contentDigest',
  Children___Parent___Internal___Description = 'children___parent___internal___description',
  Children___Parent___Internal___FieldOwners = 'children___parent___internal___fieldOwners',
  Children___Parent___Internal___IgnoreType = 'children___parent___internal___ignoreType',
  Children___Parent___Internal___MediaType = 'children___parent___internal___mediaType',
  Children___Parent___Internal___Owner = 'children___parent___internal___owner',
  Children___Parent___Internal___Type = 'children___parent___internal___type',
  Children___Children = 'children___children',
  Children___Children___Id = 'children___children___id',
  Children___Children___Parent___Id = 'children___children___parent___id',
  Children___Children___Parent___Children = 'children___children___parent___children',
  Children___Children___Children = 'children___children___children',
  Children___Children___Children___Id = 'children___children___children___id',
  Children___Children___Children___Children = 'children___children___children___children',
  Children___Children___Internal___Content = 'children___children___internal___content',
  Children___Children___Internal___ContentDigest = 'children___children___internal___contentDigest',
  Children___Children___Internal___Description = 'children___children___internal___description',
  Children___Children___Internal___FieldOwners = 'children___children___internal___fieldOwners',
  Children___Children___Internal___IgnoreType = 'children___children___internal___ignoreType',
  Children___Children___Internal___MediaType = 'children___children___internal___mediaType',
  Children___Children___Internal___Owner = 'children___children___internal___owner',
  Children___Children___Internal___Type = 'children___children___internal___type',
  Children___Internal___Content = 'children___internal___content',
  Children___Internal___ContentDigest = 'children___internal___contentDigest',
  Children___Internal___Description = 'children___internal___description',
  Children___Internal___FieldOwners = 'children___internal___fieldOwners',
  Children___Internal___IgnoreType = 'children___internal___ignoreType',
  Children___Internal___MediaType = 'children___internal___mediaType',
  Children___Internal___Owner = 'children___internal___owner',
  Children___Internal___Type = 'children___internal___type',
  Internal___Content = 'internal___content',
  Internal___ContentDigest = 'internal___contentDigest',
  Internal___Description = 'internal___description',
  Internal___FieldOwners = 'internal___fieldOwners',
  Internal___IgnoreType = 'internal___ignoreType',
  Internal___MediaType = 'internal___mediaType',
  Internal___Owner = 'internal___owner',
  Internal___Type = 'internal___type',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export type DirectoryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
}

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type DuotoneGradient = {
  highlight?: Maybe<Scalars['String']>
  shadow?: Maybe<Scalars['String']>
  opacity?: Maybe<Scalars['Int']>
}

export enum ExcerptFormats {
  Plain = 'PLAIN',
  Html = 'HTML',
}

export type File = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  sourceInstanceName?: Maybe<Scalars['String']>
  absolutePath?: Maybe<Scalars['String']>
  relativePath?: Maybe<Scalars['String']>
  extension?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Int']>
  prettySize?: Maybe<Scalars['String']>
  modifiedTime?: Maybe<Scalars['Date']>
  accessTime?: Maybe<Scalars['Date']>
  changeTime?: Maybe<Scalars['Date']>
  birthTime?: Maybe<Scalars['Date']>
  root?: Maybe<Scalars['String']>
  dir?: Maybe<Scalars['String']>
  base?: Maybe<Scalars['String']>
  ext?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  relativeDirectory?: Maybe<Scalars['String']>
  dev?: Maybe<Scalars['Int']>
  mode?: Maybe<Scalars['Int']>
  nlink?: Maybe<Scalars['Int']>
  uid?: Maybe<Scalars['Int']>
  gid?: Maybe<Scalars['Int']>
  rdev?: Maybe<Scalars['Int']>
  blksize?: Maybe<Scalars['Int']>
  ino?: Maybe<Scalars['Int']>
  blocks?: Maybe<Scalars['Int']>
  atimeMs?: Maybe<Scalars['Float']>
  mtimeMs?: Maybe<Scalars['Float']>
  ctimeMs?: Maybe<Scalars['Float']>
  birthtimeMs?: Maybe<Scalars['Float']>
  atime?: Maybe<Scalars['Date']>
  mtime?: Maybe<Scalars['Date']>
  ctime?: Maybe<Scalars['Date']>
  birthtime?: Maybe<Scalars['Date']>
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>
  childMarkdownRemark?: Maybe<MarkdownRemark>
  childImageSharp?: Maybe<ImageSharp>
}

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileBirthtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileConnection = {
  totalCount: Scalars['Int']
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<FileGroupConnection>
}

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: FileFieldsEnum
}

export type FileEdge = {
  next?: Maybe<File>
  node: File
  previous?: Maybe<File>
}

export enum FileFieldsEnum {
  Id = 'id',
  Parent___Id = 'parent___id',
  Parent___Parent___Id = 'parent___parent___id',
  Parent___Parent___Parent___Id = 'parent___parent___parent___id',
  Parent___Parent___Parent___Children = 'parent___parent___parent___children',
  Parent___Parent___Children = 'parent___parent___children',
  Parent___Parent___Children___Id = 'parent___parent___children___id',
  Parent___Parent___Children___Children = 'parent___parent___children___children',
  Parent___Parent___Internal___Content = 'parent___parent___internal___content',
  Parent___Parent___Internal___ContentDigest = 'parent___parent___internal___contentDigest',
  Parent___Parent___Internal___Description = 'parent___parent___internal___description',
  Parent___Parent___Internal___FieldOwners = 'parent___parent___internal___fieldOwners',
  Parent___Parent___Internal___IgnoreType = 'parent___parent___internal___ignoreType',
  Parent___Parent___Internal___MediaType = 'parent___parent___internal___mediaType',
  Parent___Parent___Internal___Owner = 'parent___parent___internal___owner',
  Parent___Parent___Internal___Type = 'parent___parent___internal___type',
  Parent___Children = 'parent___children',
  Parent___Children___Id = 'parent___children___id',
  Parent___Children___Parent___Id = 'parent___children___parent___id',
  Parent___Children___Parent___Children = 'parent___children___parent___children',
  Parent___Children___Children = 'parent___children___children',
  Parent___Children___Children___Id = 'parent___children___children___id',
  Parent___Children___Children___Children = 'parent___children___children___children',
  Parent___Children___Internal___Content = 'parent___children___internal___content',
  Parent___Children___Internal___ContentDigest = 'parent___children___internal___contentDigest',
  Parent___Children___Internal___Description = 'parent___children___internal___description',
  Parent___Children___Internal___FieldOwners = 'parent___children___internal___fieldOwners',
  Parent___Children___Internal___IgnoreType = 'parent___children___internal___ignoreType',
  Parent___Children___Internal___MediaType = 'parent___children___internal___mediaType',
  Parent___Children___Internal___Owner = 'parent___children___internal___owner',
  Parent___Children___Internal___Type = 'parent___children___internal___type',
  Parent___Internal___Content = 'parent___internal___content',
  Parent___Internal___ContentDigest = 'parent___internal___contentDigest',
  Parent___Internal___Description = 'parent___internal___description',
  Parent___Internal___FieldOwners = 'parent___internal___fieldOwners',
  Parent___Internal___IgnoreType = 'parent___internal___ignoreType',
  Parent___Internal___MediaType = 'parent___internal___mediaType',
  Parent___Internal___Owner = 'parent___internal___owner',
  Parent___Internal___Type = 'parent___internal___type',
  Children = 'children',
  Children___Id = 'children___id',
  Children___Parent___Id = 'children___parent___id',
  Children___Parent___Parent___Id = 'children___parent___parent___id',
  Children___Parent___Parent___Children = 'children___parent___parent___children',
  Children___Parent___Children = 'children___parent___children',
  Children___Parent___Children___Id = 'children___parent___children___id',
  Children___Parent___Children___Children = 'children___parent___children___children',
  Children___Parent___Internal___Content = 'children___parent___internal___content',
  Children___Parent___Internal___ContentDigest = 'children___parent___internal___contentDigest',
  Children___Parent___Internal___Description = 'children___parent___internal___description',
  Children___Parent___Internal___FieldOwners = 'children___parent___internal___fieldOwners',
  Children___Parent___Internal___IgnoreType = 'children___parent___internal___ignoreType',
  Children___Parent___Internal___MediaType = 'children___parent___internal___mediaType',
  Children___Parent___Internal___Owner = 'children___parent___internal___owner',
  Children___Parent___Internal___Type = 'children___parent___internal___type',
  Children___Children = 'children___children',
  Children___Children___Id = 'children___children___id',
  Children___Children___Parent___Id = 'children___children___parent___id',
  Children___Children___Parent___Children = 'children___children___parent___children',
  Children___Children___Children = 'children___children___children',
  Children___Children___Children___Id = 'children___children___children___id',
  Children___Children___Children___Children = 'children___children___children___children',
  Children___Children___Internal___Content = 'children___children___internal___content',
  Children___Children___Internal___ContentDigest = 'children___children___internal___contentDigest',
  Children___Children___Internal___Description = 'children___children___internal___description',
  Children___Children___Internal___FieldOwners = 'children___children___internal___fieldOwners',
  Children___Children___Internal___IgnoreType = 'children___children___internal___ignoreType',
  Children___Children___Internal___MediaType = 'children___children___internal___mediaType',
  Children___Children___Internal___Owner = 'children___children___internal___owner',
  Children___Children___Internal___Type = 'children___children___internal___type',
  Children___Internal___Content = 'children___internal___content',
  Children___Internal___ContentDigest = 'children___internal___contentDigest',
  Children___Internal___Description = 'children___internal___description',
  Children___Internal___FieldOwners = 'children___internal___fieldOwners',
  Children___Internal___IgnoreType = 'children___internal___ignoreType',
  Children___Internal___MediaType = 'children___internal___mediaType',
  Children___Internal___Owner = 'children___internal___owner',
  Children___Internal___Type = 'children___internal___type',
  Internal___Content = 'internal___content',
  Internal___ContentDigest = 'internal___contentDigest',
  Internal___Description = 'internal___description',
  Internal___FieldOwners = 'internal___fieldOwners',
  Internal___IgnoreType = 'internal___ignoreType',
  Internal___MediaType = 'internal___mediaType',
  Internal___Owner = 'internal___owner',
  Internal___Type = 'internal___type',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  PublicUrl = 'publicURL',
}

export type FileFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  publicURL?: Maybe<StringQueryOperatorInput>
}

export type FileGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>
  ne?: Maybe<Scalars['Float']>
  gt?: Maybe<Scalars['Float']>
  gte?: Maybe<Scalars['Float']>
  lt?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
  in?: Maybe<Array<Maybe<Scalars['Float']>>>
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>
}

export enum HeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION',
}

export enum ImageFormat {
  No_Change = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP',
}

export type ImageSharp = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  fixed?: Maybe<ImageSharpFixed>
  resolutions?: Maybe<ImageSharpResolutions>
  fluid?: Maybe<ImageSharpFluid>
  sizes?: Maybe<ImageSharpSizes>
  original?: Maybe<ImageSharpOriginal>
  resize?: Maybe<ImageSharpResize>
}

export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  jpegProgressive: Scalars['Boolean']
  pngCompressionSpeed: Scalars['Int']
  grayscale: Scalars['Boolean']
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  toFormat: ImageFormat
  toFormatBase64: ImageFormat
  cropFocus: ImageCropFocus
  rotate: Scalars['Int']
}

export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  jpegProgressive: Scalars['Boolean']
  pngCompressionSpeed: Scalars['Int']
  grayscale: Scalars['Boolean']
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  toFormat: ImageFormat
  toFormatBase64: ImageFormat
  cropFocus: ImageCropFocus
  rotate: Scalars['Int']
}

export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  grayscale: Scalars['Boolean']
  jpegProgressive: Scalars['Boolean']
  pngCompressionSpeed: Scalars['Int']
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  toFormat: ImageFormat
  toFormatBase64: ImageFormat
  cropFocus: ImageCropFocus
  rotate: Scalars['Int']
  sizes: Scalars['String']
  srcSetBreakpoints: Array<Maybe<Scalars['Int']>>
}

export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  grayscale: Scalars['Boolean']
  jpegProgressive: Scalars['Boolean']
  pngCompressionSpeed: Scalars['Int']
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  toFormat: ImageFormat
  toFormatBase64: ImageFormat
  cropFocus: ImageCropFocus
  rotate: Scalars['Int']
  sizes: Scalars['String']
  srcSetBreakpoints: Array<Maybe<Scalars['Int']>>
}

export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  jpegProgressive: Scalars['Boolean']
  pngCompressionLevel: Scalars['Int']
  pngCompressionSpeed: Scalars['Int']
  grayscale: Scalars['Boolean']
  duotone?: Maybe<DuotoneGradient>
  base64: Scalars['Boolean']
  traceSVG?: Maybe<Potrace>
  toFormat: ImageFormat
  cropFocus: ImageCropFocus
  rotate: Scalars['Int']
}

export type ImageSharpConnection = {
  totalCount: Scalars['Int']
  edges: Array<ImageSharpEdge>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ImageSharpGroupConnection>
}

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ImageSharpFieldsEnum
}

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>
  node: ImageSharp
  previous?: Maybe<ImageSharp>
}

export enum ImageSharpFieldsEnum {
  Id = 'id',
  Parent___Id = 'parent___id',
  Parent___Parent___Id = 'parent___parent___id',
  Parent___Parent___Parent___Id = 'parent___parent___parent___id',
  Parent___Parent___Parent___Children = 'parent___parent___parent___children',
  Parent___Parent___Children = 'parent___parent___children',
  Parent___Parent___Children___Id = 'parent___parent___children___id',
  Parent___Parent___Children___Children = 'parent___parent___children___children',
  Parent___Parent___Internal___Content = 'parent___parent___internal___content',
  Parent___Parent___Internal___ContentDigest = 'parent___parent___internal___contentDigest',
  Parent___Parent___Internal___Description = 'parent___parent___internal___description',
  Parent___Parent___Internal___FieldOwners = 'parent___parent___internal___fieldOwners',
  Parent___Parent___Internal___IgnoreType = 'parent___parent___internal___ignoreType',
  Parent___Parent___Internal___MediaType = 'parent___parent___internal___mediaType',
  Parent___Parent___Internal___Owner = 'parent___parent___internal___owner',
  Parent___Parent___Internal___Type = 'parent___parent___internal___type',
  Parent___Children = 'parent___children',
  Parent___Children___Id = 'parent___children___id',
  Parent___Children___Parent___Id = 'parent___children___parent___id',
  Parent___Children___Parent___Children = 'parent___children___parent___children',
  Parent___Children___Children = 'parent___children___children',
  Parent___Children___Children___Id = 'parent___children___children___id',
  Parent___Children___Children___Children = 'parent___children___children___children',
  Parent___Children___Internal___Content = 'parent___children___internal___content',
  Parent___Children___Internal___ContentDigest = 'parent___children___internal___contentDigest',
  Parent___Children___Internal___Description = 'parent___children___internal___description',
  Parent___Children___Internal___FieldOwners = 'parent___children___internal___fieldOwners',
  Parent___Children___Internal___IgnoreType = 'parent___children___internal___ignoreType',
  Parent___Children___Internal___MediaType = 'parent___children___internal___mediaType',
  Parent___Children___Internal___Owner = 'parent___children___internal___owner',
  Parent___Children___Internal___Type = 'parent___children___internal___type',
  Parent___Internal___Content = 'parent___internal___content',
  Parent___Internal___ContentDigest = 'parent___internal___contentDigest',
  Parent___Internal___Description = 'parent___internal___description',
  Parent___Internal___FieldOwners = 'parent___internal___fieldOwners',
  Parent___Internal___IgnoreType = 'parent___internal___ignoreType',
  Parent___Internal___MediaType = 'parent___internal___mediaType',
  Parent___Internal___Owner = 'parent___internal___owner',
  Parent___Internal___Type = 'parent___internal___type',
  Children = 'children',
  Children___Id = 'children___id',
  Children___Parent___Id = 'children___parent___id',
  Children___Parent___Parent___Id = 'children___parent___parent___id',
  Children___Parent___Parent___Children = 'children___parent___parent___children',
  Children___Parent___Children = 'children___parent___children',
  Children___Parent___Children___Id = 'children___parent___children___id',
  Children___Parent___Children___Children = 'children___parent___children___children',
  Children___Parent___Internal___Content = 'children___parent___internal___content',
  Children___Parent___Internal___ContentDigest = 'children___parent___internal___contentDigest',
  Children___Parent___Internal___Description = 'children___parent___internal___description',
  Children___Parent___Internal___FieldOwners = 'children___parent___internal___fieldOwners',
  Children___Parent___Internal___IgnoreType = 'children___parent___internal___ignoreType',
  Children___Parent___Internal___MediaType = 'children___parent___internal___mediaType',
  Children___Parent___Internal___Owner = 'children___parent___internal___owner',
  Children___Parent___Internal___Type = 'children___parent___internal___type',
  Children___Children = 'children___children',
  Children___Children___Id = 'children___children___id',
  Children___Children___Parent___Id = 'children___children___parent___id',
  Children___Children___Parent___Children = 'children___children___parent___children',
  Children___Children___Children = 'children___children___children',
  Children___Children___Children___Id = 'children___children___children___id',
  Children___Children___Children___Children = 'children___children___children___children',
  Children___Children___Internal___Content = 'children___children___internal___content',
  Children___Children___Internal___ContentDigest = 'children___children___internal___contentDigest',
  Children___Children___Internal___Description = 'children___children___internal___description',
  Children___Children___Internal___FieldOwners = 'children___children___internal___fieldOwners',
  Children___Children___Internal___IgnoreType = 'children___children___internal___ignoreType',
  Children___Children___Internal___MediaType = 'children___children___internal___mediaType',
  Children___Children___Internal___Owner = 'children___children___internal___owner',
  Children___Children___Internal___Type = 'children___children___internal___type',
  Children___Internal___Content = 'children___internal___content',
  Children___Internal___ContentDigest = 'children___internal___contentDigest',
  Children___Internal___Description = 'children___internal___description',
  Children___Internal___FieldOwners = 'children___internal___fieldOwners',
  Children___Internal___IgnoreType = 'children___internal___ignoreType',
  Children___Internal___MediaType = 'children___internal___mediaType',
  Children___Internal___Owner = 'children___internal___owner',
  Children___Internal___Type = 'children___internal___type',
  Internal___Content = 'internal___content',
  Internal___ContentDigest = 'internal___contentDigest',
  Internal___Description = 'internal___description',
  Internal___FieldOwners = 'internal___fieldOwners',
  Internal___IgnoreType = 'internal___ignoreType',
  Internal___MediaType = 'internal___mediaType',
  Internal___Owner = 'internal___owner',
  Internal___Type = 'internal___type',
  Fixed___Base64 = 'fixed___base64',
  Fixed___TracedSvg = 'fixed___tracedSVG',
  Fixed___AspectRatio = 'fixed___aspectRatio',
  Fixed___Width = 'fixed___width',
  Fixed___Height = 'fixed___height',
  Fixed___Src = 'fixed___src',
  Fixed___SrcSet = 'fixed___srcSet',
  Fixed___SrcWebp = 'fixed___srcWebp',
  Fixed___SrcSetWebp = 'fixed___srcSetWebp',
  Fixed___OriginalName = 'fixed___originalName',
  Resolutions___Base64 = 'resolutions___base64',
  Resolutions___TracedSvg = 'resolutions___tracedSVG',
  Resolutions___AspectRatio = 'resolutions___aspectRatio',
  Resolutions___Width = 'resolutions___width',
  Resolutions___Height = 'resolutions___height',
  Resolutions___Src = 'resolutions___src',
  Resolutions___SrcSet = 'resolutions___srcSet',
  Resolutions___SrcWebp = 'resolutions___srcWebp',
  Resolutions___SrcSetWebp = 'resolutions___srcSetWebp',
  Resolutions___OriginalName = 'resolutions___originalName',
  Fluid___Base64 = 'fluid___base64',
  Fluid___TracedSvg = 'fluid___tracedSVG',
  Fluid___AspectRatio = 'fluid___aspectRatio',
  Fluid___Src = 'fluid___src',
  Fluid___SrcSet = 'fluid___srcSet',
  Fluid___SrcWebp = 'fluid___srcWebp',
  Fluid___SrcSetWebp = 'fluid___srcSetWebp',
  Fluid___Sizes = 'fluid___sizes',
  Fluid___OriginalImg = 'fluid___originalImg',
  Fluid___OriginalName = 'fluid___originalName',
  Fluid___PresentationWidth = 'fluid___presentationWidth',
  Fluid___PresentationHeight = 'fluid___presentationHeight',
  Sizes___Base64 = 'sizes___base64',
  Sizes___TracedSvg = 'sizes___tracedSVG',
  Sizes___AspectRatio = 'sizes___aspectRatio',
  Sizes___Src = 'sizes___src',
  Sizes___SrcSet = 'sizes___srcSet',
  Sizes___SrcWebp = 'sizes___srcWebp',
  Sizes___SrcSetWebp = 'sizes___srcSetWebp',
  Sizes___Sizes = 'sizes___sizes',
  Sizes___OriginalImg = 'sizes___originalImg',
  Sizes___OriginalName = 'sizes___originalName',
  Sizes___PresentationWidth = 'sizes___presentationWidth',
  Sizes___PresentationHeight = 'sizes___presentationHeight',
  Original___Width = 'original___width',
  Original___Height = 'original___height',
  Original___Src = 'original___src',
  Resize___Src = 'resize___src',
  Resize___TracedSvg = 'resize___tracedSVG',
  Resize___Width = 'resize___width',
  Resize___Height = 'resize___height',
  Resize___AspectRatio = 'resize___aspectRatio',
  Resize___OriginalName = 'resize___originalName',
}

export type ImageSharpFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  fixed?: Maybe<ImageSharpFixedFilterInput>
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>
  fluid?: Maybe<ImageSharpFluidFilterInput>
  sizes?: Maybe<ImageSharpSizesFilterInput>
  original?: Maybe<ImageSharpOriginalFilterInput>
  resize?: Maybe<ImageSharpResizeFilterInput>
}

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  src?: Maybe<Scalars['String']>
  srcSet?: Maybe<Scalars['String']>
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
}

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  src?: Maybe<Scalars['String']>
  srcSet?: Maybe<Scalars['String']>
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  sizes?: Maybe<Scalars['String']>
  originalImg?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
  presentationWidth?: Maybe<Scalars['Int']>
  presentationHeight?: Maybe<Scalars['Int']>
}

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
  originalImg?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
  presentationWidth?: Maybe<IntQueryOperatorInput>
  presentationHeight?: Maybe<IntQueryOperatorInput>
}

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<ImageSharpEdge>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  src?: Maybe<Scalars['String']>
}

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  aspectRatio?: Maybe<Scalars['Float']>
  originalName?: Maybe<Scalars['String']>
}

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  width?: Maybe<IntQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  src?: Maybe<Scalars['String']>
  srcSet?: Maybe<Scalars['String']>
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
}

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  src?: Maybe<Scalars['String']>
  srcSet?: Maybe<Scalars['String']>
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  sizes?: Maybe<Scalars['String']>
  originalImg?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
  presentationWidth?: Maybe<Scalars['Int']>
  presentationHeight?: Maybe<Scalars['Int']>
}

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
  originalImg?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
  presentationWidth?: Maybe<IntQueryOperatorInput>
  presentationHeight?: Maybe<IntQueryOperatorInput>
}

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type Internal = {
  content?: Maybe<Scalars['String']>
  contentDigest: Scalars['String']
  description?: Maybe<Scalars['String']>
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>
  ignoreType?: Maybe<Scalars['Boolean']>
  mediaType?: Maybe<Scalars['String']>
  owner: Scalars['String']
  type: Scalars['String']
}

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>
  contentDigest?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  fieldOwners?: Maybe<StringQueryOperatorInput>
  ignoreType?: Maybe<BooleanQueryOperatorInput>
  mediaType?: Maybe<StringQueryOperatorInput>
  owner?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
}

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>
  ne?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Maybe<Scalars['Int']>>>
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>
  ne?: Maybe<Scalars['JSON']>
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>
  regex?: Maybe<Scalars['JSON']>
  glob?: Maybe<Scalars['JSON']>
}

export type MarkdownHeading = {
  value?: Maybe<Scalars['String']>
  depth?: Maybe<Scalars['Int']>
}

export type MarkdownHeadingFilterInput = {
  value?: Maybe<StringQueryOperatorInput>
  depth?: Maybe<IntQueryOperatorInput>
}

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>
}

export type MarkdownRemark = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>
  excerpt?: Maybe<Scalars['String']>
  rawMarkdownBody?: Maybe<Scalars['String']>
  fileAbsolutePath?: Maybe<Scalars['String']>
  fields?: Maybe<MarkdownRemarkFields>
  html?: Maybe<Scalars['String']>
  htmlAst?: Maybe<Scalars['JSON']>
  excerptAst?: Maybe<Scalars['JSON']>
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>
  timeToRead?: Maybe<Scalars['Int']>
  tableOfContents?: Maybe<Scalars['String']>
  wordCount?: Maybe<WordCount>
}

export type MarkdownRemarkExcerptArgs = {
  pruneLength: Scalars['Int']
  truncate: Scalars['Boolean']
  format: ExcerptFormats
}

export type MarkdownRemarkExcerptAstArgs = {
  pruneLength: Scalars['Int']
  truncate: Scalars['Boolean']
}

export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<HeadingLevels>
}

export type MarkdownRemarkTableOfContentsArgs = {
  pathToSlugField: Scalars['String']
  maxDepth?: Maybe<Scalars['Int']>
  heading?: Maybe<Scalars['String']>
}

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int']
  edges: Array<MarkdownRemarkEdge>
  nodes: Array<MarkdownRemark>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<MarkdownRemarkGroupConnection>
}

export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>
  node: MarkdownRemark
  previous?: Maybe<MarkdownRemark>
}

export type MarkdownRemarkFields = {
  slug?: Maybe<Scalars['String']>
}

export enum MarkdownRemarkFieldsEnum {
  Id = 'id',
  Parent___Id = 'parent___id',
  Parent___Parent___Id = 'parent___parent___id',
  Parent___Parent___Parent___Id = 'parent___parent___parent___id',
  Parent___Parent___Parent___Children = 'parent___parent___parent___children',
  Parent___Parent___Children = 'parent___parent___children',
  Parent___Parent___Children___Id = 'parent___parent___children___id',
  Parent___Parent___Children___Children = 'parent___parent___children___children',
  Parent___Parent___Internal___Content = 'parent___parent___internal___content',
  Parent___Parent___Internal___ContentDigest = 'parent___parent___internal___contentDigest',
  Parent___Parent___Internal___Description = 'parent___parent___internal___description',
  Parent___Parent___Internal___FieldOwners = 'parent___parent___internal___fieldOwners',
  Parent___Parent___Internal___IgnoreType = 'parent___parent___internal___ignoreType',
  Parent___Parent___Internal___MediaType = 'parent___parent___internal___mediaType',
  Parent___Parent___Internal___Owner = 'parent___parent___internal___owner',
  Parent___Parent___Internal___Type = 'parent___parent___internal___type',
  Parent___Children = 'parent___children',
  Parent___Children___Id = 'parent___children___id',
  Parent___Children___Parent___Id = 'parent___children___parent___id',
  Parent___Children___Parent___Children = 'parent___children___parent___children',
  Parent___Children___Children = 'parent___children___children',
  Parent___Children___Children___Id = 'parent___children___children___id',
  Parent___Children___Children___Children = 'parent___children___children___children',
  Parent___Children___Internal___Content = 'parent___children___internal___content',
  Parent___Children___Internal___ContentDigest = 'parent___children___internal___contentDigest',
  Parent___Children___Internal___Description = 'parent___children___internal___description',
  Parent___Children___Internal___FieldOwners = 'parent___children___internal___fieldOwners',
  Parent___Children___Internal___IgnoreType = 'parent___children___internal___ignoreType',
  Parent___Children___Internal___MediaType = 'parent___children___internal___mediaType',
  Parent___Children___Internal___Owner = 'parent___children___internal___owner',
  Parent___Children___Internal___Type = 'parent___children___internal___type',
  Parent___Internal___Content = 'parent___internal___content',
  Parent___Internal___ContentDigest = 'parent___internal___contentDigest',
  Parent___Internal___Description = 'parent___internal___description',
  Parent___Internal___FieldOwners = 'parent___internal___fieldOwners',
  Parent___Internal___IgnoreType = 'parent___internal___ignoreType',
  Parent___Internal___MediaType = 'parent___internal___mediaType',
  Parent___Internal___Owner = 'parent___internal___owner',
  Parent___Internal___Type = 'parent___internal___type',
  Children = 'children',
  Children___Id = 'children___id',
  Children___Parent___Id = 'children___parent___id',
  Children___Parent___Parent___Id = 'children___parent___parent___id',
  Children___Parent___Parent___Children = 'children___parent___parent___children',
  Children___Parent___Children = 'children___parent___children',
  Children___Parent___Children___Id = 'children___parent___children___id',
  Children___Parent___Children___Children = 'children___parent___children___children',
  Children___Parent___Internal___Content = 'children___parent___internal___content',
  Children___Parent___Internal___ContentDigest = 'children___parent___internal___contentDigest',
  Children___Parent___Internal___Description = 'children___parent___internal___description',
  Children___Parent___Internal___FieldOwners = 'children___parent___internal___fieldOwners',
  Children___Parent___Internal___IgnoreType = 'children___parent___internal___ignoreType',
  Children___Parent___Internal___MediaType = 'children___parent___internal___mediaType',
  Children___Parent___Internal___Owner = 'children___parent___internal___owner',
  Children___Parent___Internal___Type = 'children___parent___internal___type',
  Children___Children = 'children___children',
  Children___Children___Id = 'children___children___id',
  Children___Children___Parent___Id = 'children___children___parent___id',
  Children___Children___Parent___Children = 'children___children___parent___children',
  Children___Children___Children = 'children___children___children',
  Children___Children___Children___Id = 'children___children___children___id',
  Children___Children___Children___Children = 'children___children___children___children',
  Children___Children___Internal___Content = 'children___children___internal___content',
  Children___Children___Internal___ContentDigest = 'children___children___internal___contentDigest',
  Children___Children___Internal___Description = 'children___children___internal___description',
  Children___Children___Internal___FieldOwners = 'children___children___internal___fieldOwners',
  Children___Children___Internal___IgnoreType = 'children___children___internal___ignoreType',
  Children___Children___Internal___MediaType = 'children___children___internal___mediaType',
  Children___Children___Internal___Owner = 'children___children___internal___owner',
  Children___Children___Internal___Type = 'children___children___internal___type',
  Children___Internal___Content = 'children___internal___content',
  Children___Internal___ContentDigest = 'children___internal___contentDigest',
  Children___Internal___Description = 'children___internal___description',
  Children___Internal___FieldOwners = 'children___internal___fieldOwners',
  Children___Internal___IgnoreType = 'children___internal___ignoreType',
  Children___Internal___MediaType = 'children___internal___mediaType',
  Children___Internal___Owner = 'children___internal___owner',
  Children___Internal___Type = 'children___internal___type',
  Internal___Content = 'internal___content',
  Internal___ContentDigest = 'internal___contentDigest',
  Internal___Description = 'internal___description',
  Internal___FieldOwners = 'internal___fieldOwners',
  Internal___IgnoreType = 'internal___ignoreType',
  Internal___MediaType = 'internal___mediaType',
  Internal___Owner = 'internal___owner',
  Internal___Type = 'internal___type',
  Frontmatter___Title = 'frontmatter___title',
  Frontmatter___Draft = 'frontmatter___draft',
  Frontmatter___Organization = 'frontmatter___organization',
  Frontmatter___Dates = 'frontmatter___dates',
  Frontmatter___Link = 'frontmatter___link',
  Frontmatter___GithubLink = 'frontmatter___githubLink',
  Frontmatter___Technologies = 'frontmatter___technologies',
  Frontmatter___Role = 'frontmatter___role',
  Frontmatter___Image___Id = 'frontmatter___image___id',
  Frontmatter___Image___Parent___Id = 'frontmatter___image___parent___id',
  Frontmatter___Image___Parent___Children = 'frontmatter___image___parent___children',
  Frontmatter___Image___Children = 'frontmatter___image___children',
  Frontmatter___Image___Children___Id = 'frontmatter___image___children___id',
  Frontmatter___Image___Children___Children = 'frontmatter___image___children___children',
  Frontmatter___Image___Internal___Content = 'frontmatter___image___internal___content',
  Frontmatter___Image___Internal___ContentDigest = 'frontmatter___image___internal___contentDigest',
  Frontmatter___Image___Internal___Description = 'frontmatter___image___internal___description',
  Frontmatter___Image___Internal___FieldOwners = 'frontmatter___image___internal___fieldOwners',
  Frontmatter___Image___Internal___IgnoreType = 'frontmatter___image___internal___ignoreType',
  Frontmatter___Image___Internal___MediaType = 'frontmatter___image___internal___mediaType',
  Frontmatter___Image___Internal___Owner = 'frontmatter___image___internal___owner',
  Frontmatter___Image___Internal___Type = 'frontmatter___image___internal___type',
  Frontmatter___Image___SourceInstanceName = 'frontmatter___image___sourceInstanceName',
  Frontmatter___Image___AbsolutePath = 'frontmatter___image___absolutePath',
  Frontmatter___Image___RelativePath = 'frontmatter___image___relativePath',
  Frontmatter___Image___Extension = 'frontmatter___image___extension',
  Frontmatter___Image___Size = 'frontmatter___image___size',
  Frontmatter___Image___PrettySize = 'frontmatter___image___prettySize',
  Frontmatter___Image___ModifiedTime = 'frontmatter___image___modifiedTime',
  Frontmatter___Image___AccessTime = 'frontmatter___image___accessTime',
  Frontmatter___Image___ChangeTime = 'frontmatter___image___changeTime',
  Frontmatter___Image___BirthTime = 'frontmatter___image___birthTime',
  Frontmatter___Image___Root = 'frontmatter___image___root',
  Frontmatter___Image___Dir = 'frontmatter___image___dir',
  Frontmatter___Image___Base = 'frontmatter___image___base',
  Frontmatter___Image___Ext = 'frontmatter___image___ext',
  Frontmatter___Image___Name = 'frontmatter___image___name',
  Frontmatter___Image___RelativeDirectory = 'frontmatter___image___relativeDirectory',
  Frontmatter___Image___Dev = 'frontmatter___image___dev',
  Frontmatter___Image___Mode = 'frontmatter___image___mode',
  Frontmatter___Image___Nlink = 'frontmatter___image___nlink',
  Frontmatter___Image___Uid = 'frontmatter___image___uid',
  Frontmatter___Image___Gid = 'frontmatter___image___gid',
  Frontmatter___Image___Rdev = 'frontmatter___image___rdev',
  Frontmatter___Image___Blksize = 'frontmatter___image___blksize',
  Frontmatter___Image___Ino = 'frontmatter___image___ino',
  Frontmatter___Image___Blocks = 'frontmatter___image___blocks',
  Frontmatter___Image___AtimeMs = 'frontmatter___image___atimeMs',
  Frontmatter___Image___MtimeMs = 'frontmatter___image___mtimeMs',
  Frontmatter___Image___CtimeMs = 'frontmatter___image___ctimeMs',
  Frontmatter___Image___BirthtimeMs = 'frontmatter___image___birthtimeMs',
  Frontmatter___Image___Atime = 'frontmatter___image___atime',
  Frontmatter___Image___Mtime = 'frontmatter___image___mtime',
  Frontmatter___Image___Ctime = 'frontmatter___image___ctime',
  Frontmatter___Image___Birthtime = 'frontmatter___image___birthtime',
  Frontmatter___Image___PublicUrl = 'frontmatter___image___publicURL',
  Frontmatter___Hidden = 'frontmatter___hidden',
  Excerpt = 'excerpt',
  RawMarkdownBody = 'rawMarkdownBody',
  FileAbsolutePath = 'fileAbsolutePath',
  Fields___Slug = 'fields___slug',
  Html = 'html',
  HtmlAst = 'htmlAst',
  ExcerptAst = 'excerptAst',
  Headings = 'headings',
  Headings___Value = 'headings___value',
  Headings___Depth = 'headings___depth',
  TimeToRead = 'timeToRead',
  TableOfContents = 'tableOfContents',
  WordCount___Paragraphs = 'wordCount___paragraphs',
  WordCount___Sentences = 'wordCount___sentences',
  WordCount___Words = 'wordCount___words',
}

export type MarkdownRemarkFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>
}

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>
  html?: Maybe<StringQueryOperatorInput>
  htmlAst?: Maybe<JsonQueryOperatorInput>
  excerptAst?: Maybe<JsonQueryOperatorInput>
  headings?: Maybe<MarkdownHeadingFilterListInput>
  timeToRead?: Maybe<IntQueryOperatorInput>
  tableOfContents?: Maybe<StringQueryOperatorInput>
  wordCount?: Maybe<WordCountFilterInput>
}

export type MarkdownRemarkFrontmatter = {
  title?: Maybe<Scalars['String']>
  draft?: Maybe<Scalars['Boolean']>
  organization?: Maybe<Scalars['String']>
  dates?: Maybe<Scalars['String']>
  link?: Maybe<Scalars['String']>
  githubLink?: Maybe<Scalars['String']>
  technologies?: Maybe<Array<Maybe<Scalars['String']>>>
  role?: Maybe<Scalars['String']>
  image?: Maybe<File>
  hidden?: Maybe<Scalars['Boolean']>
}

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>
  draft?: Maybe<BooleanQueryOperatorInput>
  organization?: Maybe<StringQueryOperatorInput>
  dates?: Maybe<StringQueryOperatorInput>
  link?: Maybe<StringQueryOperatorInput>
  githubLink?: Maybe<StringQueryOperatorInput>
  technologies?: Maybe<StringQueryOperatorInput>
  role?: Maybe<StringQueryOperatorInput>
  image?: Maybe<FileFilterInput>
  hidden?: Maybe<BooleanQueryOperatorInput>
}

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<MarkdownRemarkEdge>
  nodes: Array<MarkdownRemark>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

/** Node Interface */
export type Node = {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>
}

export type PageInfo = {
  hasNextPage: Scalars['Boolean']
}

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>
  turdSize?: Maybe<Scalars['Float']>
  alphaMax?: Maybe<Scalars['Float']>
  optCurve?: Maybe<Scalars['Boolean']>
  optTolerance?: Maybe<Scalars['Float']>
  threshold?: Maybe<Scalars['Int']>
  blackOnWhite?: Maybe<Scalars['Boolean']>
  color?: Maybe<Scalars['String']>
  background?: Maybe<Scalars['String']>
}

export enum PotraceTurnPolicy {
  Turnpolicy_Black = 'TURNPOLICY_BLACK',
  Turnpolicy_White = 'TURNPOLICY_WHITE',
  Turnpolicy_Left = 'TURNPOLICY_LEFT',
  Turnpolicy_Right = 'TURNPOLICY_RIGHT',
  Turnpolicy_Minority = 'TURNPOLICY_MINORITY',
  Turnpolicy_Majority = 'TURNPOLICY_MAJORITY',
}

export type Query = {
  file?: Maybe<File>
  allFile?: Maybe<FileConnection>
  sitePage?: Maybe<SitePage>
  allSitePage?: Maybe<SitePageConnection>
  sitePlugin?: Maybe<SitePlugin>
  allSitePlugin?: Maybe<SitePluginConnection>
  site?: Maybe<Site>
  allSite?: Maybe<SiteConnection>
  directory?: Maybe<Directory>
  allDirectory?: Maybe<DirectoryConnection>
  markdownRemark?: Maybe<MarkdownRemark>
  allMarkdownRemark?: Maybe<MarkdownRemarkConnection>
  imageSharp?: Maybe<ImageSharp>
  allImageSharp?: Maybe<ImageSharpConnection>
}

export type QueryFileArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  publicURL?: Maybe<StringQueryOperatorInput>
}

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>
  sort?: Maybe<FileSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySitePageArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  path?: Maybe<StringQueryOperatorInput>
  jsonName?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  context?: Maybe<SitePageContextFilterInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
  componentPath?: Maybe<StringQueryOperatorInput>
}

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>
  sort?: Maybe<SitePageSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>
  sort?: Maybe<SitePluginSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<DateQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>
  sort?: Maybe<SiteSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryDirectoryArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
}

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>
  sort?: Maybe<DirectorySortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>
  html?: Maybe<StringQueryOperatorInput>
  htmlAst?: Maybe<JsonQueryOperatorInput>
  excerptAst?: Maybe<JsonQueryOperatorInput>
  headings?: Maybe<MarkdownHeadingFilterListInput>
  timeToRead?: Maybe<IntQueryOperatorInput>
  tableOfContents?: Maybe<StringQueryOperatorInput>
  wordCount?: Maybe<WordCountFilterInput>
}

export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>
  sort?: Maybe<MarkdownRemarkSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryImageSharpArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  fixed?: Maybe<ImageSharpFixedFilterInput>
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>
  fluid?: Maybe<ImageSharpFluidFilterInput>
  sizes?: Maybe<ImageSharpSizesFilterInput>
  original?: Maybe<ImageSharpOriginalFilterInput>
  resize?: Maybe<ImageSharpResizeFilterInput>
}

export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>
  sort?: Maybe<ImageSharpSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type Site = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  siteMetadata?: Maybe<SiteSiteMetadata>
  port?: Maybe<Scalars['Date']>
  host?: Maybe<Scalars['String']>
  pathPrefix?: Maybe<Scalars['String']>
  polyfill?: Maybe<Scalars['Boolean']>
  buildTime?: Maybe<Scalars['Date']>
}

export type SitePortArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SiteConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SiteGroupConnection>
}

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SiteFieldsEnum
}

export type SiteEdge = {
  next?: Maybe<Site>
  node: Site
  previous?: Maybe<Site>
}

export enum SiteFieldsEnum {
  Id = 'id',
  Parent___Id = 'parent___id',
  Parent___Parent___Id = 'parent___parent___id',
  Parent___Parent___Parent___Id = 'parent___parent___parent___id',
  Parent___Parent___Parent___Children = 'parent___parent___parent___children',
  Parent___Parent___Children = 'parent___parent___children',
  Parent___Parent___Children___Id = 'parent___parent___children___id',
  Parent___Parent___Children___Children = 'parent___parent___children___children',
  Parent___Parent___Internal___Content = 'parent___parent___internal___content',
  Parent___Parent___Internal___ContentDigest = 'parent___parent___internal___contentDigest',
  Parent___Parent___Internal___Description = 'parent___parent___internal___description',
  Parent___Parent___Internal___FieldOwners = 'parent___parent___internal___fieldOwners',
  Parent___Parent___Internal___IgnoreType = 'parent___parent___internal___ignoreType',
  Parent___Parent___Internal___MediaType = 'parent___parent___internal___mediaType',
  Parent___Parent___Internal___Owner = 'parent___parent___internal___owner',
  Parent___Parent___Internal___Type = 'parent___parent___internal___type',
  Parent___Children = 'parent___children',
  Parent___Children___Id = 'parent___children___id',
  Parent___Children___Parent___Id = 'parent___children___parent___id',
  Parent___Children___Parent___Children = 'parent___children___parent___children',
  Parent___Children___Children = 'parent___children___children',
  Parent___Children___Children___Id = 'parent___children___children___id',
  Parent___Children___Children___Children = 'parent___children___children___children',
  Parent___Children___Internal___Content = 'parent___children___internal___content',
  Parent___Children___Internal___ContentDigest = 'parent___children___internal___contentDigest',
  Parent___Children___Internal___Description = 'parent___children___internal___description',
  Parent___Children___Internal___FieldOwners = 'parent___children___internal___fieldOwners',
  Parent___Children___Internal___IgnoreType = 'parent___children___internal___ignoreType',
  Parent___Children___Internal___MediaType = 'parent___children___internal___mediaType',
  Parent___Children___Internal___Owner = 'parent___children___internal___owner',
  Parent___Children___Internal___Type = 'parent___children___internal___type',
  Parent___Internal___Content = 'parent___internal___content',
  Parent___Internal___ContentDigest = 'parent___internal___contentDigest',
  Parent___Internal___Description = 'parent___internal___description',
  Parent___Internal___FieldOwners = 'parent___internal___fieldOwners',
  Parent___Internal___IgnoreType = 'parent___internal___ignoreType',
  Parent___Internal___MediaType = 'parent___internal___mediaType',
  Parent___Internal___Owner = 'parent___internal___owner',
  Parent___Internal___Type = 'parent___internal___type',
  Children = 'children',
  Children___Id = 'children___id',
  Children___Parent___Id = 'children___parent___id',
  Children___Parent___Parent___Id = 'children___parent___parent___id',
  Children___Parent___Parent___Children = 'children___parent___parent___children',
  Children___Parent___Children = 'children___parent___children',
  Children___Parent___Children___Id = 'children___parent___children___id',
  Children___Parent___Children___Children = 'children___parent___children___children',
  Children___Parent___Internal___Content = 'children___parent___internal___content',
  Children___Parent___Internal___ContentDigest = 'children___parent___internal___contentDigest',
  Children___Parent___Internal___Description = 'children___parent___internal___description',
  Children___Parent___Internal___FieldOwners = 'children___parent___internal___fieldOwners',
  Children___Parent___Internal___IgnoreType = 'children___parent___internal___ignoreType',
  Children___Parent___Internal___MediaType = 'children___parent___internal___mediaType',
  Children___Parent___Internal___Owner = 'children___parent___internal___owner',
  Children___Parent___Internal___Type = 'children___parent___internal___type',
  Children___Children = 'children___children',
  Children___Children___Id = 'children___children___id',
  Children___Children___Parent___Id = 'children___children___parent___id',
  Children___Children___Parent___Children = 'children___children___parent___children',
  Children___Children___Children = 'children___children___children',
  Children___Children___Children___Id = 'children___children___children___id',
  Children___Children___Children___Children = 'children___children___children___children',
  Children___Children___Internal___Content = 'children___children___internal___content',
  Children___Children___Internal___ContentDigest = 'children___children___internal___contentDigest',
  Children___Children___Internal___Description = 'children___children___internal___description',
  Children___Children___Internal___FieldOwners = 'children___children___internal___fieldOwners',
  Children___Children___Internal___IgnoreType = 'children___children___internal___ignoreType',
  Children___Children___Internal___MediaType = 'children___children___internal___mediaType',
  Children___Children___Internal___Owner = 'children___children___internal___owner',
  Children___Children___Internal___Type = 'children___children___internal___type',
  Children___Internal___Content = 'children___internal___content',
  Children___Internal___ContentDigest = 'children___internal___contentDigest',
  Children___Internal___Description = 'children___internal___description',
  Children___Internal___FieldOwners = 'children___internal___fieldOwners',
  Children___Internal___IgnoreType = 'children___internal___ignoreType',
  Children___Internal___MediaType = 'children___internal___mediaType',
  Children___Internal___Owner = 'children___internal___owner',
  Children___Internal___Type = 'children___internal___type',
  Internal___Content = 'internal___content',
  Internal___ContentDigest = 'internal___contentDigest',
  Internal___Description = 'internal___description',
  Internal___FieldOwners = 'internal___fieldOwners',
  Internal___IgnoreType = 'internal___ignoreType',
  Internal___MediaType = 'internal___mediaType',
  Internal___Owner = 'internal___owner',
  Internal___Type = 'internal___type',
  SiteMetadata___SiteTitle = 'siteMetadata___siteTitle',
  SiteMetadata___Description = 'siteMetadata___description',
  SiteMetadata___Twitter = 'siteMetadata___twitter',
  Port = 'port',
  Host = 'host',
  PathPrefix = 'pathPrefix',
  Polyfill = 'polyfill',
  BuildTime = 'buildTime',
}

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<DateQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type SiteGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePage = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  path?: Maybe<Scalars['String']>
  jsonName?: Maybe<Scalars['String']>
  internalComponentName?: Maybe<Scalars['String']>
  component?: Maybe<Scalars['String']>
  componentChunkName?: Maybe<Scalars['String']>
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>
  context?: Maybe<SitePageContext>
  pluginCreator?: Maybe<SitePlugin>
  pluginCreatorId?: Maybe<Scalars['String']>
  componentPath?: Maybe<Scalars['String']>
}

export type SitePageConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SitePageGroupConnection>
}

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SitePageFieldsEnum
}

export type SitePageContext = {
  slug?: Maybe<Scalars['String']>
}

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>
}

export type SitePageEdge = {
  next?: Maybe<SitePage>
  node: SitePage
  previous?: Maybe<SitePage>
}

export enum SitePageFieldsEnum {
  Id = 'id',
  Parent___Id = 'parent___id',
  Parent___Parent___Id = 'parent___parent___id',
  Parent___Parent___Parent___Id = 'parent___parent___parent___id',
  Parent___Parent___Parent___Children = 'parent___parent___parent___children',
  Parent___Parent___Children = 'parent___parent___children',
  Parent___Parent___Children___Id = 'parent___parent___children___id',
  Parent___Parent___Children___Children = 'parent___parent___children___children',
  Parent___Parent___Internal___Content = 'parent___parent___internal___content',
  Parent___Parent___Internal___ContentDigest = 'parent___parent___internal___contentDigest',
  Parent___Parent___Internal___Description = 'parent___parent___internal___description',
  Parent___Parent___Internal___FieldOwners = 'parent___parent___internal___fieldOwners',
  Parent___Parent___Internal___IgnoreType = 'parent___parent___internal___ignoreType',
  Parent___Parent___Internal___MediaType = 'parent___parent___internal___mediaType',
  Parent___Parent___Internal___Owner = 'parent___parent___internal___owner',
  Parent___Parent___Internal___Type = 'parent___parent___internal___type',
  Parent___Children = 'parent___children',
  Parent___Children___Id = 'parent___children___id',
  Parent___Children___Parent___Id = 'parent___children___parent___id',
  Parent___Children___Parent___Children = 'parent___children___parent___children',
  Parent___Children___Children = 'parent___children___children',
  Parent___Children___Children___Id = 'parent___children___children___id',
  Parent___Children___Children___Children = 'parent___children___children___children',
  Parent___Children___Internal___Content = 'parent___children___internal___content',
  Parent___Children___Internal___ContentDigest = 'parent___children___internal___contentDigest',
  Parent___Children___Internal___Description = 'parent___children___internal___description',
  Parent___Children___Internal___FieldOwners = 'parent___children___internal___fieldOwners',
  Parent___Children___Internal___IgnoreType = 'parent___children___internal___ignoreType',
  Parent___Children___Internal___MediaType = 'parent___children___internal___mediaType',
  Parent___Children___Internal___Owner = 'parent___children___internal___owner',
  Parent___Children___Internal___Type = 'parent___children___internal___type',
  Parent___Internal___Content = 'parent___internal___content',
  Parent___Internal___ContentDigest = 'parent___internal___contentDigest',
  Parent___Internal___Description = 'parent___internal___description',
  Parent___Internal___FieldOwners = 'parent___internal___fieldOwners',
  Parent___Internal___IgnoreType = 'parent___internal___ignoreType',
  Parent___Internal___MediaType = 'parent___internal___mediaType',
  Parent___Internal___Owner = 'parent___internal___owner',
  Parent___Internal___Type = 'parent___internal___type',
  Children = 'children',
  Children___Id = 'children___id',
  Children___Parent___Id = 'children___parent___id',
  Children___Parent___Parent___Id = 'children___parent___parent___id',
  Children___Parent___Parent___Children = 'children___parent___parent___children',
  Children___Parent___Children = 'children___parent___children',
  Children___Parent___Children___Id = 'children___parent___children___id',
  Children___Parent___Children___Children = 'children___parent___children___children',
  Children___Parent___Internal___Content = 'children___parent___internal___content',
  Children___Parent___Internal___ContentDigest = 'children___parent___internal___contentDigest',
  Children___Parent___Internal___Description = 'children___parent___internal___description',
  Children___Parent___Internal___FieldOwners = 'children___parent___internal___fieldOwners',
  Children___Parent___Internal___IgnoreType = 'children___parent___internal___ignoreType',
  Children___Parent___Internal___MediaType = 'children___parent___internal___mediaType',
  Children___Parent___Internal___Owner = 'children___parent___internal___owner',
  Children___Parent___Internal___Type = 'children___parent___internal___type',
  Children___Children = 'children___children',
  Children___Children___Id = 'children___children___id',
  Children___Children___Parent___Id = 'children___children___parent___id',
  Children___Children___Parent___Children = 'children___children___parent___children',
  Children___Children___Children = 'children___children___children',
  Children___Children___Children___Id = 'children___children___children___id',
  Children___Children___Children___Children = 'children___children___children___children',
  Children___Children___Internal___Content = 'children___children___internal___content',
  Children___Children___Internal___ContentDigest = 'children___children___internal___contentDigest',
  Children___Children___Internal___Description = 'children___children___internal___description',
  Children___Children___Internal___FieldOwners = 'children___children___internal___fieldOwners',
  Children___Children___Internal___IgnoreType = 'children___children___internal___ignoreType',
  Children___Children___Internal___MediaType = 'children___children___internal___mediaType',
  Children___Children___Internal___Owner = 'children___children___internal___owner',
  Children___Children___Internal___Type = 'children___children___internal___type',
  Children___Internal___Content = 'children___internal___content',
  Children___Internal___ContentDigest = 'children___internal___contentDigest',
  Children___Internal___Description = 'children___internal___description',
  Children___Internal___FieldOwners = 'children___internal___fieldOwners',
  Children___Internal___IgnoreType = 'children___internal___ignoreType',
  Children___Internal___MediaType = 'children___internal___mediaType',
  Children___Internal___Owner = 'children___internal___owner',
  Children___Internal___Type = 'children___internal___type',
  Internal___Content = 'internal___content',
  Internal___ContentDigest = 'internal___contentDigest',
  Internal___Description = 'internal___description',
  Internal___FieldOwners = 'internal___fieldOwners',
  Internal___IgnoreType = 'internal___ignoreType',
  Internal___MediaType = 'internal___mediaType',
  Internal___Owner = 'internal___owner',
  Internal___Type = 'internal___type',
  Path = 'path',
  JsonName = 'jsonName',
  InternalComponentName = 'internalComponentName',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  Context___Slug = 'context___slug',
  PluginCreator___Id = 'pluginCreator___id',
  PluginCreator___Parent___Id = 'pluginCreator___parent___id',
  PluginCreator___Parent___Parent___Id = 'pluginCreator___parent___parent___id',
  PluginCreator___Parent___Parent___Children = 'pluginCreator___parent___parent___children',
  PluginCreator___Parent___Children = 'pluginCreator___parent___children',
  PluginCreator___Parent___Children___Id = 'pluginCreator___parent___children___id',
  PluginCreator___Parent___Children___Children = 'pluginCreator___parent___children___children',
  PluginCreator___Parent___Internal___Content = 'pluginCreator___parent___internal___content',
  PluginCreator___Parent___Internal___ContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreator___Parent___Internal___Description = 'pluginCreator___parent___internal___description',
  PluginCreator___Parent___Internal___FieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreator___Parent___Internal___IgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreator___Parent___Internal___MediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreator___Parent___Internal___Owner = 'pluginCreator___parent___internal___owner',
  PluginCreator___Parent___Internal___Type = 'pluginCreator___parent___internal___type',
  PluginCreator___Children = 'pluginCreator___children',
  PluginCreator___Children___Id = 'pluginCreator___children___id',
  PluginCreator___Children___Parent___Id = 'pluginCreator___children___parent___id',
  PluginCreator___Children___Parent___Children = 'pluginCreator___children___parent___children',
  PluginCreator___Children___Children = 'pluginCreator___children___children',
  PluginCreator___Children___Children___Id = 'pluginCreator___children___children___id',
  PluginCreator___Children___Children___Children = 'pluginCreator___children___children___children',
  PluginCreator___Children___Internal___Content = 'pluginCreator___children___internal___content',
  PluginCreator___Children___Internal___ContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreator___Children___Internal___Description = 'pluginCreator___children___internal___description',
  PluginCreator___Children___Internal___FieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreator___Children___Internal___IgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreator___Children___Internal___MediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreator___Children___Internal___Owner = 'pluginCreator___children___internal___owner',
  PluginCreator___Children___Internal___Type = 'pluginCreator___children___internal___type',
  PluginCreator___Internal___Content = 'pluginCreator___internal___content',
  PluginCreator___Internal___ContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreator___Internal___Description = 'pluginCreator___internal___description',
  PluginCreator___Internal___FieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreator___Internal___IgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreator___Internal___MediaType = 'pluginCreator___internal___mediaType',
  PluginCreator___Internal___Owner = 'pluginCreator___internal___owner',
  PluginCreator___Internal___Type = 'pluginCreator___internal___type',
  PluginCreator___Resolve = 'pluginCreator___resolve',
  PluginCreator___Name = 'pluginCreator___name',
  PluginCreator___Version = 'pluginCreator___version',
  PluginCreator___PluginOptions___TrackingId = 'pluginCreator___pluginOptions___trackingId',
  PluginCreator___PluginOptions___Anonymize = 'pluginCreator___pluginOptions___anonymize',
  PluginCreator___PluginOptions___PathToConfigModule = 'pluginCreator___pluginOptions___pathToConfigModule',
  PluginCreator___PluginOptions___Name = 'pluginCreator___pluginOptions___name',
  PluginCreator___PluginOptions___Path = 'pluginCreator___pluginOptions___path',
  PluginCreator___PluginOptions___SiteUrl = 'pluginCreator___pluginOptions___siteUrl',
  PluginCreator___PluginOptions___NoTrailingSlash = 'pluginCreator___pluginOptions___noTrailingSlash',
  PluginCreator___PluginOptions___Short_Name = 'pluginCreator___pluginOptions___short_name',
  PluginCreator___PluginOptions___Start_Url = 'pluginCreator___pluginOptions___start_url',
  PluginCreator___PluginOptions___Background_Color = 'pluginCreator___pluginOptions___background_color',
  PluginCreator___PluginOptions___Icon = 'pluginCreator___pluginOptions___icon',
  PluginCreator___PluginOptions___PathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreator___NodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreator___BrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreator___SsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreator___PluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreator___PackageJson___Name = 'pluginCreator___packageJson___name',
  PluginCreator___PackageJson___Description = 'pluginCreator___packageJson___description',
  PluginCreator___PackageJson___Version = 'pluginCreator___packageJson___version',
  PluginCreator___PackageJson___Main = 'pluginCreator___packageJson___main',
  PluginCreator___PackageJson___Author = 'pluginCreator___packageJson___author',
  PluginCreator___PackageJson___License = 'pluginCreator___packageJson___license',
  PluginCreator___PackageJson___Dependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreator___PackageJson___Dependencies___Name = 'pluginCreator___packageJson___dependencies___name',
  PluginCreator___PackageJson___Dependencies___Version = 'pluginCreator___packageJson___dependencies___version',
  PluginCreator___PackageJson___DevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreator___PackageJson___DevDependencies___Name = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreator___PackageJson___DevDependencies___Version = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreator___PackageJson___PeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreator___PackageJson___PeerDependencies___Name = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreator___PackageJson___PeerDependencies___Version = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreator___PackageJson___Keywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
}

export type SitePageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  path?: Maybe<StringQueryOperatorInput>
  jsonName?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  context?: Maybe<SitePageContextFilterInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
  componentPath?: Maybe<StringQueryOperatorInput>
}

export type SitePageGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  resolve?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  pluginOptions?: Maybe<SitePluginPluginOptions>
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  pluginFilepath?: Maybe<Scalars['String']>
  packageJson?: Maybe<SitePluginPackageJson>
}

export type SitePluginConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SitePluginGroupConnection>
}

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>
  node: SitePlugin
  previous?: Maybe<SitePlugin>
}

export enum SitePluginFieldsEnum {
  Id = 'id',
  Parent___Id = 'parent___id',
  Parent___Parent___Id = 'parent___parent___id',
  Parent___Parent___Parent___Id = 'parent___parent___parent___id',
  Parent___Parent___Parent___Children = 'parent___parent___parent___children',
  Parent___Parent___Children = 'parent___parent___children',
  Parent___Parent___Children___Id = 'parent___parent___children___id',
  Parent___Parent___Children___Children = 'parent___parent___children___children',
  Parent___Parent___Internal___Content = 'parent___parent___internal___content',
  Parent___Parent___Internal___ContentDigest = 'parent___parent___internal___contentDigest',
  Parent___Parent___Internal___Description = 'parent___parent___internal___description',
  Parent___Parent___Internal___FieldOwners = 'parent___parent___internal___fieldOwners',
  Parent___Parent___Internal___IgnoreType = 'parent___parent___internal___ignoreType',
  Parent___Parent___Internal___MediaType = 'parent___parent___internal___mediaType',
  Parent___Parent___Internal___Owner = 'parent___parent___internal___owner',
  Parent___Parent___Internal___Type = 'parent___parent___internal___type',
  Parent___Children = 'parent___children',
  Parent___Children___Id = 'parent___children___id',
  Parent___Children___Parent___Id = 'parent___children___parent___id',
  Parent___Children___Parent___Children = 'parent___children___parent___children',
  Parent___Children___Children = 'parent___children___children',
  Parent___Children___Children___Id = 'parent___children___children___id',
  Parent___Children___Children___Children = 'parent___children___children___children',
  Parent___Children___Internal___Content = 'parent___children___internal___content',
  Parent___Children___Internal___ContentDigest = 'parent___children___internal___contentDigest',
  Parent___Children___Internal___Description = 'parent___children___internal___description',
  Parent___Children___Internal___FieldOwners = 'parent___children___internal___fieldOwners',
  Parent___Children___Internal___IgnoreType = 'parent___children___internal___ignoreType',
  Parent___Children___Internal___MediaType = 'parent___children___internal___mediaType',
  Parent___Children___Internal___Owner = 'parent___children___internal___owner',
  Parent___Children___Internal___Type = 'parent___children___internal___type',
  Parent___Internal___Content = 'parent___internal___content',
  Parent___Internal___ContentDigest = 'parent___internal___contentDigest',
  Parent___Internal___Description = 'parent___internal___description',
  Parent___Internal___FieldOwners = 'parent___internal___fieldOwners',
  Parent___Internal___IgnoreType = 'parent___internal___ignoreType',
  Parent___Internal___MediaType = 'parent___internal___mediaType',
  Parent___Internal___Owner = 'parent___internal___owner',
  Parent___Internal___Type = 'parent___internal___type',
  Children = 'children',
  Children___Id = 'children___id',
  Children___Parent___Id = 'children___parent___id',
  Children___Parent___Parent___Id = 'children___parent___parent___id',
  Children___Parent___Parent___Children = 'children___parent___parent___children',
  Children___Parent___Children = 'children___parent___children',
  Children___Parent___Children___Id = 'children___parent___children___id',
  Children___Parent___Children___Children = 'children___parent___children___children',
  Children___Parent___Internal___Content = 'children___parent___internal___content',
  Children___Parent___Internal___ContentDigest = 'children___parent___internal___contentDigest',
  Children___Parent___Internal___Description = 'children___parent___internal___description',
  Children___Parent___Internal___FieldOwners = 'children___parent___internal___fieldOwners',
  Children___Parent___Internal___IgnoreType = 'children___parent___internal___ignoreType',
  Children___Parent___Internal___MediaType = 'children___parent___internal___mediaType',
  Children___Parent___Internal___Owner = 'children___parent___internal___owner',
  Children___Parent___Internal___Type = 'children___parent___internal___type',
  Children___Children = 'children___children',
  Children___Children___Id = 'children___children___id',
  Children___Children___Parent___Id = 'children___children___parent___id',
  Children___Children___Parent___Children = 'children___children___parent___children',
  Children___Children___Children = 'children___children___children',
  Children___Children___Children___Id = 'children___children___children___id',
  Children___Children___Children___Children = 'children___children___children___children',
  Children___Children___Internal___Content = 'children___children___internal___content',
  Children___Children___Internal___ContentDigest = 'children___children___internal___contentDigest',
  Children___Children___Internal___Description = 'children___children___internal___description',
  Children___Children___Internal___FieldOwners = 'children___children___internal___fieldOwners',
  Children___Children___Internal___IgnoreType = 'children___children___internal___ignoreType',
  Children___Children___Internal___MediaType = 'children___children___internal___mediaType',
  Children___Children___Internal___Owner = 'children___children___internal___owner',
  Children___Children___Internal___Type = 'children___children___internal___type',
  Children___Internal___Content = 'children___internal___content',
  Children___Internal___ContentDigest = 'children___internal___contentDigest',
  Children___Internal___Description = 'children___internal___description',
  Children___Internal___FieldOwners = 'children___internal___fieldOwners',
  Children___Internal___IgnoreType = 'children___internal___ignoreType',
  Children___Internal___MediaType = 'children___internal___mediaType',
  Children___Internal___Owner = 'children___internal___owner',
  Children___Internal___Type = 'children___internal___type',
  Internal___Content = 'internal___content',
  Internal___ContentDigest = 'internal___contentDigest',
  Internal___Description = 'internal___description',
  Internal___FieldOwners = 'internal___fieldOwners',
  Internal___IgnoreType = 'internal___ignoreType',
  Internal___MediaType = 'internal___mediaType',
  Internal___Owner = 'internal___owner',
  Internal___Type = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptions___TrackingId = 'pluginOptions___trackingId',
  PluginOptions___Anonymize = 'pluginOptions___anonymize',
  PluginOptions___PathToConfigModule = 'pluginOptions___pathToConfigModule',
  PluginOptions___Name = 'pluginOptions___name',
  PluginOptions___Path = 'pluginOptions___path',
  PluginOptions___SiteUrl = 'pluginOptions___siteUrl',
  PluginOptions___NoTrailingSlash = 'pluginOptions___noTrailingSlash',
  PluginOptions___Short_Name = 'pluginOptions___short_name',
  PluginOptions___Start_Url = 'pluginOptions___start_url',
  PluginOptions___Background_Color = 'pluginOptions___background_color',
  PluginOptions___Icon = 'pluginOptions___icon',
  PluginOptions___PathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJson___Name = 'packageJson___name',
  PackageJson___Description = 'packageJson___description',
  PackageJson___Version = 'packageJson___version',
  PackageJson___Main = 'packageJson___main',
  PackageJson___Author = 'packageJson___author',
  PackageJson___License = 'packageJson___license',
  PackageJson___Dependencies = 'packageJson___dependencies',
  PackageJson___Dependencies___Name = 'packageJson___dependencies___name',
  PackageJson___Dependencies___Version = 'packageJson___dependencies___version',
  PackageJson___DevDependencies = 'packageJson___devDependencies',
  PackageJson___DevDependencies___Name = 'packageJson___devDependencies___name',
  PackageJson___DevDependencies___Version = 'packageJson___devDependencies___version',
  PackageJson___PeerDependencies = 'packageJson___peerDependencies',
  PackageJson___PeerDependencies___Name = 'packageJson___peerDependencies___name',
  PackageJson___PeerDependencies___Version = 'packageJson___peerDependencies___version',
  PackageJson___Keywords = 'packageJson___keywords',
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  main?: Maybe<Scalars['String']>
  author?: Maybe<Scalars['String']>
  license?: Maybe<Scalars['String']>
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>
}

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>
}

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  main?: Maybe<StringQueryOperatorInput>
  author?: Maybe<StringQueryOperatorInput>
  license?: Maybe<StringQueryOperatorInput>
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>
  keywords?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>
}

export type SitePluginPluginOptions = {
  trackingId?: Maybe<Scalars['String']>
  anonymize?: Maybe<Scalars['Boolean']>
  pathToConfigModule?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  path?: Maybe<Scalars['String']>
  siteUrl?: Maybe<Scalars['String']>
  noTrailingSlash?: Maybe<Scalars['Boolean']>
  short_name?: Maybe<Scalars['String']>
  start_url?: Maybe<Scalars['String']>
  background_color?: Maybe<Scalars['String']>
  icon?: Maybe<Scalars['String']>
  pathCheck?: Maybe<Scalars['Boolean']>
}

export type SitePluginPluginOptionsFilterInput = {
  trackingId?: Maybe<StringQueryOperatorInput>
  anonymize?: Maybe<BooleanQueryOperatorInput>
  pathToConfigModule?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  siteUrl?: Maybe<StringQueryOperatorInput>
  noTrailingSlash?: Maybe<BooleanQueryOperatorInput>
  short_name?: Maybe<StringQueryOperatorInput>
  start_url?: Maybe<StringQueryOperatorInput>
  background_color?: Maybe<StringQueryOperatorInput>
  icon?: Maybe<StringQueryOperatorInput>
  pathCheck?: Maybe<BooleanQueryOperatorInput>
}

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
  siteTitle?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  twitter?: Maybe<Scalars['String']>
}

export type SiteSiteMetadataFilterInput = {
  siteTitle?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  twitter?: Maybe<StringQueryOperatorInput>
}

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>
  ne?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  nin?: Maybe<Array<Maybe<Scalars['String']>>>
  regex?: Maybe<Scalars['String']>
  glob?: Maybe<Scalars['String']>
}

export type WordCount = {
  paragraphs?: Maybe<Scalars['Int']>
  sentences?: Maybe<Scalars['Int']>
  words?: Maybe<Scalars['Int']>
}

export type WordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>
  sentences?: Maybe<IntQueryOperatorInput>
  words?: Maybe<IntQueryOperatorInput>
}
export type GatsbyImageSharpFixedFragment = {
  __typename?: 'ImageSharpFixed'
} & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>

export type GatsbyImageSharpFixed_TracedSvgFragment = {
  __typename?: 'ImageSharpFixed'
} & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>

export type GatsbyImageSharpFixed_WithWebpFragment = {
  __typename?: 'ImageSharpFixed'
} & Pick<
  ImageSharpFixed,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpFixed'
} & Pick<
  ImageSharpFixed,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpFixed_NoBase64Fragment = {
  __typename?: 'ImageSharpFixed'
} & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpFixed'
} & Pick<
  ImageSharpFixed,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpFluidFragment = {
  __typename?: 'ImageSharpFluid'
} & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>

export type GatsbyImageSharpFluid_TracedSvgFragment = {
  __typename?: 'ImageSharpFluid'
} & Pick<
  ImageSharpFluid,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyImageSharpFluid_WithWebpFragment = {
  __typename?: 'ImageSharpFluid'
} & Pick<
  ImageSharpFluid,
  | 'base64'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpFluid'
} & Pick<
  ImageSharpFluid,
  | 'tracedSVG'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>

export type GatsbyImageSharpFluid_NoBase64Fragment = {
  __typename?: 'ImageSharpFluid'
} & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpFluid'
} & Pick<
  ImageSharpFluid,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>

export type GatsbyImageSharpResolutionsFragment = {
  __typename?: 'ImageSharpResolutions'
} & Pick<
  ImageSharpResolutions,
  'base64' | 'width' | 'height' | 'src' | 'srcSet'
>

export type GatsbyImageSharpResolutions_TracedSvgFragment = {
  __typename?: 'ImageSharpResolutions'
} & Pick<
  ImageSharpResolutions,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
>

export type GatsbyImageSharpResolutions_WithWebpFragment = {
  __typename?: 'ImageSharpResolutions'
} & Pick<
  ImageSharpResolutions,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpResolutions'
} & Pick<
  ImageSharpResolutions,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpResolutions_NoBase64Fragment = {
  __typename?: 'ImageSharpResolutions'
} & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpResolutions'
} & Pick<
  ImageSharpResolutions,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpSizesFragment = {
  __typename?: 'ImageSharpSizes'
} & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>

export type GatsbyImageSharpSizes_TracedSvgFragment = {
  __typename?: 'ImageSharpSizes'
} & Pick<
  ImageSharpSizes,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyImageSharpSizes_WithWebpFragment = {
  __typename?: 'ImageSharpSizes'
} & Pick<
  ImageSharpSizes,
  | 'base64'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpSizes'
} & Pick<
  ImageSharpSizes,
  | 'tracedSVG'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>

export type GatsbyImageSharpSizes_NoBase64Fragment = {
  __typename?: 'ImageSharpSizes'
} & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpSizes'
} & Pick<
  ImageSharpSizes,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>

export type HeadQueryVariables = {}

export type HeadQuery = { __typename?: 'Query' } & {
  site: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata: Maybe<
        { __typename?: 'SiteSiteMetadata' } & Pick<
          SiteSiteMetadata,
          'siteTitle' | 'description' | 'twitter'
        >
      >
    }
  >
}

export type PortraitPickerQueryVariables = {}

export type PortraitPickerQuery = { __typename?: 'Query' } & {
  allFile: Maybe<
    { __typename?: 'FileConnection' } & {
      edges: Array<
        { __typename?: 'FileEdge' } & {
          node: { __typename?: 'File' } & {
            childImageSharp: Maybe<
              { __typename?: 'ImageSharp' } & {
                fluid: Maybe<
                  {
                    __typename?: 'ImageSharpFluid'
                  } & GatsbyImageSharpFluid_WithWebp_NoBase64Fragment
                >
              }
            >
          }
        }
      >
    }
  >
}

export type Unnamed_1_QueryVariables = {
  slug: Scalars['String']
}

export type Unnamed_1_Query = { __typename?: 'Query' } & {
  markdownRemark: Maybe<
    { __typename?: 'MarkdownRemark' } & Pick<MarkdownRemark, 'html'> & {
        frontmatter: Maybe<
          { __typename?: 'MarkdownRemarkFrontmatter' } & Pick<
            MarkdownRemarkFrontmatter,
            'title'
          >
        >
      }
  >
}

export type DowntimeQueryVariables = {}

export type DowntimeQuery = { __typename?: 'Query' } & {
  markdownRemark: Maybe<
    { __typename?: 'MarkdownRemark' } & Pick<MarkdownRemark, 'html'>
  >
}

export type IndexQueryVariables = {}

export type IndexQuery = { __typename?: 'Query' } & {
  markdownRemark: Maybe<
    { __typename?: 'MarkdownRemark' } & Pick<MarkdownRemark, 'htmlAst'>
  >
  projects: Maybe<
    { __typename?: 'MarkdownRemarkConnection' } & {
      edges: Array<
        { __typename?: 'MarkdownRemarkEdge' } & {
          node: { __typename?: 'MarkdownRemark' } & Pick<
            MarkdownRemark,
            'htmlAst'
          > & {
              frontmatter: Maybe<
                { __typename?: 'MarkdownRemarkFrontmatter' } & Pick<
                  MarkdownRemarkFrontmatter,
                  | 'hidden'
                  | 'title'
                  | 'organization'
                  | 'dates'
                  | 'link'
                  | 'githubLink'
                  | 'role'
                  | 'technologies'
                > & {
                    image: Maybe<
                      { __typename?: 'File' } & {
                        childImageSharp: Maybe<
                          { __typename?: 'ImageSharp' } & {
                            fluid: Maybe<
                              {
                                __typename?: 'ImageSharpFluid'
                              } & GatsbyImageSharpFluid_WithWebpFragment
                            >
                            fixed: Maybe<
                              {
                                __typename?: 'ImageSharpFixed'
                              } & GatsbyImageSharpFixed_WithWebpFragment
                            >
                          }
                        >
                      }
                    >
                  }
              >
            }
        }
      >
    }
  >
}

export type PostsQueryQueryVariables = {}

export type PostsQueryQuery = { __typename?: 'Query' } & {
  posts: Maybe<
    { __typename?: 'MarkdownRemarkConnection' } & {
      edges: Array<
        { __typename?: 'MarkdownRemarkEdge' } & {
          node: { __typename?: 'MarkdownRemark' } & Pick<
            MarkdownRemark,
            'id'
          > & {
              frontmatter: Maybe<
                { __typename?: 'MarkdownRemarkFrontmatter' } & Pick<
                  MarkdownRemarkFrontmatter,
                  'title'
                >
              >
              fields: Maybe<
                { __typename?: 'MarkdownRemarkFields' } & Pick<
                  MarkdownRemarkFields,
                  'slug'
                >
              >
            }
        }
      >
    }
  >
}
