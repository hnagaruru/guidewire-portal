package typekey;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CalcRoutineParamName.tti;CalcRoutineParamName.tix;CalcRoutineParamName.ttx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
public class CalcRoutineParamName implements gw.entity.TypeKey {
  /**
   * AssignedDriver
   * Assigned Driver
   */
  public static final typekey.CalcRoutineParamName TC_ASSIGNEDDRIVER = new typekey.CalcRoutineParamName("assigneddriver");
  
  /**
   * Building
   * Building
   */
  public static final typekey.CalcRoutineParamName TC_BUILDING = new typekey.CalcRoutineParamName("building");
  
  /**
   * CostData
   * CostData
   */
  public static final typekey.CalcRoutineParamName TC_COSTDATA = new typekey.CalcRoutineParamName("costdata");
  
  /**
   * Coverage
   * Coverage
   */
  public static final typekey.CalcRoutineParamName TC_COVERAGE = new typekey.CalcRoutineParamName("coverage");
  
  /**
   * CPBldgCoverage
   * CP Building Coverage
   */
  public static final typekey.CalcRoutineParamName TC_CPBLDGCOV = new typekey.CalcRoutineParamName("cpbldgcov");
  
  /**
   * CPBPPCoverage
   * CP Business Personal Property Coverage
   */
  public static final typekey.CalcRoutineParamName TC_CPBPPCOV = new typekey.CalcRoutineParamName("cpbppcov");
  
  /**
   * CPDeductibleFactorName
   * CP Deductible Factor Name
   */
  public static final typekey.CalcRoutineParamName TC_CPDEDUCTFACTORNAME = new typekey.CalcRoutineParamName("cpdeductfactorname");
  
  /**
   * CurrentDriver
   * Current Driver
   */
  public static final typekey.CalcRoutineParamName TC_CURRENTDRIVER = new typekey.CalcRoutineParamName("currentdriver");
  
  /**
   * DriverAssignmentInfo
   * Driver Assignment Information
   */
  public static final typekey.CalcRoutineParamName TC_DRIVERASSIGNMENTINFO = new typekey.CalcRoutineParamName("driverassignmentinfo");
  
  /**
   * HOPBasePremiumInfo
   * HOP Base Premium Information
   */
  public static final typekey.CalcRoutineParamName TC_HOPBASEPREMIUMINFO = new typekey.CalcRoutineParamName("hopbasepremiuminfo");
  
  /**
   * HOPCoveragePart
   * HOP Coverage Part
   */
  public static final typekey.CalcRoutineParamName TC_HOPCOVERAGEPART = new typekey.CalcRoutineParamName("hopcoveragepart");
  
  /**
   * HOPDwelling
   * HOP Dwelling
   */
  public static final typekey.CalcRoutineParamName TC_HOPDWELLING = new typekey.CalcRoutineParamName("hopdwelling");
  
  /**
   * HOP Modifier Code
   * HOP Modifier Code to be used in Modifier Rate lookup
   */
  public static final typekey.CalcRoutineParamName TC_HOPMODIFIER = new typekey.CalcRoutineParamName("hopmodifier");
  
  /**
   * HOP Modifier Basis
   * HOP Basis to be used for Rating Modification
   */
  public static final typekey.CalcRoutineParamName TC_HOPMODIFIERBASIS = new typekey.CalcRoutineParamName("hopmodifierbasis");
  
  /**
   * HOP Modifier Value
   * HOP Modifier Value to be used in Modifier Rate lookup
   */
  public static final typekey.CalcRoutineParamName TC_HOPMODIFIERVALUE = new typekey.CalcRoutineParamName("hopmodifiervalue");
  
  /**
   * PIPNJCoverage
   * PA PIP New Jersey Coverage
   */
  public static final typekey.CalcRoutineParamName TC_PAPIPNJ = new typekey.CalcRoutineParamName("papipnj");
  
  /**
   * PolicyLine
   * Policy Line
   */
  public static final typekey.CalcRoutineParamName TC_POLICYLINE = new typekey.CalcRoutineParamName("policyline");
  
  /**
   * PreviousTermAmount
   * Previous term amount, e.g. for renewal capping
   */
  public static final typekey.CalcRoutineParamName TC_PREVIOUSTERMAMOUNT = new typekey.CalcRoutineParamName("previoustermamount");
  
  /**
   * ProratedPremiumTotal
   * The total prorated premium amount
   */
  public static final typekey.CalcRoutineParamName TC_PRORATEDPREMIUMTOTAL = new typekey.CalcRoutineParamName("proratedpremiumtotal");
  
  /**
   * RateDate
   * Rate Date
   */
  public static final typekey.CalcRoutineParamName TC_RATEDATE = new typekey.CalcRoutineParamName("ratedate");
  
  /**
   * RatingInfo
   * Rating Information
   */
  public static final typekey.CalcRoutineParamName TC_RATINGINFO = new typekey.CalcRoutineParamName("ratinginfo");
  
  /**
   * State
   * State
   */
  public static final typekey.CalcRoutineParamName TC_STATE = new typekey.CalcRoutineParamName("state");
  
  /**
   * TaxableBasis
   * Taxable Basis
   */
  public static final typekey.CalcRoutineParamName TC_TAXABLEBASIS = new typekey.CalcRoutineParamName("taxablebasis");
  
  /**
   * Vehicle
   * Vehicle
   */
  public static final typekey.CalcRoutineParamName TC_VEHICLE = new typekey.CalcRoutineParamName("vehicle");
  
  public static final gw.pl.persistence.type.TypeListTypeReference<typekey.CalcRoutineParamName> TYPE = new com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache<typekey.CalcRoutineParamName>("CalcRoutineParamName");
  
  private final com.guidewire.commons.typelist.TypeKeyImplManager _typeKeyImplManager;
  
  private CalcRoutineParamName(java.lang.String code)  {
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
  public typekey.CalcRoutineParamName get() {
    return this;
  }
  
  public static typekey.CalcRoutineParamName get(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  public static java.util.List<typekey.CalcRoutineParamName> getAllTypeKeys() {
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
  
  public static typekey.CalcRoutineParamName getTypeKey(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  /**
   * All of the typekeys in this list, including retired typekeys.
   * @deprecated Use getTypeKeys(boolean)
   */
  @java.lang.Deprecated
  public static typekey.CalcRoutineParamName[] getTypeKeys() {
    return TYPE.get().getTypeKeys(true).toArray(new typekey.CalcRoutineParamName[]{});
  }
  
  public static java.util.List<typekey.CalcRoutineParamName> getTypeKeys(boolean includeRetired) {
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
  
  public typekey.CalcRoutineParamName getValue() {
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
    com.guidewire._generated.typekey.CalcRoutineParamNameInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.TypeKeyFriendAccess<typekey.CalcRoutineParamName>() {
      public void clearCache(typekey.CalcRoutineParamName typeKey) {
        typeKey._typeKeyImplManager.resetTypeKeyImpl();
      }
      
      public com.guidewire.commons.entity.type2.TypeKeyInternal getInternalInterface(typekey.CalcRoutineParamName typeKey) {
        return typeKey._typeKeyImplManager.getTypeKeyImpl();
      }
      
      public typekey.CalcRoutineParamName newInstance(java.lang.String code) {
        return new typekey.CalcRoutineParamName(code);
      }
      
      
    });
  }
}