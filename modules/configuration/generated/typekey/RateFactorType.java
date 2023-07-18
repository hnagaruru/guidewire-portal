package typekey;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RateFactorType.tti;RateFactorType.tix;RateFactorType.ttx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
public class RateFactorType implements gw.entity.TypeKey {
  /**
   * Building features
   * Age, condition, and unusual structural features
   */
  public static final typekey.RateFactorType TC_BUILDING = new typekey.RateFactorType("Building");
  
  /**
   * Employees
   * Selection, training, supervision, and experience
   */
  public static final typekey.RateFactorType TC_EMPLOYEES = new typekey.RateFactorType("Employees");
  
  /**
   * Employee qualifications
   * Employee qualifications
   */
  public static final typekey.RateFactorType TC_EMPQUAL = new typekey.RateFactorType("EmpQual");
  
  /**
   * Equipment - Type, Condition, Care
   * Equipment - Type, Condition, Care
   */
  public static final typekey.RateFactorType TC_EQUIPMENT = new typekey.RateFactorType("Equipment");
  
  /**
   * Extraordinary safety programs applicable to workplace
   * Extraordinary safety programs applicable to workplace
   */
  public static final typekey.RateFactorType TC_EXTRASAFETYPROGRAMS = new typekey.RateFactorType("ExtraSafetyPrograms");
  
  /**
   * Location
   * Accessibility, congestion, and exposures
   */
  public static final typekey.RateFactorType TC_LOCATION = new typekey.RateFactorType("Location");
  
  /**
   * Location - Inside Premises
   * Exposure to loss inside the premises
   */
  public static final typekey.RateFactorType TC_LOCATIONINSIDE = new typekey.RateFactorType("LocationInside");
  
  /**
   * Location - Outside Premises
   * Exposure to loss outside the premises
   */
  public static final typekey.RateFactorType TC_LOCATIONOUTSIDE = new typekey.RateFactorType("LocationOutside");
  
  /**
   * Management
   * Cooperation in matters of safeguarding and proper handling of the property covered
   */
  public static final typekey.RateFactorType TC_MANAGEMENT = new typekey.RateFactorType("Management");
  
  /**
   * Availability of medical facilities in or near workplace
   * Availability of medical facilities in or near workplace
   */
  public static final typekey.RateFactorType TC_MEDFACILITIES = new typekey.RateFactorType("MedFacilities");
  
  /**
   * Cooperation with carrier by management
   * Cooperation with carrier by management
   */
  public static final typekey.RateFactorType TC_MGMTCOOPERATION = new typekey.RateFactorType("MgmtCooperation");
  
  /**
   * Other risk characteristics not addressed above (specified)
   * Other risk characteristics not addressed above (specified)
   */
  public static final typekey.RateFactorType TC_OTHERRISK = new typekey.RateFactorType("OtherRisk");
  
  /**
   * Considerations related to policy expenses
   * Considerations related to policy expenses
   */
  public static final typekey.RateFactorType TC_POLICYEXPENSE = new typekey.RateFactorType("PolicyExpense");
  
  /**
   * Premises and equipment
   * Care, condition, and type
   */
  public static final typekey.RateFactorType TC_PREMISES = new typekey.RateFactorType("Premises");
  
  /**
   * Protection
   * Not otherwise recognized
   */
  public static final typekey.RateFactorType TC_PROTECTION = new typekey.RateFactorType("Protection");
  
  /**
   * Risk elements not addressed in the classification plan
   * Risk elements not addressed in the classification plan
   */
  public static final typekey.RateFactorType TC_RISKNOTINCLASSIFPLAN = new typekey.RateFactorType("RiskNotInClassifPlan");
  
  /**
   * Safety equipment/devices present in/missing from workplace
   * Safety equipment/devices present in/missing from workplace
   */
  public static final typekey.RateFactorType TC_SAFETYEQUIPMENT = new typekey.RateFactorType("SafetyEquipment");
  
  /**
   * Safety Organization
   * Safety literature, award, and penalty system
   */
  public static final typekey.RateFactorType TC_SAFETYORGANIZATION = new typekey.RateFactorType("SafetyOrganization");
  
  /**
   * Dispersion or Concentration of Values Insured
   * Dispersion or Concentration of Values Insured
   */
  public static final typekey.RateFactorType TC_VALUESINSURED = new typekey.RateFactorType("ValuesInsured");
  
  /**
   * Workplace maintenance or operations
   * Workplace maintenance or operations
   */
  public static final typekey.RateFactorType TC_WORKPLACEMAINT = new typekey.RateFactorType("WorkplaceMaint");
  
  public static final gw.pl.persistence.type.TypeListTypeReference<typekey.RateFactorType> TYPE = new com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache<typekey.RateFactorType>("RateFactorType");
  
  private final com.guidewire.commons.typelist.TypeKeyImplManager _typeKeyImplManager;
  
  private RateFactorType(java.lang.String code)  {
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
  public typekey.RateFactorType get() {
    return this;
  }
  
  public static typekey.RateFactorType get(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  public static java.util.List<typekey.RateFactorType> getAllTypeKeys() {
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
  
  public static typekey.RateFactorType getTypeKey(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  /**
   * All of the typekeys in this list, including retired typekeys.
   * @deprecated Use getTypeKeys(boolean)
   */
  @java.lang.Deprecated
  public static typekey.RateFactorType[] getTypeKeys() {
    return TYPE.get().getTypeKeys(true).toArray(new typekey.RateFactorType[]{});
  }
  
  public static java.util.List<typekey.RateFactorType> getTypeKeys(boolean includeRetired) {
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
  
  public typekey.RateFactorType getValue() {
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
    com.guidewire._generated.typekey.RateFactorTypeInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.TypeKeyFriendAccess<typekey.RateFactorType>() {
      public void clearCache(typekey.RateFactorType typeKey) {
        typeKey._typeKeyImplManager.resetTypeKeyImpl();
      }
      
      public com.guidewire.commons.entity.type2.TypeKeyInternal getInternalInterface(typekey.RateFactorType typeKey) {
        return typeKey._typeKeyImplManager.getTypeKeyImpl();
      }
      
      public typekey.RateFactorType newInstance(java.lang.String code) {
        return new typekey.RateFactorType(code);
      }
      
      
    });
  }
}