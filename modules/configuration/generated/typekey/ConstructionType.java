package typekey;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ConstructionType.tti;ConstructionType.tix;ConstructionType.ttx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
public class ConstructionType implements gw.entity.TypeKey {
  /**
   * Frame
   * Frame
   */
  public static final typekey.ConstructionType TC_F = new typekey.ConstructionType("F");
  
  /**
   * Fire Resistive (light steel/not reinforced)
   * Fire Resistive (light steel/not reinforced)
   */
  public static final typekey.ConstructionType TC_FRLSNR = new typekey.ConstructionType("FRLSNR");
  
  /**
   * Fire Resistive (light steel/reinforced)
   * Fire Resistive (light steel/reinforced)
   */
  public static final typekey.ConstructionType TC_FRLSR = new typekey.ConstructionType("FRLSR");
  
  /**
   * Fire Resistive (not light steel/not reinforced)
   * Fire Resistive (not light steel/not reinforced)
   */
  public static final typekey.ConstructionType TC_FRNLSNR = new typekey.ConstructionType("FRNLSNR");
  
  /**
   * Fire Resistive (not light steel/reinforced)
   * Fire Resistive (not light steel/reinforced)
   */
  public static final typekey.ConstructionType TC_FRNLSR = new typekey.ConstructionType("FRNLSR");
  
  /**
   * Joisted Masonry (not reinforced)
   * Joisted Masonry (not reinforced)
   */
  public static final typekey.ConstructionType TC_JMNR = new typekey.ConstructionType("JMNR");
  
  /**
   * Joisted Masonry (reinforced)
   * Joisted Masonry (reinforced)
   */
  public static final typekey.ConstructionType TC_JMR = new typekey.ConstructionType("JMR");
  
  /**
   * Modified Fire Resistive
   * Modified Fire Resistive
   */
  public static final typekey.ConstructionType TC_MFR = new typekey.ConstructionType("MFR");
  
  /**
   * Masonry Non-Combustible (not reinforced)
   * Masonry Non-Combustible (not reinforced)
   */
  public static final typekey.ConstructionType TC_MNCNR = new typekey.ConstructionType("MNCNR");
  
  /**
   * Masonry Non-Combustible (reinforced)
   * Masonry Non-Combustible (reinforced)
   */
  public static final typekey.ConstructionType TC_MNCR = new typekey.ConstructionType("MNCR");
  
  /**
   * Non-Combustible (light steel)
   * Non-Combustible (light steel)
   */
  public static final typekey.ConstructionType TC_NCLS = new typekey.ConstructionType("NCLS");
  
  /**
   * Non-Combustible (not light steel)
   * Non-Combustible (not light steel)
   */
  public static final typekey.ConstructionType TC_NCNLS = new typekey.ConstructionType("NCNLS");
  
  public static final gw.pl.persistence.type.TypeListTypeReference<typekey.ConstructionType> TYPE = new com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache<typekey.ConstructionType>("ConstructionType");
  
  private final com.guidewire.commons.typelist.TypeKeyImplManager _typeKeyImplManager;
  
  private ConstructionType(java.lang.String code)  {
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
  public typekey.ConstructionType get() {
    return this;
  }
  
  public static typekey.ConstructionType get(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  public static java.util.List<typekey.ConstructionType> getAllTypeKeys() {
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
  
  public static typekey.ConstructionType getTypeKey(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  /**
   * All of the typekeys in this list, including retired typekeys.
   * @deprecated Use getTypeKeys(boolean)
   */
  @java.lang.Deprecated
  public static typekey.ConstructionType[] getTypeKeys() {
    return TYPE.get().getTypeKeys(true).toArray(new typekey.ConstructionType[]{});
  }
  
  public static java.util.List<typekey.ConstructionType> getTypeKeys(boolean includeRetired) {
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
  
  public typekey.ConstructionType getValue() {
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
    com.guidewire._generated.typekey.ConstructionTypeInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.TypeKeyFriendAccess<typekey.ConstructionType>() {
      public void clearCache(typekey.ConstructionType typeKey) {
        typeKey._typeKeyImplManager.resetTypeKeyImpl();
      }
      
      public com.guidewire.commons.entity.type2.TypeKeyInternal getInternalInterface(typekey.ConstructionType typeKey) {
        return typeKey._typeKeyImplManager.getTypeKeyImpl();
      }
      
      public typekey.ConstructionType newInstance(java.lang.String code) {
        return new typekey.ConstructionType(code);
      }
      
      
    });
  }
}