// ============================================================================
// Helper Definitions
// ============================================================================
export { EntryStatus, EntryStatuses } from './definations/helper/EntryStatus';
export { Limit } from './definations/helper/Limit';
export { IGeoLocation } from './definations/helper/GeoLocation';
export { IDatabaseEntry } from './definations/helper/DatabaseEntry';

// ============================================================================
// Scopes
// ============================================================================
export {
    Scope,
    Scopes,
    ScopeFlags,
    IFineGradedScopeContext,
    RequiredScopes,
    IFineGradedScope
} from './definations/Scopes';

// ============================================================================
// User Definitions
// ============================================================================
export { IUser, UserType, UserTypes } from './definations/User';
export { IUserContact } from './definations/UserContact';

// ============================================================================
// Customer Definitions
// ============================================================================
export {
	ICustomer,
	CustomerType,
	CustomerTypes,
	ISsoIdP,
	ICustomerLimits,
	ICustomerStatistics
} from './definations/Customer';

// ============================================================================
// CustomerObject Definitions
// ============================================================================
export {
	CustomerObject,
	ICustomerObjectLimits
} from './definations/CustomerObject';

// ============================================================================
// File Definitions
// ============================================================================
export {
	IFile,
	FileWithDownload,
	IFileType,
	IUploadFile,
	IFilePart,
	UploadFilePart,
	ICompleteFileUploadPart
} from './definations/File';

// ============================================================================
// JWT Token Definitions
// ============================================================================
export {
	TokenPayload,
	TokenType,
	IInviteToken,
	ISessionToken,
	IPasswordResetToken,
	IEmailOTPToken,
	IWebAuthnToken,
	IOIDCStateToken,
	IUploadToken,
	IFileToken
} from './definations/JWTToken';

// ============================================================================
// Default Response
// ============================================================================
export { IDefaultResponse } from './responses/helper/DefaultResponse';

// ============================================================================
// Search Response
// ============================================================================
export { ISearchResponse, ISearchStatisticsDto } from './responses/helper/SearchResponse';

// ============================================================================
// Authorisation Response
// ============================================================================
export {
	AuthMethod,
	AuthMethods,
	IAuthCheckMailResponse,
	IAuthSessionResponse,
	IAuthWebAuthnResponse
} from './responses/AuthorisationResponse';

// ============================================================================
// Body Types
// ============================================================================
export { CreateCustomerBody, UpdateCustomerBody } from './body/Customer';
export { CreateCustomerObject, UpdateCustomerObject } from './body/CustomerObject';
export { CreateUserBody, UpdateUserBody } from './body/User';
export { ICreateFileUploadBody, ICompleteFileUploadBody } from './body/File';

// ============================================================================
// Response Types
// ============================================================================
export {
	ICustomerEntities,
	CustomersResponse,
	CustomerResponse
} from './responses/Customer';

export {
	ICustomerObjectEntities,
	CustomersObjectResponse,
	CustomerObjectResponse
} from './responses/CustomerObject';

export {
	UsersResponse,
	UserResponse
} from './responses/User';

export {
	FileResponse,
	StartUploadFileResponse
} from './responses/File';
