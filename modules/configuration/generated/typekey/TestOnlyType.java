package typekey;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TestOnlyType.tti;TestOnlyType.tix;TestOnlyType.ttx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
public class TestOnlyType implements gw.entity.TypeKey {
  /**
   * Code 0
   * Code 0 (red)
   */
  @java.lang.Deprecated
  public static final typekey.TestOnlyType TC_CODE0 = new typekey.TestOnlyType("code0");
  
  /**
   * Code 1
   * Code 1 (red)
   */
  public static final typekey.TestOnlyType TC_CODE1 = new typekey.TestOnlyType("code1");
  
  /**
   * Code 10
   * Code 10 (blue)
   */
  @java.lang.Deprecated
  public static final typekey.TestOnlyType TC_CODE10 = new typekey.TestOnlyType("code10");
  
  /**
   * Code 11
   * Code 11 (blue)
   */
  public static final typekey.TestOnlyType TC_CODE11 = new typekey.TestOnlyType("code11");
  
  /**
   * Code 12
   * Code 12 (blue)
   */
  public static final typekey.TestOnlyType TC_CODE12 = new typekey.TestOnlyType("code12");
  
  /**
   * Code 13
   * Code 13 (red-green)
   */
  public static final typekey.TestOnlyType TC_CODE13 = new typekey.TestOnlyType("code13");
  
  /**
   * Code 14
   * Code 14
   */
  public static final typekey.TestOnlyType TC_CODE14 = new typekey.TestOnlyType("code14");
  
  /**
   * Code 15
   * Code 15 (Color_retired)
   */
  @java.lang.Deprecated
  public static final typekey.TestOnlyType TC_CODE15 = new typekey.TestOnlyType("code15");
  
  /**
   * Code 16
   * Code 16 (Color_retired)
   */
  public static final typekey.TestOnlyType TC_CODE16 = new typekey.TestOnlyType("code16");
  
  /**
   * Code 17
   * Code 17 (Color_retired)
   */
  public static final typekey.TestOnlyType TC_CODE17 = new typekey.TestOnlyType("code17");
  
  /**
   * Code 18
   * Code 18 (red-green-blue)
   */
  public static final typekey.TestOnlyType TC_CODE18 = new typekey.TestOnlyType("code18");
  
  /**
   * Code 19
   * Code 19
   */
  public static final typekey.TestOnlyType TC_CODE19 = new typekey.TestOnlyType("code19");
  
  /**
   * Code 2
   * Code 2 (red)
   */
  public static final typekey.TestOnlyType TC_CODE2 = new typekey.TestOnlyType("code2");
  
  /**
   * Code 3
   * Code 3 (green-blue)
   */
  public static final typekey.TestOnlyType TC_CODE3 = new typekey.TestOnlyType("code3");
  
  /**
   * Code 4
   * Code 4
   */
  public static final typekey.TestOnlyType TC_CODE4 = new typekey.TestOnlyType("code4");
  
  /**
   * Code 5
   * Code 5 (green)
   */
  @java.lang.Deprecated
  public static final typekey.TestOnlyType TC_CODE5 = new typekey.TestOnlyType("code5");
  
  /**
   * Code 6
   * Code 6 (green)
   */
  public static final typekey.TestOnlyType TC_CODE6 = new typekey.TestOnlyType("code6");
  
  /**
   * Code 7
   * Code 7 (green)
   */
  public static final typekey.TestOnlyType TC_CODE7 = new typekey.TestOnlyType("code7");
  
  /**
   * Code 8
   * Code 8 (red-blue)
   */
  public static final typekey.TestOnlyType TC_CODE8 = new typekey.TestOnlyType("code8");
  
  /**
   * Code 9
   * Code 9
   */
  public static final typekey.TestOnlyType TC_CODE9 = new typekey.TestOnlyType("code9");
  
  public static final gw.entity.ITypeFilter<typekey.TestOnlyType> TF_PASSTHRU = new com.guidewire.commons.entity.type2.TypeFilterImpl<typekey.TestOnlyType>("TestOnlyType", "PassThru");
  
  public static final gw.entity.ITypeFilter<typekey.TestOnlyType> TF_PRIMEBYINCLUSION = new com.guidewire.commons.entity.type2.TypeFilterImpl<typekey.TestOnlyType>("TestOnlyType", "PrimeByInclusion");
  
  public static final gw.entity.ITypeFilter<typekey.TestOnlyType> TF_REDBYCATEGORY = new com.guidewire.commons.entity.type2.TypeFilterImpl<typekey.TestOnlyType>("TestOnlyType", "RedByCategory");
  
  public static final gw.entity.ITypeFilter<typekey.TestOnlyType> TF_REDGREENBLUEACTIVE = new com.guidewire.commons.entity.type2.TypeFilterImpl<typekey.TestOnlyType>("TestOnlyType", "RedGreenBlueActive");
  
  public static final gw.entity.ITypeFilter<typekey.TestOnlyType> TF_REDGREENBLUEBYEXCLUSION = new com.guidewire.commons.entity.type2.TypeFilterImpl<typekey.TestOnlyType>("TestOnlyType", "RedGreenBlueByExclusion");
  
  public static final gw.entity.ITypeFilter<typekey.TestOnlyType> TF_REDGREENBYCATEGORY = new com.guidewire.commons.entity.type2.TypeFilterImpl<typekey.TestOnlyType>("TestOnlyType", "RedGreenByCategory");
  
  public static final gw.entity.ITypeFilter<typekey.TestOnlyType> TF_REDGREENBYCATEGORYANDINCLUSION = new com.guidewire.commons.entity.type2.TypeFilterImpl<typekey.TestOnlyType>("TestOnlyType", "RedGreenByCategoryAndInclusion");
  
  public static final gw.pl.persistence.type.TypeListTypeReference<typekey.TestOnlyType> TYPE = new com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache<typekey.TestOnlyType>("TestOnlyType");
  
  private final com.guidewire.commons.typelist.TypeKeyImplManager _typeKeyImplManager;
  
  private TestOnlyType(java.lang.String code)  {
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
  public typekey.TestOnlyType get() {
    return this;
  }
  
  public static typekey.TestOnlyType get(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  public static java.util.List<typekey.TestOnlyType> getAllTypeKeys() {
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
  
  public static typekey.TestOnlyType getTypeKey(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  /**
   * All of the typekeys in this list, including retired typekeys.
   * @deprecated Use getTypeKeys(boolean)
   */
  @java.lang.Deprecated
  public static typekey.TestOnlyType[] getTypeKeys() {
    return TYPE.get().getTypeKeys(true).toArray(new typekey.TestOnlyType[]{});
  }
  
  public static java.util.List<typekey.TestOnlyType> getTypeKeys(boolean includeRetired) {
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
  
  public typekey.TestOnlyType getValue() {
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
    com.guidewire._generated.typekey.TestOnlyTypeInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.TypeKeyFriendAccess<typekey.TestOnlyType>() {
      public void clearCache(typekey.TestOnlyType typeKey) {
        typeKey._typeKeyImplManager.resetTypeKeyImpl();
      }
      
      public com.guidewire.commons.entity.type2.TypeKeyInternal getInternalInterface(typekey.TestOnlyType typeKey) {
        return typeKey._typeKeyImplManager.getTypeKeyImpl();
      }
      
      public typekey.TestOnlyType newInstance(java.lang.String code) {
        return new typekey.TestOnlyType(code);
      }
      
      
    });
  }
}