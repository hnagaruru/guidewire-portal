package typekey;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WorkflowTriggerKey.tti;WorkflowTriggerKey.tix;WorkflowTriggerKey.ttx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
public class WorkflowTriggerKey implements gw.entity.TypeKey {
  /**
   * Cancel
   * Cancel
   */
  public static final typekey.WorkflowTriggerKey TC_CANCEL = new typekey.WorkflowTriggerKey("Cancel");
  
  /**
   * EditPolicy
   * EditPolicy
   */
  public static final typekey.WorkflowTriggerKey TC_EDITPOLICY = new typekey.WorkflowTriggerKey("EditPolicy");
  
  /**
   * FailCancellation
   * FailCancellation
   */
  public static final typekey.WorkflowTriggerKey TC_FAILCANCELLATION = new typekey.WorkflowTriggerKey("FailCancellation");
  
  /**
   * FailIssueRenewal
   * FailIssueRenewal
   */
  public static final typekey.WorkflowTriggerKey TC_FAILISSUERENEWAL = new typekey.WorkflowTriggerKey("FailIssueRenewal");
  
  /**
   * FailNonRenewalDocs
   * FailNonRenewalDocs
   */
  public static final typekey.WorkflowTriggerKey TC_FAILNONRENEWALDOCS = new typekey.WorkflowTriggerKey("FailNonRenewalDocs");
  
  /**
   * FailNotTakenDocs
   * FailNotTakenDocs
   */
  public static final typekey.WorkflowTriggerKey TC_FAILNOTTAKENDOCS = new typekey.WorkflowTriggerKey("FailNotTakenDocs");
  
  /**
   * FailRenewalDocs
   * FailRenewalDocs
   */
  public static final typekey.WorkflowTriggerKey TC_FAILRENEWALDOCS = new typekey.WorkflowTriggerKey("FailRenewalDocs");
  
  /**
   * FailRescind
   * FailRescind
   */
  public static final typekey.WorkflowTriggerKey TC_FAILRESCIND = new typekey.WorkflowTriggerKey("FailRescind");
  
  /**
   * FailSendNonRenewal
   * FailSendNonRenewal
   */
  public static final typekey.WorkflowTriggerKey TC_FAILSENDNONRENEWAL = new typekey.WorkflowTriggerKey("FailSendNonRenewal");
  
  /**
   * FailSendNotices
   * FailSendNotices
   */
  public static final typekey.WorkflowTriggerKey TC_FAILSENDNOTICES = new typekey.WorkflowTriggerKey("FailSendNotices");
  
  /**
   * FailSendNotTaken
   * FailSendNotTaken
   */
  public static final typekey.WorkflowTriggerKey TC_FAILSENDNOTTAKEN = new typekey.WorkflowTriggerKey("FailSendNotTaken");
  
  /**
   * FinishCancellation
   * FinishCancellation
   */
  public static final typekey.WorkflowTriggerKey TC_FINISHCANCELLATION = new typekey.WorkflowTriggerKey("FinishCancellation");
  
  /**
   * FinishIssueRenewal
   * FinishIssueRenewal
   */
  public static final typekey.WorkflowTriggerKey TC_FINISHISSUERENEWAL = new typekey.WorkflowTriggerKey("FinishIssueRenewal");
  
  /**
   * FinishNonRenewalDocs
   * FinishNonRenewalDocs
   */
  public static final typekey.WorkflowTriggerKey TC_FINISHNONRENEWALDOCS = new typekey.WorkflowTriggerKey("FinishNonRenewalDocs");
  
  /**
   * FinishNotTakenDocs
   * FinishNotTakenDocs
   */
  public static final typekey.WorkflowTriggerKey TC_FINISHNOTTAKENDOCS = new typekey.WorkflowTriggerKey("FinishNotTakenDocs");
  
  /**
   * FinishRenewalDocs
   * FinishRenewalDocs
   */
  public static final typekey.WorkflowTriggerKey TC_FINISHRENEWALDOCS = new typekey.WorkflowTriggerKey("FinishRenewalDocs");
  
  /**
   * FinishRescind
   * FinishRescind
   */
  public static final typekey.WorkflowTriggerKey TC_FINISHRESCIND = new typekey.WorkflowTriggerKey("FinishRescind");
  
  /**
   * FinishSendNonRenewal
   * FinishSendNonRenewal
   */
  public static final typekey.WorkflowTriggerKey TC_FINISHSENDNONRENEWAL = new typekey.WorkflowTriggerKey("FinishSendNonRenewal");
  
  /**
   * FinishSendNotices
   * FinishSendNotices
   */
  public static final typekey.WorkflowTriggerKey TC_FINISHSENDNOTICES = new typekey.WorkflowTriggerKey("FinishSendNotices");
  
  /**
   * FinishSendNotTaken
   * FinishSendNotTaken
   */
  public static final typekey.WorkflowTriggerKey TC_FINISHSENDNOTTAKEN = new typekey.WorkflowTriggerKey("FinishSendNotTaken");
  
  /**
   * OrderMVRs
   * OrderMVRs
   */
  public static final typekey.WorkflowTriggerKey TC_ORDERMVRS = new typekey.WorkflowTriggerKey("OrderMVRs");
  
  /**
   * Rescind
   * Rescind
   */
  public static final typekey.WorkflowTriggerKey TC_RESCIND = new typekey.WorkflowTriggerKey("Rescind");
  
  /**
   * WaitForMVRs
   * WaitForMVRs
   */
  public static final typekey.WorkflowTriggerKey TC_WAITFORMVRS = new typekey.WorkflowTriggerKey("WaitForMVRs");
  
  /**
   * Withdraw
   * Withdraw
   */
  public static final typekey.WorkflowTriggerKey TC_WITHDRAW = new typekey.WorkflowTriggerKey("Withdraw");
  
  public static final gw.pl.persistence.type.TypeListTypeReference<typekey.WorkflowTriggerKey> TYPE = new com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache<typekey.WorkflowTriggerKey>("WorkflowTriggerKey");
  
  private final com.guidewire.commons.typelist.TypeKeyImplManager _typeKeyImplManager;
  
  private WorkflowTriggerKey(java.lang.String code)  {
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
  public typekey.WorkflowTriggerKey get() {
    return this;
  }
  
  public static typekey.WorkflowTriggerKey get(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  public static java.util.List<typekey.WorkflowTriggerKey> getAllTypeKeys() {
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
  
  public static typekey.WorkflowTriggerKey getTypeKey(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  /**
   * All of the typekeys in this list, including retired typekeys.
   * @deprecated Use getTypeKeys(boolean)
   */
  @java.lang.Deprecated
  public static typekey.WorkflowTriggerKey[] getTypeKeys() {
    return TYPE.get().getTypeKeys(true).toArray(new typekey.WorkflowTriggerKey[]{});
  }
  
  public static java.util.List<typekey.WorkflowTriggerKey> getTypeKeys(boolean includeRetired) {
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
  
  public typekey.WorkflowTriggerKey getValue() {
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
    com.guidewire._generated.typekey.WorkflowTriggerKeyInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.TypeKeyFriendAccess<typekey.WorkflowTriggerKey>() {
      public void clearCache(typekey.WorkflowTriggerKey typeKey) {
        typeKey._typeKeyImplManager.resetTypeKeyImpl();
      }
      
      public com.guidewire.commons.entity.type2.TypeKeyInternal getInternalInterface(typekey.WorkflowTriggerKey typeKey) {
        return typeKey._typeKeyImplManager.getTypeKeyImpl();
      }
      
      public typekey.WorkflowTriggerKey newInstance(java.lang.String code) {
        return new typekey.WorkflowTriggerKey(code);
      }
      
      
    });
  }
}