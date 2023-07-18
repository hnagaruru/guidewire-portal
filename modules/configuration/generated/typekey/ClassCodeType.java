package typekey;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ClassCodeType.tti;ClassCodeType.tix;ClassCodeType.ttx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
public class ClassCodeType implements gw.entity.TypeKey {
  /**
   * BOP
   * A BOP code
   */
  public static final typekey.ClassCodeType TC_BOP = new typekey.ClassCodeType("BOP");
  
  /**
   * CA
   * A commercial auto code
   */
  public static final typekey.ClassCodeType TC_CA = new typekey.ClassCodeType("CA");
  
  /**
   * CA_WC
   * A California WC code
   */
  public static final typekey.ClassCodeType TC_CA_WC = new typekey.ClassCodeType("CA_WC");
  
  /**
   * CP
   * A Property code
   */
  public static final typekey.ClassCodeType TC_CP = new typekey.ClassCodeType("CP");
  
  /**
   * CR
   * A Crime code
   */
  public static final typekey.ClassCodeType TC_CR = new typekey.ClassCodeType("CR");
  
  /**
   * DE_WC
   * A DE WC code
   */
  public static final typekey.ClassCodeType TC_DE_WC = new typekey.ClassCodeType("DE_WC");
  
  /**
   * GL
   * A GL code
   */
  public static final typekey.ClassCodeType TC_GL = new typekey.ClassCodeType("GL");
  
  /**
   * MA_WC
   * A MA WC code
   */
  public static final typekey.ClassCodeType TC_MA_WC = new typekey.ClassCodeType("MA_WC");
  
  /**
   * MI_WC
   * A MI WC code
   */
  public static final typekey.ClassCodeType TC_MI_WC = new typekey.ClassCodeType("MI_WC");
  
  /**
   * MN_WC
   * A MN WC code
   */
  public static final typekey.ClassCodeType TC_MN_WC = new typekey.ClassCodeType("MN_WC");
  
  /**
   * NCCI
   * A NCCI code
   */
  public static final typekey.ClassCodeType TC_NCCI = new typekey.ClassCodeType("NCCI");
  
  /**
   * NC_WC
   * A NC WC code
   */
  public static final typekey.ClassCodeType TC_NC_WC = new typekey.ClassCodeType("NC_WC");
  
  /**
   * NJ_WC
   * A NJ WC code
   */
  public static final typekey.ClassCodeType TC_NJ_WC = new typekey.ClassCodeType("NJ_WC");
  
  /**
   * NY_WC
   * A NY WC code
   */
  public static final typekey.ClassCodeType TC_NY_WC = new typekey.ClassCodeType("NY_WC");
  
  /**
   * PA_WC
   * A PA WC code
   */
  public static final typekey.ClassCodeType TC_PA_WC = new typekey.ClassCodeType("PA_WC");
  
  /**
   * TX_WC
   * A TX WC code
   */
  public static final typekey.ClassCodeType TC_TX_WC = new typekey.ClassCodeType("TX_WC");
  
  /**
   * WI_WC
   * A WI WC code
   */
  public static final typekey.ClassCodeType TC_WI_WC = new typekey.ClassCodeType("WI_WC");
  
  public static final gw.pl.persistence.type.TypeListTypeReference<typekey.ClassCodeType> TYPE = new com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache<typekey.ClassCodeType>("ClassCodeType");
  
  private final com.guidewire.commons.typelist.TypeKeyImplManager _typeKeyImplManager;
  
  private ClassCodeType(java.lang.String code)  {
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
  public typekey.ClassCodeType get() {
    return this;
  }
  
  public static typekey.ClassCodeType get(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  public static java.util.List<typekey.ClassCodeType> getAllTypeKeys() {
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
  
  public static typekey.ClassCodeType getTypeKey(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  /**
   * All of the typekeys in this list, including retired typekeys.
   * @deprecated Use getTypeKeys(boolean)
   */
  @java.lang.Deprecated
  public static typekey.ClassCodeType[] getTypeKeys() {
    return TYPE.get().getTypeKeys(true).toArray(new typekey.ClassCodeType[]{});
  }
  
  public static java.util.List<typekey.ClassCodeType> getTypeKeys(boolean includeRetired) {
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
  
  public typekey.ClassCodeType getValue() {
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
    com.guidewire._generated.typekey.ClassCodeTypeInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.TypeKeyFriendAccess<typekey.ClassCodeType>() {
      public void clearCache(typekey.ClassCodeType typeKey) {
        typeKey._typeKeyImplManager.resetTypeKeyImpl();
      }
      
      public com.guidewire.commons.entity.type2.TypeKeyInternal getInternalInterface(typekey.ClassCodeType typeKey) {
        return typeKey._typeKeyImplManager.getTypeKeyImpl();
      }
      
      public typekey.ClassCodeType newInstance(java.lang.String code) {
        return new typekey.ClassCodeType(code);
      }
      
      
    });
  }
}