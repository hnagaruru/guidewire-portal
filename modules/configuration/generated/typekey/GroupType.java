package typekey;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GroupType.tti;GroupType.tix;GroupType.ttx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
public class GroupType implements gw.entity.TypeKey {
  /**
   * Actuary unit
   * Actuary unit
   */
  public static final typekey.GroupType TC_ACTUARY = new typekey.GroupType("actuary");
  
  /**
   * Branch office
   * Branch office
   */
  public static final typekey.GroupType TC_BRANCH = new typekey.GroupType("branch");
  
  /**
   * Branch audit
   * Branch audit
   */
  public static final typekey.GroupType TC_BRANCHAUDIT = new typekey.GroupType("branchaudit");
  
  /**
   * Branch L.C.
   * Branch L.C.
   */
  public static final typekey.GroupType TC_BRANCHLC = new typekey.GroupType("branchlc");
  
  /**
   * Branch marketing
   * Branch marketing
   */
  public static final typekey.GroupType TC_BRANCHMKT = new typekey.GroupType("branchmkt");
  
  /**
   * Branch UW
   * Branch UW
   */
  public static final typekey.GroupType TC_BRANCHUW = new typekey.GroupType("branchuw");
  
  /**
   * Clerical support
   * Clerical support
   */
  public static final typekey.GroupType TC_CLERICAL = new typekey.GroupType("clerical");
  
  /**
   * Customer service
   * Customer service
   */
  public static final typekey.GroupType TC_CUSTSERV = new typekey.GroupType("custserv");
  
  /**
   * Web services unit
   * Web services unit
   */
  public static final typekey.GroupType TC_ESERVICES = new typekey.GroupType("eservices");
  
  /**
   * Fee audit
   * Fee audit
   */
  public static final typekey.GroupType TC_EXTAUDIT = new typekey.GroupType("extaudit");
  
  /**
   * Fee inspection
   * Fee inspection
   */
  public static final typekey.GroupType TC_EXTLC = new typekey.GroupType("extlc");
  
  /**
   * Fac reinsurance unit
   * Fac reinsurance unit
   */
  public static final typekey.GroupType TC_FACRE = new typekey.GroupType("facre");
  
  /**
   * Finance and treasury
   * Finance and treasury
   */
  public static final typekey.GroupType TC_FINANCE = new typekey.GroupType("finance");
  
  /**
   * General
   * General
   */
  public static final typekey.GroupType TC_GENERAL = new typekey.GroupType("general");
  
  /**
   * Home office admin services
   * Home office admin services
   */
  public static final typekey.GroupType TC_HOMEOFFICEADMIN = new typekey.GroupType("homeofficeadmin");
  
  /**
   * Home office L.C.
   * Home office L.C.
   */
  public static final typekey.GroupType TC_HOMEOFFICELC = new typekey.GroupType("homeofficelc");
  
  /**
   * Home office marketing
   * Home office marketing
   */
  public static final typekey.GroupType TC_HOMEOFFICEMKT = new typekey.GroupType("homeofficemkt");
  
  /**
   * Home office U.W.
   * Home office UW
   */
  public static final typekey.GroupType TC_HOMEOFFICEUW = new typekey.GroupType("homeofficeuw");
  
  /**
   * Corporate headquarters
   * Corporate headquarters
   */
  public static final typekey.GroupType TC_HQ = new typekey.GroupType("hq");
  
  /**
   * Managing general agt
   * Managing general agent
   */
  public static final typekey.GroupType TC_MGA = new typekey.GroupType("mga");
  
  /**
   * Policy services
   * Policy services
   */
  public static final typekey.GroupType TC_POLICYSERVE = new typekey.GroupType("policyserve");
  
  /**
   * Premium accounting
   * Premium accounting
   */
  public static final typekey.GroupType TC_PREMACCT = new typekey.GroupType("premacct");
  
  /**
   * Producer
   * Producer
   */
  public static final typekey.GroupType TC_PRODUCER = new typekey.GroupType("producer");
  
  /**
   * Regional parent group
   * Regional parent group
   */
  public static final typekey.GroupType TC_REGION = new typekey.GroupType("region");
  
  /**
   * Regional audit
   * Regional Audit
   */
  public static final typekey.GroupType TC_REGIONAUDIT = new typekey.GroupType("regionaudit");
  
  /**
   * Regional L.C.
   * Regional L.C.
   */
  public static final typekey.GroupType TC_REGIONLC = new typekey.GroupType("regionlc");
  
  /**
   * Regional marketing
   * Regional marketing
   */
  public static final typekey.GroupType TC_REGIONMKT = new typekey.GroupType("regionmkt");
  
  /**
   * Regional UW
   * Regional UW
   */
  public static final typekey.GroupType TC_REGIONUW = new typekey.GroupType("regionuw");
  
  /**
   * Root Group
   * This is the root group of an organization
   */
  public static final typekey.GroupType TC_ROOT = new typekey.GroupType("root");
  
  /**
   * Special investigative unit
   * Special investigative unit
   */
  public static final typekey.GroupType TC_SIU = new typekey.GroupType("siu");
  
  /**
   * Solutions group
   * Solutions group
   */
  public static final typekey.GroupType TC_SOLUTIONS = new typekey.GroupType("solutions");
  
  /**
   * System administrators
   * System administrators
   */
  public static final typekey.GroupType TC_SYSTEMADMIN = new typekey.GroupType("systemadmin");
  
  public static final gw.pl.persistence.type.TypeListTypeReference<typekey.GroupType> TYPE = new com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache<typekey.GroupType>("GroupType");
  
  private final com.guidewire.commons.typelist.TypeKeyImplManager _typeKeyImplManager;
  
  private GroupType(java.lang.String code)  {
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
  public typekey.GroupType get() {
    return this;
  }
  
  public static typekey.GroupType get(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  public static java.util.List<typekey.GroupType> getAllTypeKeys() {
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
  
  public static typekey.GroupType getTypeKey(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  /**
   * All of the typekeys in this list, including retired typekeys.
   * @deprecated Use getTypeKeys(boolean)
   */
  @java.lang.Deprecated
  public static typekey.GroupType[] getTypeKeys() {
    return TYPE.get().getTypeKeys(true).toArray(new typekey.GroupType[]{});
  }
  
  public static java.util.List<typekey.GroupType> getTypeKeys(boolean includeRetired) {
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
  
  public typekey.GroupType getValue() {
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
    com.guidewire._generated.typekey.GroupTypeInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.TypeKeyFriendAccess<typekey.GroupType>() {
      public void clearCache(typekey.GroupType typeKey) {
        typeKey._typeKeyImplManager.resetTypeKeyImpl();
      }
      
      public com.guidewire.commons.entity.type2.TypeKeyInternal getInternalInterface(typekey.GroupType typeKey) {
        return typeKey._typeKeyImplManager.getTypeKeyImpl();
      }
      
      public typekey.GroupType newInstance(java.lang.String code) {
        return new typekey.GroupType(code);
      }
      
      
    });
  }
}