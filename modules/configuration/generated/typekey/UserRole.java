package typekey;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UserRole.tti;UserRole.tix;UserRole.ttx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
public class UserRole implements gw.entity.TypeKey {
  /**
   * Audit Examiner
   * The user who will examin an audit.
   */
  public static final typekey.UserRole TC_AUDITEXAMINER = new typekey.UserRole("AuditExaminer");
  
  /**
   * Auditor
   * The user who will audit a policy.
   */
  public static final typekey.UserRole TC_AUDITOR = new typekey.UserRole("Auditor");
  
  /**
   * Creator
   * The creator of this job
   */
  public static final typekey.UserRole TC_CREATOR = new typekey.UserRole("Creator");
  
  /**
   * Customer Service Representative
   * Customer Service representative
   */
  public static final typekey.UserRole TC_CUSTOMERREP = new typekey.UserRole("CustomerRep");
  
  /**
   * Default Assignment Role
   * A special assignment role that accepts failed or unresolved assignments
   */
  public static final typekey.UserRole TC_DEFAULTASSIGNMENTROLE = new typekey.UserRole("defaultassignmentrole");
  
  /**
   * Initial Referrer
   * Initial Referrer
   */
  public static final typekey.UserRole TC_INITIALREFERRER = new typekey.UserRole("InitialReferrer");
  
  /**
   * Loss Control
   * Person who inspects risks and advises underwriting of issues
   */
  public static final typekey.UserRole TC_LOSS_CONTROL = new typekey.UserRole("loss_control");
  
  /**
   * Pre-Renewal Owner
   * Pre-Renewal owner
   */
  public static final typekey.UserRole TC_PRERENEWALOWNER = new typekey.UserRole("PreRenewalOwner");
  
  /**
   * Processor
   * Clerical person who is responsible for processing the work order
   */
  public static final typekey.UserRole TC_PROCESSOR = new typekey.UserRole("processor");
  
  /**
   * Producer
   * The user who can act on behalf of the policyholder for purposes of gathering relevant information or providing authorization.
   */
  public static final typekey.UserRole TC_PRODUCER = new typekey.UserRole("Producer");
  
  /**
   * Related user
   * Miscellaneous related user
   */
  public static final typekey.UserRole TC_RELATEDUSER = new typekey.UserRole("relateduser");
  
  /**
   * Requestor
   * Person who initiated a submission or other work order
   */
  public static final typekey.UserRole TC_REQUESTOR = new typekey.UserRole("Requestor");
  
  /**
   * Underwriting Technician
   * An underwriting assistant who handles common underwriting tasks
   */
  public static final typekey.UserRole TC_TECH = new typekey.UserRole("tech");
  
  /**
   * Underwriter
   * An internal user, typically an underwriter, who has to oversee the job to completion.
   */
  public static final typekey.UserRole TC_UNDERWRITER = new typekey.UserRole("Underwriter");
  
  /**
   * Underwriter Assistant
   * Underwriter assistant
   */
  public static final typekey.UserRole TC_UNDERWRITERASSIST = new typekey.UserRole("UnderwriterAssist");
  
  public static final gw.pl.persistence.type.TypeListTypeReference<typekey.UserRole> TYPE = new com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache<typekey.UserRole>("UserRole");
  
  private final com.guidewire.commons.typelist.TypeKeyImplManager _typeKeyImplManager;
  
  private UserRole(java.lang.String code)  {
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
  public typekey.UserRole get() {
    return this;
  }
  
  public static typekey.UserRole get(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  public static java.util.List<typekey.UserRole> getAllTypeKeys() {
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
  
  public static typekey.UserRole getTypeKey(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  /**
   * All of the typekeys in this list, including retired typekeys.
   * @deprecated Use getTypeKeys(boolean)
   */
  @java.lang.Deprecated
  public static typekey.UserRole[] getTypeKeys() {
    return TYPE.get().getTypeKeys(true).toArray(new typekey.UserRole[]{});
  }
  
  public static java.util.List<typekey.UserRole> getTypeKeys(boolean includeRetired) {
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
  
  public typekey.UserRole getValue() {
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
    com.guidewire._generated.typekey.UserRoleInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.TypeKeyFriendAccess<typekey.UserRole>() {
      public void clearCache(typekey.UserRole typeKey) {
        typeKey._typeKeyImplManager.resetTypeKeyImpl();
      }
      
      public com.guidewire.commons.entity.type2.TypeKeyInternal getInternalInterface(typekey.UserRole typeKey) {
        return typeKey._typeKeyImplManager.getTypeKeyImpl();
      }
      
      public typekey.UserRole newInstance(java.lang.String code) {
        return new typekey.UserRole(code);
      }
      
      
    });
  }
}