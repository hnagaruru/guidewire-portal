package typekey;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CalcStepOperatorType.tti;CalcStepOperatorType.tix;CalcStepOperatorType.ttx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
public class CalcStepOperatorType implements gw.entity.TypeKey {
  /**
   * +
   * Addition
   */
  public static final typekey.CalcStepOperatorType TC_ADDITION = new typekey.CalcStepOperatorType("addition");
  
  /**
   * AND
   * And
   */
  public static final typekey.CalcStepOperatorType TC_AND = new typekey.CalcStepOperatorType("and");
  
  /**
   * RC
   * Ceiling
   */
  public static final typekey.CalcStepOperatorType TC_CEILING = new typekey.CalcStepOperatorType("ceiling");
  
  /**
   * /
   * Division
   */
  public static final typekey.CalcStepOperatorType TC_DIVISION = new typekey.CalcStepOperatorType("division");
  
  /**
   * RD
   * Down
   */
  public static final typekey.CalcStepOperatorType TC_DOWN = new typekey.CalcStepOperatorType("down");
  
  /**
   * =
   * Equals
   */
  public static final typekey.CalcStepOperatorType TC_EQUAL = new typekey.CalcStepOperatorType("equal");
  
  /**
   * RF
   * Floor
   */
  public static final typekey.CalcStepOperatorType TC_FLOOR = new typekey.CalcStepOperatorType("floor");
  
  /**
   * >
   * Greater Than
   */
  public static final typekey.CalcStepOperatorType TC_GREATERTHAN = new typekey.CalcStepOperatorType("greaterthan");
  
  /**
   * >=
   * Greater Than Or Equal
   */
  public static final typekey.CalcStepOperatorType TC_GREATERTHANOREQUAL = new typekey.CalcStepOperatorType("greaterthanorequal");
  
  /**
   * HD
   * Half Down
   */
  public static final typekey.CalcStepOperatorType TC_HALFDOWN = new typekey.CalcStepOperatorType("halfdown");
  
  /**
   * RE
   * Half Even
   */
  public static final typekey.CalcStepOperatorType TC_HALFEVEN = new typekey.CalcStepOperatorType("halfeven");
  
  /**
   * R
   * Half Up
   */
  public static final typekey.CalcStepOperatorType TC_HALFUP = new typekey.CalcStepOperatorType("halfup");
  
  /**
   * IN
   * is-one-of operator
   */
  public static final typekey.CalcStepOperatorType TC_IN = new typekey.CalcStepOperatorType("in");
  
  /**
   * <
   * Less Than
   */
  public static final typekey.CalcStepOperatorType TC_LESSTHAN = new typekey.CalcStepOperatorType("lessthan");
  
  /**
   * <=
   * Less Than Or Equal
   */
  public static final typekey.CalcStepOperatorType TC_LESSTHANOREQUAL = new typekey.CalcStepOperatorType("lessthanorequal");
  
  /**
   * *
   * Multiplication
   */
  public static final typekey.CalcStepOperatorType TC_MULTIPLICATION = new typekey.CalcStepOperatorType("multiplication");
  
  /**
   * NOT
   * Not
   */
  public static final typekey.CalcStepOperatorType TC_NOT = new typekey.CalcStepOperatorType("not");
  
  /**
   * <>
   * Not Equal
   */
  public static final typekey.CalcStepOperatorType TC_NOTEQUAL = new typekey.CalcStepOperatorType("notequal");
  
  /**
   * NOT IN
   * not-one-of operator
   */
  public static final typekey.CalcStepOperatorType TC_NOTIN = new typekey.CalcStepOperatorType("notin");
  
  /**
   * OR
   * Or
   */
  public static final typekey.CalcStepOperatorType TC_OR = new typekey.CalcStepOperatorType("or");
  
  /**
   * <--
   * Store
   */
  public static final typekey.CalcStepOperatorType TC_STORE = new typekey.CalcStepOperatorType("store");
  
  /**
   * -
   * Subtraction
   */
  public static final typekey.CalcStepOperatorType TC_SUBTRACTION = new typekey.CalcStepOperatorType("subtraction");
  
  /**
   * NR
   * No Rounding Necessary
   */
  public static final typekey.CalcStepOperatorType TC_UNNECESSARY = new typekey.CalcStepOperatorType("unnecessary");
  
  /**
   * RU
   * Up
   */
  public static final typekey.CalcStepOperatorType TC_UP = new typekey.CalcStepOperatorType("up");
  
  public static final gw.entity.ITypeFilter<typekey.CalcStepOperatorType> TF_COMPARATORS = new com.guidewire.commons.entity.type2.TypeFilterImpl<typekey.CalcStepOperatorType>("CalcStepOperatorType", "Comparators");
  
  public static final gw.entity.ITypeFilter<typekey.CalcStepOperatorType> TF_CONDITIONALS = new com.guidewire.commons.entity.type2.TypeFilterImpl<typekey.CalcStepOperatorType>("CalcStepOperatorType", "Conditionals");
  
  public static final gw.entity.ITypeFilter<typekey.CalcStepOperatorType> TF_MAINCOLUMNOPERATORS = new com.guidewire.commons.entity.type2.TypeFilterImpl<typekey.CalcStepOperatorType>("CalcStepOperatorType", "MainColumnOperators");
  
  public static final gw.entity.ITypeFilter<typekey.CalcStepOperatorType> TF_TYPEKEYCOMPARATORS = new com.guidewire.commons.entity.type2.TypeFilterImpl<typekey.CalcStepOperatorType>("CalcStepOperatorType", "TypekeyComparators");
  
  public static final gw.pl.persistence.type.TypeListTypeReference<typekey.CalcStepOperatorType> TYPE = new com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache<typekey.CalcStepOperatorType>("CalcStepOperatorType");
  
  private final com.guidewire.commons.typelist.TypeKeyImplManager _typeKeyImplManager;
  
  private CalcStepOperatorType(java.lang.String code)  {
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
  public typekey.CalcStepOperatorType get() {
    return this;
  }
  
  public static typekey.CalcStepOperatorType get(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  public static java.util.List<typekey.CalcStepOperatorType> getAllTypeKeys() {
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
  
  public static typekey.CalcStepOperatorType getTypeKey(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  /**
   * All of the typekeys in this list, including retired typekeys.
   * @deprecated Use getTypeKeys(boolean)
   */
  @java.lang.Deprecated
  public static typekey.CalcStepOperatorType[] getTypeKeys() {
    return TYPE.get().getTypeKeys(true).toArray(new typekey.CalcStepOperatorType[]{});
  }
  
  public static java.util.List<typekey.CalcStepOperatorType> getTypeKeys(boolean includeRetired) {
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
  
  public typekey.CalcStepOperatorType getValue() {
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
    com.guidewire._generated.typekey.CalcStepOperatorTypeInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.TypeKeyFriendAccess<typekey.CalcStepOperatorType>() {
      public void clearCache(typekey.CalcStepOperatorType typeKey) {
        typeKey._typeKeyImplManager.resetTypeKeyImpl();
      }
      
      public com.guidewire.commons.entity.type2.TypeKeyInternal getInternalInterface(typekey.CalcStepOperatorType typeKey) {
        return typeKey._typeKeyImplManager.getTypeKeyImpl();
      }
      
      public typekey.CalcStepOperatorType newInstance(java.lang.String code) {
        return new typekey.CalcStepOperatorType(code);
      }
      
      
    });
  }
}