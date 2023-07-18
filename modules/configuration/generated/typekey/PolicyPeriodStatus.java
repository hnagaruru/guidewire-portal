package typekey;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyPeriodStatus.tti;PolicyPeriodStatus.tix;PolicyPeriodStatus.ttx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
public class PolicyPeriodStatus implements gw.entity.TypeKey {
  /**
   * Completed
   * Audit is completed
   */
  public static final typekey.PolicyPeriodStatus TC_AUDITCOMPLETE = new typekey.PolicyPeriodStatus("AuditComplete");
  
  /**
   * Binding
   * Policy binding is in progress
   */
  public static final typekey.PolicyPeriodStatus TC_BINDING = new typekey.PolicyPeriodStatus("Binding");
  
  /**
   * Bound
   * Policy has been bound. Cancellation, Issuance, Reinstatement, Rewrite, RewriteNewAccount, Submission and PolicyChange jobs set this status
   */
  public static final typekey.PolicyPeriodStatus TC_BOUND = new typekey.PolicyPeriodStatus("Bound");
  
  /**
   * Canceling
   * Policy is being scheduled for cancellation
   */
  public static final typekey.PolicyPeriodStatus TC_CANCELING = new typekey.PolicyPeriodStatus("Canceling");
  
  /**
   * Declined
   * Policy has been declined by carrier
   */
  public static final typekey.PolicyPeriodStatus TC_DECLINED = new typekey.PolicyPeriodStatus("Declined");
  
  /**
   * Draft
   * Policy is editable. Audit, Cancellation, PolicyChange, Reinstatement, Rewrite and RewriteNewAccount jobs initially set this status
   */
  public static final typekey.PolicyPeriodStatus TC_DRAFT = new typekey.PolicyPeriodStatus("Draft");
  
  /**
   * Expired
   * Policy has timed out. Job expiration work queue sets this status
   */
  public static final typekey.PolicyPeriodStatus TC_EXPIRED = new typekey.PolicyPeriodStatus("Expired");
  
  /**
   * LegacyConversion
   * Policy is a Legacy SOR that is created for renewal conversion.
   */
  public static final typekey.PolicyPeriodStatus TC_LEGACYCONVERSION = new typekey.PolicyPeriodStatus("LegacyConversion");
  
  /**
   * New
   * Policy is brand new. Submission, Issuance and Renewal jobs initially set this status
   */
  public static final typekey.PolicyPeriodStatus TC_NEW = new typekey.PolicyPeriodStatus("New");
  
  /**
   * Non-renewed
   * Policy has been Non-Renewed
   */
  public static final typekey.PolicyPeriodStatus TC_NONRENEWED = new typekey.PolicyPeriodStatus("NonRenewed");
  
  /**
   * Non-renewing
   * Non-renewal for policy is being scheduled
   */
  public static final typekey.PolicyPeriodStatus TC_NONRENEWING = new typekey.PolicyPeriodStatus("NonRenewing");
  
  /**
   * Not-taken
   * Policy was not-taken
   */
  public static final typekey.PolicyPeriodStatus TC_NOTTAKEN = new typekey.PolicyPeriodStatus("NotTaken");
  
  /**
   * Not-taking
   * Policy is being processed for being not-taken
   */
  public static final typekey.PolicyPeriodStatus TC_NOTTAKING = new typekey.PolicyPeriodStatus("NotTaking");
  
  /**
   * Quoted
   * Policy has been quoted. Quote process sets this status when complete
   */
  public static final typekey.PolicyPeriodStatus TC_QUOTED = new typekey.PolicyPeriodStatus("Quoted");
  
  /**
   * Quote Requested
   * Policy has been queued to quote asynchronously. Quote process sets this status when asynchronous quoting is chosen
   */
  public static final typekey.PolicyPeriodStatus TC_QUOTEREQUESTED = new typekey.PolicyPeriodStatus("QuoteRequested");
  
  /**
   * Quoting
   * Policy is in the process of being quoted. Quote process initially sets this status
   */
  public static final typekey.PolicyPeriodStatus TC_QUOTING = new typekey.PolicyPeriodStatus("Quoting");
  
  /**
   * Rated
   * Policy has been rated. Quote process sets this status when rating is complete
   */
  public static final typekey.PolicyPeriodStatus TC_RATED = new typekey.PolicyPeriodStatus("Rated");
  
  /**
   * Rate Requested
   * Policy has been queued to rate asynchronously. Quote process sets this status when asynchronous rating is chosen
   */
  public static final typekey.PolicyPeriodStatus TC_RATEREQUESTED = new typekey.PolicyPeriodStatus("RateRequested");
  
  /**
   * Reinstating
   * Reinstatement process has started
   */
  public static final typekey.PolicyPeriodStatus TC_REINSTATING = new typekey.PolicyPeriodStatus("Reinstating");
  
  /**
   * Renewing
   * Renewal for policy is being scheduled
   */
  public static final typekey.PolicyPeriodStatus TC_RENEWING = new typekey.PolicyPeriodStatus("Renewing");
  
  /**
   * Rescinded
   * Cancellation has been rescinded
   */
  public static final typekey.PolicyPeriodStatus TC_RESCINDED = new typekey.PolicyPeriodStatus("Rescinded");
  
  /**
   * Rescinding
   * Cancellation rescinding process started
   */
  public static final typekey.PolicyPeriodStatus TC_RESCINDING = new typekey.PolicyPeriodStatus("Rescinding");
  
  /**
   * Temporary
   * Policy is in the process of being created
   */
  public static final typekey.PolicyPeriodStatus TC_TEMPORARY = new typekey.PolicyPeriodStatus("Temporary");
  
  /**
   * Waived
   * Audit was waived
   */
  public static final typekey.PolicyPeriodStatus TC_WAIVED = new typekey.PolicyPeriodStatus("Waived");
  
  /**
   * Withdrawn
   * Policy has been withdrawn by agent or insured
   */
  public static final typekey.PolicyPeriodStatus TC_WITHDRAWN = new typekey.PolicyPeriodStatus("Withdrawn");
  
  public static final gw.entity.ITypeFilter<typekey.PolicyPeriodStatus> TF_BOUNDAUDIT = new com.guidewire.commons.entity.type2.TypeFilterImpl<typekey.PolicyPeriodStatus>("PolicyPeriodStatus", "BoundAudit");
  
  public static final gw.entity.ITypeFilter<typekey.PolicyPeriodStatus> TF_CLOSED = new com.guidewire.commons.entity.type2.TypeFilterImpl<typekey.PolicyPeriodStatus>("PolicyPeriodStatus", "Closed");
  
  public static final gw.entity.ITypeFilter<typekey.PolicyPeriodStatus> TF_CLOSING = new com.guidewire.commons.entity.type2.TypeFilterImpl<typekey.PolicyPeriodStatus>("PolicyPeriodStatus", "Closing");
  
  public static final gw.entity.ITypeFilter<typekey.PolicyPeriodStatus> TF_COPYABLE = new com.guidewire.commons.entity.type2.TypeFilterImpl<typekey.PolicyPeriodStatus>("PolicyPeriodStatus", "Copyable");
  
  public static final gw.entity.ITypeFilter<typekey.PolicyPeriodStatus> TF_EXPIRABLE = new com.guidewire.commons.entity.type2.TypeFilterImpl<typekey.PolicyPeriodStatus>("PolicyPeriodStatus", "Expirable");
  
  public static final gw.entity.ITypeFilter<typekey.PolicyPeriodStatus> TF_INELIGIBLEFORSOLRINDEX = new com.guidewire.commons.entity.type2.TypeFilterImpl<typekey.PolicyPeriodStatus>("PolicyPeriodStatus", "IneligibleForSolrIndex");
  
  public static final gw.entity.ITypeFilter<typekey.PolicyPeriodStatus> TF_INELIGIBLEFORTOTALCOSTCALCULATIONS = new com.guidewire.commons.entity.type2.TypeFilterImpl<typekey.PolicyPeriodStatus>("PolicyPeriodStatus", "IneligibleForTotalCostCalculations");
  
  public static final gw.entity.ITypeFilter<typekey.PolicyPeriodStatus> TF_OPEN = new com.guidewire.commons.entity.type2.TypeFilterImpl<typekey.PolicyPeriodStatus>("PolicyPeriodStatus", "Open");
  
  public static final gw.entity.ITypeFilter<typekey.PolicyPeriodStatus> TF_POSTED = new com.guidewire.commons.entity.type2.TypeFilterImpl<typekey.PolicyPeriodStatus>("PolicyPeriodStatus", "Posted");
  
  public static final gw.entity.ITypeFilter<typekey.PolicyPeriodStatus> TF_QUOTEINPROGRESS = new com.guidewire.commons.entity.type2.TypeFilterImpl<typekey.PolicyPeriodStatus>("PolicyPeriodStatus", "QuoteInProgress");
  
  public static final gw.pl.persistence.type.TypeListTypeReference<typekey.PolicyPeriodStatus> TYPE = new com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache<typekey.PolicyPeriodStatus>("PolicyPeriodStatus");
  
  private final com.guidewire.commons.typelist.TypeKeyImplManager _typeKeyImplManager;
  
  private PolicyPeriodStatus(java.lang.String code)  {
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
  public typekey.PolicyPeriodStatus get() {
    return this;
  }
  
  public static typekey.PolicyPeriodStatus get(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  public static java.util.List<typekey.PolicyPeriodStatus> getAllTypeKeys() {
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
  
  public static typekey.PolicyPeriodStatus getTypeKey(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  /**
   * All of the typekeys in this list, including retired typekeys.
   * @deprecated Use getTypeKeys(boolean)
   */
  @java.lang.Deprecated
  public static typekey.PolicyPeriodStatus[] getTypeKeys() {
    return TYPE.get().getTypeKeys(true).toArray(new typekey.PolicyPeriodStatus[]{});
  }
  
  public static java.util.List<typekey.PolicyPeriodStatus> getTypeKeys(boolean includeRetired) {
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
  
  public typekey.PolicyPeriodStatus getValue() {
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
    com.guidewire._generated.typekey.PolicyPeriodStatusInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.TypeKeyFriendAccess<typekey.PolicyPeriodStatus>() {
      public void clearCache(typekey.PolicyPeriodStatus typeKey) {
        typeKey._typeKeyImplManager.resetTypeKeyImpl();
      }
      
      public com.guidewire.commons.entity.type2.TypeKeyInternal getInternalInterface(typekey.PolicyPeriodStatus typeKey) {
        return typeKey._typeKeyImplManager.getTypeKeyImpl();
      }
      
      public typekey.PolicyPeriodStatus newInstance(java.lang.String code) {
        return new typekey.PolicyPeriodStatus(code);
      }
      
      
    });
  }
}