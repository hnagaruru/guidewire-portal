package typekey;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RiskAssessmentError.tti;RiskAssessmentError.tix;RiskAssessmentError.ttx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
public class RiskAssessmentError implements gw.entity.TypeKey {
  /**
   * Error Contacting Parameter Service
   * Error contacting Spotlight Interactive parameter service
   */
  public static final typekey.RiskAssessmentError TC_ERRORCONTACTINGPARAMETERSERVICE = new typekey.RiskAssessmentError("ErrorContactingParameterService");
  
  /**
   * Error for unexpected location
   * Error was returned for a location that was not requested
   */
  public static final typekey.RiskAssessmentError TC_ERRORFORUNEXPECTEDLOCATION = new typekey.RiskAssessmentError("ErrorForUnexpectedLocation");
  
  /**
   * Http Bad Request
   * Risk assessment service reported bad http request
   */
  public static final typekey.RiskAssessmentError TC_HTTPBADREQUEST = new typekey.RiskAssessmentError("HttpBadRequest");
  
  /**
   * Invalid Json
   * Invalid Json
   */
  public static final typekey.RiskAssessmentError TC_INVALIDJSON = new typekey.RiskAssessmentError("InvalidJson");
  
  /**
   * Invalid Location Geocodeable Address - Could Not Geocode
   * The address sent to Risk Assessment could not be parsed
   */
  public static final typekey.RiskAssessmentError TC_INVALIDLOCATIONGEOCODEABLEADDRESS_COULDNOTGEOCODE = new typekey.RiskAssessmentError("InvalidLocationGeocodeableAddress-CouldNotGeocode");
  
  /**
   * Invalid Location Coordinates - Latitude or Longitude Invalid
   * Invalid location latitude
   */
  public static final typekey.RiskAssessmentError TC_INVALIDLOCATION_COORDINATESINVALID = new typekey.RiskAssessmentError("InvalidLocation-CoordinatesInvalid");
  
  /**
   * Invalid Location - Coordinates Or Address Required
   * There was no address or lat long sent to Risk Assessment
   */
  public static final typekey.RiskAssessmentError TC_INVALIDLOCATION_COORDINATESORADDRESSREQUIRED = new typekey.RiskAssessmentError("InvalidLocation-CoordinatesOrAddressRequired");
  
  /**
   * Invalid Location Policy System Id Required
   * A public ID was not sent to the risk assessment.
   */
  public static final typekey.RiskAssessmentError TC_INVALIDLOCATION_POLICYSYSTEMIDREQUIRED = new typekey.RiskAssessmentError("InvalidLocation-PolicySystemIdRequired");
  
  /**
   * Lacks Multiple Location Risk Assessment Permission
   * Insufficient permissions to make multiple location risk assessment requests
   */
  public static final typekey.RiskAssessmentError TC_LACKSMULTIPLELOCATIONRISKASSESSMENTPERMISSION = new typekey.RiskAssessmentError("LacksMultipleLocationRiskAssessmentPermission");
  
  /**
   * Lacks Single Location Risk Assessment Permission
   * Insufficient permissions to make single location risk assessment requests
   */
  public static final typekey.RiskAssessmentError TC_LACKSSINGLELOCATIONRISKASSESSMENTPERMISSION = new typekey.RiskAssessmentError("LacksSingleLocationRiskAssessmentPermission");
  
  /**
   * Location Required
   */
  public static final typekey.RiskAssessmentError TC_LOCATIONREQUIRED = new typekey.RiskAssessmentError("LocationRequired");
  
  /**
   * No Response Entity From Risk Assessment Service
   * No response entity received from risk assessment service
   */
  public static final typekey.RiskAssessmentError TC_NORESPONSEENTITYFROMRISKASSESSMENTSERVICE = new typekey.RiskAssessmentError("NoResponseEntityFromRiskAssessmentService");
  
  /**
   * No Selected Location
   * Spotlight interactive there was no pin or selected location
   */
  public static final typekey.RiskAssessmentError TC_NOSELECTEDLOCATION = new typekey.RiskAssessmentError("NoSelectedLocation");
  
  /**
   * Risk Profile Code Required
   * The risk assessment did not send a risk profile code
   */
  public static final typekey.RiskAssessmentError TC_NOSELECTEDRISKPROFILE = new typekey.RiskAssessmentError("NoSelectedRiskProfile");
  
  /**
   * Risk Assessment Authentication Failed
   * Risk assessment service authentication failed
   */
  public static final typekey.RiskAssessmentError TC_RISKASSESSMENTAUTHENTICATIONFAILED = new typekey.RiskAssessmentError("RiskAssessmentAuthenticationFailed");
  
  /**
   * Risk Assessment Service Connection Refused
   * Connection to risk assessment service is refused
   */
  public static final typekey.RiskAssessmentError TC_RISKASSESSMENTSERVICECONNECTIONREFUSED = new typekey.RiskAssessmentError("RiskAssessmentServiceConnectionRefused");
  
  /**
   * Invalid Risk Profile Code
   * Risk profile Code was not recognized by Risk Assessment
   */
  public static final typekey.RiskAssessmentError TC_RISKPROFILECODEINVALID = new typekey.RiskAssessmentError("RiskProfileCodeInvalid");
  
  /**
   * Timeout Contacting Parameter Service
   * Timeout contacting Spotlight Interactive parameter service
   */
  public static final typekey.RiskAssessmentError TC_TIMEOUTCONTACTINGPARAMETERSERVICE = new typekey.RiskAssessmentError("TimeoutContactingParameterService");
  
  /**
   * Unable to parse JSON errors
   * Unable to parse JSON errors
   */
  public static final typekey.RiskAssessmentError TC_UNABLETOPARSEJSONERRORS = new typekey.RiskAssessmentError("UnableToParseJSONErrors");
  
  /**
   * Unkown Error Category
   * Risk assessment Error found but not configured with a known category
   */
  public static final typekey.RiskAssessmentError TC_UNKNOWNERRORCATEGORY = new typekey.RiskAssessmentError("UnknownErrorCategory");
  
  /**
   * Unknown Error Code
   * Unknown error code, code is not in this typelist
   */
  public static final typekey.RiskAssessmentError TC_UNKNOWNERRORCODE = new typekey.RiskAssessmentError("UnknownErrorCode");
  
  public static final gw.pl.persistence.type.TypeListTypeReference<typekey.RiskAssessmentError> TYPE = new com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache<typekey.RiskAssessmentError>("RiskAssessmentError");
  
  private final com.guidewire.commons.typelist.TypeKeyImplManager _typeKeyImplManager;
  
  private RiskAssessmentError(java.lang.String code)  {
    _typeKeyImplManager  =  com.guidewire.commons.typelist.TypeKeyImplManager.newInstance(this, code);
  }
  
  public int compareTo(gw.entity.TypeKey arg0) {
    return _typeKeyImplManager.getTypeKeyImpl().compareTo(arg0);
  }
  
  /**
   * 
   * @deprecated Use this object instead.
   */
  @java.lang.Deprecated
  public typekey.RiskAssessmentError get() {
    return this;
  }
  
  public static typekey.RiskAssessmentError get(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  public static java.util.List<typekey.RiskAssessmentError> getAllTypeKeys() {
    return TYPE.get().getTypeKeys(true);
  }
  
  /**
   * Returns the list of categories that this key belongs to
   * @return the categories that this key belongs to
   */
  public gw.entity.TypeKey[] getCategories() {
    return _typeKeyImplManager.getTypeKeyImpl().getCategories();
  }
  
  public java.lang.String getCode() {
    return _typeKeyImplManager.getCode();
  }
  
  /**
   * Returns the description for this typekey for the current locale.
   * @return the description for this typekey
   */
  public java.lang.String getDescription() {
    return _typeKeyImplManager.getTypeKeyImpl().getDescription();
  }
  
  /**
   * Returns the description of this typekey for the given locale.
   * @param locale the locale to use to get the description
   * @return a description for this typekey for the given locale
   */
  public java.lang.String getDescription(gw.i18n.ILocale locale) {
    return _typeKeyImplManager.getTypeKeyImpl().getDescription(locale);
  }
  
  public java.lang.String getDisplayName() {
    return _typeKeyImplManager.getTypeKeyImpl().getDisplayName();
  }
  
  /**
   * Returns the name of this typekey for the given locale.
   * @param locale 
   */
  public java.lang.String getDisplayName(gw.i18n.ILocale locale) {
    return _typeKeyImplManager.getTypeKeyImpl().getDisplayName(locale);
  }
  
  /**
   * Gets the entity type associated with this typekey, if any. Returns null if this is not a subtype typekey.
   */
  public gw.entity.IEntityType getEntityType() {
    return _typeKeyImplManager.getTypeKeyImpl().getEntityType();
  }
  
  /**
   * Returns the owning type for this key.
   * @return 
   */
  public gw.entity.ITypeList getIntrinsicType() {
    return _typeKeyImplManager.getTypeKeyImpl().getIntrinsicType();
  }
  
  /**
   * A string containing the typelist name.
   */
  public java.lang.String getListName() {
    return _typeKeyImplManager.getTypeKeyImpl().getListName();
  }
  
  /**
   * Returns the value of the "name" attribute for this typekey.
   * @return the name of this typekey
   * @deprecated Use {@link #getDisplayName()} or {@link #getUnlocalizedName()} instead, as appropriate.
   */
  @java.lang.Deprecated
  public java.lang.String getName() {
    return _typeKeyImplManager.getTypeKeyImpl().getName();
  }
  
  public int getOrdinal() {
    return _typeKeyImplManager.getTypeKeyImpl().getOrdinal();
  }
  
  /**
   * Returns the priority for this type key
   * @return the priority for this type key
   */
  public int getPriority() {
    return _typeKeyImplManager.getTypeKeyImpl().getPriority();
  }
  
  /**
   * Returns the sort order for this type key in the specified language.
   * @param locale 
   * @return the sort order for this type key
   */
  public int getSortOrder(gw.i18n.ILocale locale) {
    return _typeKeyImplManager.getTypeKeyImpl().getSortOrder(locale);
  }
  
  public static typekey.RiskAssessmentError getTypeKey(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  /**
   * All of the typekeys in this list, including retired typekeys.
   * @deprecated Use getTypeKeys(boolean)
   */
  @java.lang.Deprecated
  public static typekey.RiskAssessmentError[] getTypeKeys() {
    return TYPE.get().getTypeKeys(true).toArray(new typekey.RiskAssessmentError[]{});
  }
  
  public static java.util.List<typekey.RiskAssessmentError> getTypeKeys(boolean includeRetired) {
    return TYPE.get().getTypeKeys(includeRetired);
  }
  
  /**
   * Returns the (non-localized) description of this typekey. Generally should not be used by application code. To get a
   * displayable string, use {@link #getDescription()} instead.
   * @return the non-localized description of this typekey
   */
  public java.lang.String getUnlocalizedDescription() {
    return _typeKeyImplManager.getTypeKeyImpl().getUnlocalizedDescription();
  }
  
  /**
   * Returns the (non-localized) name of this typekey. Generally should not be used by application code. To get a
   * displayable string, use {@link #getDisplayName()} instead. To get a unique string identifier for this typekey,
   * use {@link #getCode()} instead.
   * @return the non-localized name of this typekey
   */
  public java.lang.String getUnlocalizedName() {
    return _typeKeyImplManager.getTypeKeyImpl().getUnlocalizedName();
  }
  
  public typekey.RiskAssessmentError getValue() {
    return this;
  }
  
  /**
   * Checks to see if this typekey has a category corresponding to the given
   * typekey.  For a match to be found, this typekey has to have a category
   * with the same typelist and code as the given typekey.
   * @param categoryToCheck 
   * @return 
   */
  public boolean hasCategory(gw.entity.TypeKey categoryToCheck) {
    return _typeKeyImplManager.getTypeKeyImpl().hasCategory(categoryToCheck);
  }
  
  /**
   * A boolean that indicates a type code is for internal use by Guidewire software. Internal type codes cannot be
   * removed or modified.
   */
  public boolean isInternal() {
    return _typeKeyImplManager.getTypeKeyImpl().isInternal();
  }
  
  /**
   * Returns true if this type key is retired.  Retired type keys will not show up in the UI.
   * @return true if this type key is retired false if not.
   */
  public boolean isRetired() {
    return _typeKeyImplManager.getTypeKeyImpl().isRetired();
  }
  
  private java.lang.Object readObject(java.io.ObjectInputStream in) throws java.io.InvalidObjectException {
    throw new java.io.InvalidObjectException("Proxy required");
  }
  
  public java.lang.String toString() {
    return getDisplayName();
  }
  
  private java.lang.Object writeReplace() {
    return new com.guidewire.commons.typelist.TypeKeySerializationProxy(this);
  }
  
  static {
    com.guidewire._generated.typekey.RiskAssessmentErrorInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.TypeKeyFriendAccess<typekey.RiskAssessmentError>() {
      public void clearCache(typekey.RiskAssessmentError typeKey) {
        typeKey._typeKeyImplManager.resetTypeKeyImpl();
      }
      
      public com.guidewire.commons.entity.type2.TypeKeyInternal getInternalInterface(typekey.RiskAssessmentError typeKey) {
        return typeKey._typeKeyImplManager.getTypeKeyImpl();
      }
      
      public typekey.RiskAssessmentError newInstance(java.lang.String code) {
        return new typekey.RiskAssessmentError(code);
      }
      
      
    });
  }
}