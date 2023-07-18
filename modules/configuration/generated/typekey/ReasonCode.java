package typekey;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ReasonCode.tti;ReasonCode.tix;ReasonCode.ttx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
public class ReasonCode implements gw.entity.TypeKey {
  /**
   * Cancellation of underlying insurance
   * Cancellation of underlying insurance
   */
  public static final typekey.ReasonCode TC_CANCEL = new typekey.ReasonCode("cancel");
  
  /**
   * Condemned/unsafe
   * Condemned/unsafe
   */
  public static final typekey.ReasonCode TC_CONDEMN = new typekey.ReasonCode("condemn");
  
  /**
   * Requested coverages/limits not available
   * Requested coverages/limits not available
   */
  public static final typekey.ReasonCode TC_COVSNOTAVAILABLE = new typekey.ReasonCode("CovsNotAvailable");
  
  /**
   * Criminal conduct by the insured
   * Criminal conduct by the insured
   */
  public static final typekey.ReasonCode TC_CRIMINAL = new typekey.ReasonCode("criminal");
  
  /**
   * No longer eligible for group or program
   * No longer eligible for group or program
   */
  public static final typekey.ReasonCode TC_ELIGIBILITY = new typekey.ReasonCode("eligibility");
  
  /**
   * Failure to cooperate
   * Failure to cooperate
   */
  public static final typekey.ReasonCode TC_FAILCOOP = new typekey.ReasonCode("failcoop");
  
  /**
   * Failure to comply with safety recommendations
   * Failure to comply with safety recommendations
   */
  public static final typekey.ReasonCode TC_FAILSAFE = new typekey.ReasonCode("failsafe");
  
  /**
   * Failure to comply with terms and conditions
   * Failure to comply with terms and conditions
   */
  public static final typekey.ReasonCode TC_FAILTERM = new typekey.ReasonCode("failterm");
  
  /**
   * Insured's request - (finance co. nonpay)
   * Insured's request - (Finance co. nonpay)
   */
  public static final typekey.ReasonCode TC_FINCONONPAY = new typekey.ReasonCode("fincononpay");
  
  /**
   * Policy rewritten or replaced (flat cancel)
   * Policy rewritten or replaced (flat cancel)
   */
  public static final typekey.ReasonCode TC_FLATREWRITE = new typekey.ReasonCode("flatrewrite");
  
  /**
   * Fraud
   * Fraud
   */
  public static final typekey.ReasonCode TC_FRAUD = new typekey.ReasonCode("fraud");
  
  /**
   * Required information not provided
   * Required information not provided
   */
  public static final typekey.ReasonCode TC_INFONOTPROVIDED = new typekey.ReasonCode("InfoNotProvided");
  
  /**
   * Loss history
   * Loss history
   */
  public static final typekey.ReasonCode TC_LOSSHISTORY = new typekey.ReasonCode("LossHistory");
  
  /**
   * Policy rewritten (mid-term)
   * Policy rewritten (mid-term)
   */
  public static final typekey.ReasonCode TC_MIDTERMREWRITE = new typekey.ReasonCode("midtermrewrite");
  
  /**
   * Insured's request - N.O.C
   * Insured's request - N.O.C
   */
  public static final typekey.ReasonCode TC_NOC = new typekey.ReasonCode("noc");
  
  /**
   * No employees/operations
   * No employees/operations
   */
  public static final typekey.ReasonCode TC_NOEMPLOYEE = new typekey.ReasonCode("noemployee");
  
  /**
   * Non disclosure of losses or underwriting information
   * Non disclosure of losses or underwriting information
   */
  public static final typekey.ReasonCode TC_NONDISCLOSE = new typekey.ReasonCode("nondisclose");
  
  /**
   * Non-payment
   * Payment not received
   */
  public static final typekey.ReasonCode TC_NONPAYMENT = new typekey.ReasonCode("nonpayment");
  
  /**
   * Non-report of payroll or failure to cooperate
   * Non-report of payroll or failure to cooperate
   */
  public static final typekey.ReasonCode TC_NONREPORT = new typekey.ReasonCode("nonreport");
  
  /**
   * Policy not-taken
   * Policy not-taken
   */
  public static final typekey.ReasonCode TC_NOTTAKEN = new typekey.ReasonCode("nottaken");
  
  /**
   * Operations characteristics
   * Operations characteristics
   */
  public static final typekey.ReasonCode TC_OPSCHARS = new typekey.ReasonCode("OpsChars");
  
  /**
   * Payment history
   * Payment history
   */
  public static final typekey.ReasonCode TC_PAYMENTHISTORY = new typekey.ReasonCode("PaymentHistory");
  
  /**
   * Does not meet program/product requirements
   * Does not meet program/product requirements
   */
  public static final typekey.ReasonCode TC_PRODREQUIREMENTS = new typekey.ReasonCode("ProdRequirements");
  
  /**
   * Products characteristics
   * Products characteristics
   */
  public static final typekey.ReasonCode TC_PRODUCTSCHARS = new typekey.ReasonCode("ProductsChars");
  
  /**
   * Loss of reinsurance
   * Loss of reinsurance
   */
  public static final typekey.ReasonCode TC_REINSURANCE = new typekey.ReasonCode("reinsurance");
  
  /**
   * Substantial change in risk or increase in hazard
   * Substantial change in risk or increase in hazard
   */
  public static final typekey.ReasonCode TC_RISKCHANGE = new typekey.ReasonCode("riskchange");
  
  /**
   * Out of business/sold
   * Out of business/sold
   */
  public static final typekey.ReasonCode TC_SOLD = new typekey.ReasonCode("sold");
  
  /**
   * Suspension or revocation of license or permits
   * Suspension or revocation of license or permits
   */
  public static final typekey.ReasonCode TC_SUSPENSION = new typekey.ReasonCode("suspension");
  
  /**
   * Unresolved Contingency
   * Unresolved Contingency
   */
  public static final typekey.ReasonCode TC_UNRESOLVEDCONTINGENCY = new typekey.ReasonCode("unresolvedcontingency");
  
  /**
   * Underwriting reasons
   * Underwriting reasons
   */
  public static final typekey.ReasonCode TC_UWREASONS = new typekey.ReasonCode("uwreasons");
  
  /**
   * Vacant; below occupancy limit
   * Vacant; below occupancy limit
   */
  public static final typekey.ReasonCode TC_VACANT = new typekey.ReasonCode("vacant");
  
  /**
   * Violation of health, safety, fire, or codes
   * Violation of health, safety, fire, or codes
   */
  public static final typekey.ReasonCode TC_VIOLATION = new typekey.ReasonCode("violation");
  
  /**
   * Participation in wrap-up complete
   * Participation in wrap-up complete
   */
  public static final typekey.ReasonCode TC_WRAPUP = new typekey.ReasonCode("wrapup");
  
  public static final gw.pl.persistence.type.TypeListTypeReference<typekey.ReasonCode> TYPE = new com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache<typekey.ReasonCode>("ReasonCode");
  
  private final com.guidewire.commons.typelist.TypeKeyImplManager _typeKeyImplManager;
  
  private ReasonCode(java.lang.String code)  {
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
  public typekey.ReasonCode get() {
    return this;
  }
  
  public static typekey.ReasonCode get(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  public static java.util.List<typekey.ReasonCode> getAllTypeKeys() {
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
  
  public static typekey.ReasonCode getTypeKey(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  /**
   * All of the typekeys in this list, including retired typekeys.
   * @deprecated Use getTypeKeys(boolean)
   */
  @java.lang.Deprecated
  public static typekey.ReasonCode[] getTypeKeys() {
    return TYPE.get().getTypeKeys(true).toArray(new typekey.ReasonCode[]{});
  }
  
  public static java.util.List<typekey.ReasonCode> getTypeKeys(boolean includeRetired) {
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
  
  public typekey.ReasonCode getValue() {
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
    com.guidewire._generated.typekey.ReasonCodeInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.TypeKeyFriendAccess<typekey.ReasonCode>() {
      public void clearCache(typekey.ReasonCode typeKey) {
        typeKey._typeKeyImplManager.resetTypeKeyImpl();
      }
      
      public com.guidewire.commons.entity.type2.TypeKeyInternal getInternalInterface(typekey.ReasonCode typeKey) {
        return typeKey._typeKeyImplManager.getTypeKeyImpl();
      }
      
      public typekey.ReasonCode newInstance(java.lang.String code) {
        return new typekey.ReasonCode(code);
      }
      
      
    });
  }
}