package typekey;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "DocumentType.tti;DocumentType.tix;DocumentType.ttx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
public class DocumentType implements gw.entity.TypeKey {
  /**
   * Audit report
   * Audit report
   */
  public static final typekey.DocumentType TC_AUDIT = new typekey.DocumentType("audit");
  
  /**
   * Binder
   * Binder
   */
  public static final typekey.DocumentType TC_BINDER = new typekey.DocumentType("binder");
  
  /**
   * Confirmation letter
   * Confirmation letter document
   */
  public static final typekey.DocumentType TC_CONFIRM_LETTER = new typekey.DocumentType("confirm_letter");
  
  /**
   * Credit report
   * Credit report
   */
  public static final typekey.DocumentType TC_CREDIT = new typekey.DocumentType("credit");
  
  /**
   * Declination letter
   * Declination letter document
   */
  public static final typekey.DocumentType TC_DECLINE_LETTER = new typekey.DocumentType("decline_letter");
  
  /**
   * DecSheet
   * DecSheet
   */
  public static final typekey.DocumentType TC_DECSHEET = new typekey.DocumentType("decsheet");
  
  /**
   * Diagram
   * Diagram
   */
  public static final typekey.DocumentType TC_DIAGRAM = new typekey.DocumentType("diagram");
  
  /**
   * Email
   * Email
   */
  public static final typekey.DocumentType TC_EMAIL = new typekey.DocumentType("email");
  
  /**
   * Email Sent
   * Email created and sent from within PolicyCenter
   */
  public static final typekey.DocumentType TC_EMAIL_SENT = new typekey.DocumentType("email_sent");
  
  /**
   * Inspection report
   * Inspection report
   */
  public static final typekey.DocumentType TC_INSPECTIONREPORT = new typekey.DocumentType("inspectionreport");
  
  /**
   * Letter received
   * Letter received
   */
  public static final typekey.DocumentType TC_LETTER_RECEIVED = new typekey.DocumentType("letter_received");
  
  /**
   * Letter sent
   * Letter sent
   */
  public static final typekey.DocumentType TC_LETTER_SENT = new typekey.DocumentType("letter_sent");
  
  /**
   * Loss information
   * Loss information
   */
  public static final typekey.DocumentType TC_LOSSES = new typekey.DocumentType("losses");
  
  /**
   * Loss history
   * Loss history type document
   */
  public static final typekey.DocumentType TC_LOSS_HISTORY = new typekey.DocumentType("loss_history");
  
  /**
   * MVR
   * MVR
   */
  public static final typekey.DocumentType TC_MVR = new typekey.DocumentType("mvr");
  
  /**
   * New business application
   * New business application
   */
  public static final typekey.DocumentType TC_NEWBUSINESS = new typekey.DocumentType("newbusiness");
  
  /**
   * Not-Taken letter
   * Acknowledgement letter for Policy Not-Taken document
   */
  public static final typekey.DocumentType TC_NOT_TAKEN_LETTER = new typekey.DocumentType("not_taken_letter");
  
  /**
   * Other
   * Other
   */
  public static final typekey.DocumentType TC_OTHER = new typekey.DocumentType("other");
  
  /**
   * Policy summary
   * Policy summary
   */
  public static final typekey.DocumentType TC_POLICY_SUMMARY = new typekey.DocumentType("policy_summary");
  
  /**
   * Quote
   * Quote
   */
  public static final typekey.DocumentType TC_QUOTE = new typekey.DocumentType("quote");
  
  /**
   * Renewal information/instructions
   * Renewal information/instructions
   */
  public static final typekey.DocumentType TC_RENEWALINFO = new typekey.DocumentType("renewalinfo");
  
  /**
   * Statement
   * Statement
   */
  public static final typekey.DocumentType TC_STATEMENT = new typekey.DocumentType("statement");
  
  public static final gw.pl.persistence.type.TypeListTypeReference<typekey.DocumentType> TYPE = new com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache<typekey.DocumentType>("DocumentType");
  
  private final com.guidewire.commons.typelist.TypeKeyImplManager _typeKeyImplManager;
  
  private DocumentType(java.lang.String code)  {
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
  public typekey.DocumentType get() {
    return this;
  }
  
  public static typekey.DocumentType get(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  public static java.util.List<typekey.DocumentType> getAllTypeKeys() {
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
  
  public static typekey.DocumentType getTypeKey(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  /**
   * All of the typekeys in this list, including retired typekeys.
   * @deprecated Use getTypeKeys(boolean)
   */
  @java.lang.Deprecated
  public static typekey.DocumentType[] getTypeKeys() {
    return TYPE.get().getTypeKeys(true).toArray(new typekey.DocumentType[]{});
  }
  
  public static java.util.List<typekey.DocumentType> getTypeKeys(boolean includeRetired) {
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
  
  public typekey.DocumentType getValue() {
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
    com.guidewire._generated.typekey.DocumentTypeInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.TypeKeyFriendAccess<typekey.DocumentType>() {
      public void clearCache(typekey.DocumentType typeKey) {
        typeKey._typeKeyImplManager.resetTypeKeyImpl();
      }
      
      public com.guidewire.commons.entity.type2.TypeKeyInternal getInternalInterface(typekey.DocumentType typeKey) {
        return typeKey._typeKeyImplManager.getTypeKeyImpl();
      }
      
      public typekey.DocumentType newInstance(java.lang.String code) {
        return new typekey.DocumentType(code);
      }
      
      
    });
  }
}