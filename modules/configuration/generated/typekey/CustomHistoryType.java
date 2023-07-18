package typekey;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CustomHistoryType.tti;CustomHistoryType.tix;CustomHistoryType.ttx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
public class CustomHistoryType implements gw.entity.TypeKey {
  /**
   * Account changed
   * Account changed
   */
  public static final typekey.CustomHistoryType TC_ACCT_CHANGED = new typekey.CustomHistoryType("acct_changed");
  
  /**
   * Account created
   * Account created
   */
  public static final typekey.CustomHistoryType TC_ACCT_CREATED = new typekey.CustomHistoryType("acct_created");
  
  /**
   * Account merged
   * Account merged
   */
  public static final typekey.CustomHistoryType TC_ACCT_MERGED = new typekey.CustomHistoryType("acct_merged");
  
  /**
   * Answer changed
   * Answer was changed
   */
  public static final typekey.CustomHistoryType TC_ANSWER_CHANGED = new typekey.CustomHistoryType("answer_changed");
  
  /**
   * Archiving disabled
   * Archiving was disabled for this policy
   */
  public static final typekey.CustomHistoryType TC_ARCHIVEDISABLED = new typekey.CustomHistoryType("archivedisabled");
  
  /**
   * Archiving enabled
   * Archiving was enabled for this policy
   */
  public static final typekey.CustomHistoryType TC_ARCHIVEENABLED = new typekey.CustomHistoryType("archiveenabled");
  
  /**
   * Cancel reschedule
   * Cancel reschedule
   */
  public static final typekey.CustomHistoryType TC_CANCEL_RESCHEDULE = new typekey.CustomHistoryType("cancel_reschedule");
  
  /**
   * PolicyChange created
   * PolicyChange created
   */
  public static final typekey.CustomHistoryType TC_CHANGE_CREATED = new typekey.CustomHistoryType("change_created");
  
  /**
   * PolicyChange Effective Date change
   * PolicyChange's Edit Effective Date was changed
   */
  public static final typekey.CustomHistoryType TC_CHANGE_EDIT_EFF_DATE = new typekey.CustomHistoryType("change_edit_eff_date");
  
  /**
   * Data change
   * Data changed
   */
  public static final typekey.CustomHistoryType TC_DATACHANGE = new typekey.CustomHistoryType("DataChange");
  
  /**
   * Policy moved
   * Policy was moved to different account
   */
  public static final typekey.CustomHistoryType TC_POLICY_MOVED = new typekey.CustomHistoryType("policy_moved");
  
  /**
   * Policy data copied
   * Policy data copied
   */
  public static final typekey.CustomHistoryType TC_POL_DATA_COPIED = new typekey.CustomHistoryType("pol_data_copied");
  
  /**
   * Pre-renewal
   * Pre-renewal information was changed
   */
  public static final typekey.CustomHistoryType TC_PRERENEWAL = new typekey.CustomHistoryType("prerenewal");
  
  /**
   * Purging disabled
   * Purging was disabled for this policy period
   */
  public static final typekey.CustomHistoryType TC_PURGEDISABLED = new typekey.CustomHistoryType("purgedisabled");
  
  /**
   * Purging enabled
   * Purging was enabled for this policy period
   */
  public static final typekey.CustomHistoryType TC_PURGEENABLED = new typekey.CustomHistoryType("purgeenabled");
  
  /**
   * Renewal
   * Renewal information was changed
   */
  public static final typekey.CustomHistoryType TC_RENEWAL = new typekey.CustomHistoryType("renewal");
  
  /**
   * Rewrite Created
   * Rewrite Created
   */
  public static final typekey.CustomHistoryType TC_REWRITE_CREATED = new typekey.CustomHistoryType("rewrite_created");
  
  /**
   * Rewrite New Account job bound
   * Rewrite New Account job bound
   */
  public static final typekey.CustomHistoryType TC_REWR_NEW_ACCT_BOUND = new typekey.CustomHistoryType("rewr_new_acct_bound");
  
  /**
   * Rewrite New Account job created
   * Rewrite New Account job created
   */
  public static final typekey.CustomHistoryType TC_REWR_NEW_ACCT_CREATED = new typekey.CustomHistoryType("rewr_new_acct_created");
  
  /**
   * Submission bound
   * Submission bound
   */
  public static final typekey.CustomHistoryType TC_SUB_BOUND = new typekey.CustomHistoryType("sub_bound");
  
  /**
   * Submission created
   * Submission created
   */
  public static final typekey.CustomHistoryType TC_SUB_CREATED = new typekey.CustomHistoryType("sub_created");
  
  /**
   * Submission declined
   * Submission declined
   */
  public static final typekey.CustomHistoryType TC_SUB_DECLINE = new typekey.CustomHistoryType("sub_decline");
  
  /**
   * Submission issued
   * Submission issued
   */
  public static final typekey.CustomHistoryType TC_SUB_ISSUED = new typekey.CustomHistoryType("sub_issued");
  
  /**
   * Submission quoted
   * Submission quoted
   */
  public static final typekey.CustomHistoryType TC_SUB_QUOTED = new typekey.CustomHistoryType("sub_quoted");
  
  /**
   * UW status change
   * Underwriting status changed
   */
  public static final typekey.CustomHistoryType TC_UW_STATUSCHANGED = new typekey.CustomHistoryType("uw_statuschanged");
  
  public static final gw.pl.persistence.type.TypeListTypeReference<typekey.CustomHistoryType> TYPE = new com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache<typekey.CustomHistoryType>("CustomHistoryType");
  
  private final com.guidewire.commons.typelist.TypeKeyImplManager _typeKeyImplManager;
  
  private CustomHistoryType(java.lang.String code)  {
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
  public typekey.CustomHistoryType get() {
    return this;
  }
  
  public static typekey.CustomHistoryType get(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  public static java.util.List<typekey.CustomHistoryType> getAllTypeKeys() {
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
  
  public static typekey.CustomHistoryType getTypeKey(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  /**
   * All of the typekeys in this list, including retired typekeys.
   * @deprecated Use getTypeKeys(boolean)
   */
  @java.lang.Deprecated
  public static typekey.CustomHistoryType[] getTypeKeys() {
    return TYPE.get().getTypeKeys(true).toArray(new typekey.CustomHistoryType[]{});
  }
  
  public static java.util.List<typekey.CustomHistoryType> getTypeKeys(boolean includeRetired) {
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
  
  public typekey.CustomHistoryType getValue() {
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
    com.guidewire._generated.typekey.CustomHistoryTypeInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.TypeKeyFriendAccess<typekey.CustomHistoryType>() {
      public void clearCache(typekey.CustomHistoryType typeKey) {
        typeKey._typeKeyImplManager.resetTypeKeyImpl();
      }
      
      public com.guidewire.commons.entity.type2.TypeKeyInternal getInternalInterface(typekey.CustomHistoryType typeKey) {
        return typeKey._typeKeyImplManager.getTypeKeyImpl();
      }
      
      public typekey.CustomHistoryType newInstance(java.lang.String code) {
        return new typekey.CustomHistoryType(code);
      }
      
      
    });
  }
}