package typekey;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "VehicleSizeClass.tti;VehicleSizeClass.tix;VehicleSizeClass.ttx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
public class VehicleSizeClass implements gw.entity.TypeKey {
  /**
   * 0-70 CC
   * 0-70 CC
   */
  public static final typekey.VehicleSizeClass TC_0_70CC = new typekey.VehicleSizeClass("0-70CC");
  
  /**
   * 101-125 CC
   * 101-125 CC
   */
  public static final typekey.VehicleSizeClass TC_101_125CC = new typekey.VehicleSizeClass("101-125CC");
  
  /**
   * 126-200 CC
   * 126-200 CC
   */
  public static final typekey.VehicleSizeClass TC_126_200CC = new typekey.VehicleSizeClass("126-200CC");
  
  /**
   * 1 to 8 passenger
   * 1 to 8
   */
  public static final typekey.VehicleSizeClass TC_1_8 = new typekey.VehicleSizeClass("1-8");
  
  /**
   * 201-275 CC
   * 201-275 CC
   */
  public static final typekey.VehicleSizeClass TC_201_275CC = new typekey.VehicleSizeClass("201-275CC");
  
  /**
   * 21 to 60 passenger
   * 21 to 60
   */
  public static final typekey.VehicleSizeClass TC_21_60 = new typekey.VehicleSizeClass("21-60");
  
  /**
   * 276-350 CC
   * 276-350 CC
   */
  public static final typekey.VehicleSizeClass TC_276_350CC = new typekey.VehicleSizeClass("276-350CC");
  
  /**
   * 351-500 CC
   * 351-500 CC
   */
  public static final typekey.VehicleSizeClass TC_351_500CC = new typekey.VehicleSizeClass("351-500CC");
  
  /**
   * 501-650 CC
   * 501-650 CC
   */
  public static final typekey.VehicleSizeClass TC_501_650CC = new typekey.VehicleSizeClass("501-650CC");
  
  /**
   * 71-100 CC
   * 71-100 CC
   */
  public static final typekey.VehicleSizeClass TC_71_100CC = new typekey.VehicleSizeClass("71-100CC");
  
  /**
   * 9 to 20 passenger
   * 9 to 20
   */
  public static final typekey.VehicleSizeClass TC_9_20 = new typekey.VehicleSizeClass("9-20");
  
  /**
   * Extra heavy truck
   * Extra heavy truck (over 45000 lbs. GVW)
   */
  public static final typekey.VehicleSizeClass TC_EXTRAHEAVYTRUCK = new typekey.VehicleSizeClass("ExtraHeavyTruck");
  
  /**
   * Extra heavy truck-tractor
   * Extra heavy truck-tractor (over 45000 lbs. GCW)
   */
  public static final typekey.VehicleSizeClass TC_EXTRAHEAVYTRUCKTRACTOR = new typekey.VehicleSizeClass("ExtraHeavyTruckTractor");
  
  /**
   * Heavy truck
   * Light truck (20001-45000 lbs. GVW)
   */
  public static final typekey.VehicleSizeClass TC_HEAVYTRUCK = new typekey.VehicleSizeClass("HeavyTruck");
  
  /**
   * Heavy truck-tractor
   * Heavy truck-tractor (0-45000 lbs. GCW)
   */
  public static final typekey.VehicleSizeClass TC_HEAVYTRUCKTRACTOR = new typekey.VehicleSizeClass("HeavyTruckTractor");
  
  /**
   * Light truck
   * Light truck (0-10000 lbs. GVW)
   */
  public static final typekey.VehicleSizeClass TC_LIGHTTRUCK = new typekey.VehicleSizeClass("LightTruck");
  
  /**
   * Medium truck
   * Medium truck (10,001-20,000 lbs. GVW)
   */
  public static final typekey.VehicleSizeClass TC_MEDIUMTRUCK = new typekey.VehicleSizeClass("MediumTruck");
  
  /**
   * over 60 passenger
   * over 60
   */
  public static final typekey.VehicleSizeClass TC_OVER60 = new typekey.VehicleSizeClass("over60");
  
  /**
   * over 650 CC
   * over 650 CC
   */
  public static final typekey.VehicleSizeClass TC_OVER650CC = new typekey.VehicleSizeClass("over650CC");
  
  /**
   * Private passenger
   * Private passenger
   */
  public static final typekey.VehicleSizeClass TC_PRIVATEPASSENGER = new typekey.VehicleSizeClass("PrivatePassenger");
  
  /**
   * Semitrailer
   * Semitrailer
   */
  public static final typekey.VehicleSizeClass TC_SEMITRAILER = new typekey.VehicleSizeClass("Semitrailer");
  
  /**
   * Service or utility trailer
   * Service or utility trailer
   */
  public static final typekey.VehicleSizeClass TC_SERVICEUTILITYTRAILER = new typekey.VehicleSizeClass("ServiceUtilityTrailer");
  
  /**
   * Trailer
   * Trailer
   */
  public static final typekey.VehicleSizeClass TC_TRAILER = new typekey.VehicleSizeClass("Trailer");
  
  public static final gw.pl.persistence.type.TypeListTypeReference<typekey.VehicleSizeClass> TYPE = new com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache<typekey.VehicleSizeClass>("VehicleSizeClass");
  
  private final com.guidewire.commons.typelist.TypeKeyImplManager _typeKeyImplManager;
  
  private VehicleSizeClass(java.lang.String code)  {
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
  public typekey.VehicleSizeClass get() {
    return this;
  }
  
  public static typekey.VehicleSizeClass get(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  public static java.util.List<typekey.VehicleSizeClass> getAllTypeKeys() {
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
  
  public static typekey.VehicleSizeClass getTypeKey(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  /**
   * All of the typekeys in this list, including retired typekeys.
   * @deprecated Use getTypeKeys(boolean)
   */
  @java.lang.Deprecated
  public static typekey.VehicleSizeClass[] getTypeKeys() {
    return TYPE.get().getTypeKeys(true).toArray(new typekey.VehicleSizeClass[]{});
  }
  
  public static java.util.List<typekey.VehicleSizeClass> getTypeKeys(boolean includeRetired) {
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
  
  public typekey.VehicleSizeClass getValue() {
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
    com.guidewire._generated.typekey.VehicleSizeClassInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.TypeKeyFriendAccess<typekey.VehicleSizeClass>() {
      public void clearCache(typekey.VehicleSizeClass typeKey) {
        typeKey._typeKeyImplManager.resetTypeKeyImpl();
      }
      
      public com.guidewire.commons.entity.type2.TypeKeyInternal getInternalInterface(typekey.VehicleSizeClass typeKey) {
        return typeKey._typeKeyImplManager.getTypeKeyImpl();
      }
      
      public typekey.VehicleSizeClass newInstance(java.lang.String code) {
        return new typekey.VehicleSizeClass(code);
      }
      
      
    });
  }
}