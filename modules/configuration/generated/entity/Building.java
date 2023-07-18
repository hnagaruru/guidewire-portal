package entity;

/**
 * Building
 * Building
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Building.eti;Building.eix;Building.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "Building")
public class Building extends com.guidewire.pl.persistence.code.BeanBase implements entity.EffDated, com.guidewire.pl.system.entity.DoesNotValidateOnCommit, gw.api.copier.EffDatedCopyable, gw.api.logicalmatch.EffDatedLogicalMatcher {
  public static final gw.pl.persistence.type.EffDatedEntityTypeReference<entity.Building, entity.PolicyPeriod> TYPE = new com.guidewire.commons.metadata.types.EffDatedEntityIntrinsicTypeReference<entity.Building, entity.PolicyPeriod>("entity.Building");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ALARMCERTIFICATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AlarmCertificate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ALARMCERTIFICATION_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "AlarmCertification");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ALARMCLASS_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "AlarmClass");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ALARMEXPIRATION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AlarmExpiration");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ALARMGRADE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "AlarmGrade");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEPARTITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchivePartition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> AREAFINISHED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AreaFinished");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> AREALEASED_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "AreaLeased");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> AREAUNFINISHED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AreaUnfinished");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BASEDONVALUE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "BasedOnValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BASEMENTAREA_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BasementArea");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BRANCHVALUE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "BranchValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> BUILDINGALARMTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "BuildingAlarmType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> BUILDINGIMPROVEMENTS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "BuildingImprovements");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BUILDINGNUM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BuildingNum");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> BUILDINGSIDES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "BuildingSides");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> BURGLARYSAFEGUARD_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "BurglarySafeguard");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CHANGETYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ChangeType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CONSTRUCTIONTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ConstructionType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Description");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EFFECTIVEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EffectiveDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> EFFECTIVENESSGRADE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "EffectivenessGrade");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPIRATIONDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExpirationDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FIXED_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Fixed");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FROZENSET_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "FrozenSet");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> HEATINGBOILERELSEWHERE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "HeatingBoilerElsewhere");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> HEATINGBOILERONPREMISES_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "HeatingBoilerOnPremises");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> INTERESTTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "InterestType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NUMBASEMENTS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NumBasements");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NUMSTORIES_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NumStories");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NUMUNITS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NumUnits");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PERCENTOCCUPIED_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "PercentOccupied");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PERCENTVACANT_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "PercentVacant");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> POLICYLOCATION_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "PolicyLocation");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> RENTEDOTHERS_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "RentedOthers");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ROOFTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "RoofType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SPRINKLERCOVERAGE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "SprinklerCoverage");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SUBTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Subtype");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TOTALAREA_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TotalArea");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> WINDRATING_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "WindRating");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> YEARBUILT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "YearBuilt");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.BuildingInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BASEDONID_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods.BASEDONID_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BRANCHID_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods.BRANCHID_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FIXEDID_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods.FIXEDID_DYNPROP;
  
  /**
   * Constructs a new instance of this entity in the given branch.
   */
  public Building(entity.PolicyPeriod branch)  {
    this((java.lang.Void)null);
    com.guidewire._generated.entity.PolicyPeriodInternalAccess.FRIEND_ACCESSOR.access().getInternalInterface(branch).initNewBeanInstance(this, java.util.Arrays.asList());
  }
  
  /**
   * Constructs a new <em>unsliced</em> instance of this entity in the given branch, and effective for the given date range.
   */
  public Building(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    this((java.lang.Void)null);
    com.guidewire._generated.entity.PolicyPeriodInternalAccess.FRIEND_ACCESSOR.access().getInternalInterface(branch).initUnslicedBeanInstance(this, effectiveDate, expirationDate, java.util.Arrays.asList());
  }
  
  protected Building(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.BuildingInternal __createInternalInterface() {
    return new _Internal();
  }
  
  protected final com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
    if(_delegateManager == null) {
      _delegateManager  =  com.guidewire.pl.persistence.code.DelegateLoader.newInstance(this, __getDelegateMap());
    };
    return _delegateManager;
  }
  
  protected com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap() {
    return DELEGATE_MAP;
  }
  
  protected com.guidewire._generated.entity.BuildingInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Adds the given element to the BuildingImprovements array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBuildingImprovements(entity.BuildingImprovement element) {
    __getInternalInterface().addArrayElement(BUILDINGIMPROVEMENTS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the BuildingSides array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBuildingSides(entity.BuildingSide element) {
    __getInternalInterface().addArrayElement(BUILDINGSIDES_PROP.get(), element);
  }
  
  public entity.Building clone() {
    return (entity.Building)__getInternalInterface().cloneUntyped();
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  public void copyBasicFieldsFromBeanUntyped(entity.EffDated bean) {
    ((gw.api.copier.EffDatedCopyable)__getDelegateManager().getImplementation("gw.api.copier.EffDatedCopyable")).copyBasicFieldsFromBeanUntyped(bean);
  }
  
  public void copyFromBeanUntyped(entity.EffDated bean) {
    ((gw.api.copier.EffDatedCopyable)__getDelegateManager().getImplementation("gw.api.copier.EffDatedCopyable")).copyFromBeanUntyped(bean);
  }
  
  public java.util.List<entity.EffDated> findMatchesInPeriodUntyped(entity.PolicyPeriod period, boolean excludeSameFixedID) {
    return ((gw.api.logicalmatch.EffDatedLogicalMatcher)__getDelegateManager().getImplementation("gw.api.logicalmatch.EffDatedLogicalMatcher")).findMatchesInPeriodUntyped(period, excludeSameFixedID);
  }
  
  public java.lang.Object genKey() {
    return ((gw.api.logicalmatch.EffDatedLogicalMatcher)__getDelegateManager().getImplementation("gw.api.logicalmatch.EffDatedLogicalMatcher")).genKey();
  }
  
  /**
   * Gets the value of the AlarmCertificate field.
   * Alarm certificate number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAlarmCertificate() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ALARMCERTIFICATE_PROP.get());
  }
  
  /**
   * Gets the value of the AlarmCertification field.
   * Alarm certification
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AlarmCertification getAlarmCertification() {
    return (typekey.AlarmCertification)__getInternalInterface().getFieldValue(ALARMCERTIFICATION_PROP.get());
  }
  
  /**
   * Gets the value of the AlarmClass field.
   * Alarm class
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AlarmClass getAlarmClass() {
    return (typekey.AlarmClass)__getInternalInterface().getFieldValue(ALARMCLASS_PROP.get());
  }
  
  /**
   * Gets the value of the AlarmExpiration field.
   * Alarm expiration date
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getAlarmExpiration() {
    return (java.util.Date)__getInternalInterface().getFieldValue(ALARMEXPIRATION_PROP.get());
  }
  
  /**
   * Gets the value of the AlarmGrade field.
   * Alarm grade
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AlarmGrade getAlarmGrade() {
    return (typekey.AlarmGrade)__getInternalInterface().getFieldValue(ALARMGRADE_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getArchivePartition() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(ARCHIVEPARTITION_PROP.get());
  }
  
  /**
   * Gets the value of the AreaFinished field.
   * Building finished square footage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getAreaFinished() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(AREAFINISHED_PROP.get());
  }
  
  /**
   * Gets the value of the AreaLeased field.
   * Percentage of area leased
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AreaLeased getAreaLeased() {
    return (typekey.AreaLeased)__getInternalInterface().getFieldValue(AREALEASED_PROP.get());
  }
  
  /**
   * Gets the value of the AreaUnfinished field.
   * Building unfinished square footage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getAreaUnfinished() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(AREAUNFINISHED_PROP.get());
  }
  
  public entity.Building getBasedOn() {
    return (entity.Building)__getInternalInterface().getBasedOnUntyped();
  }
  
  /**
   * Return the bean from which this bean was based (cloned), or null if this
   * bean is new to this branch. This value will never change for the life of
   * the bean as its set when the bean is first created, either as a bean new to
   * this branch (in which case it's null) or when this bean is cloned from a
   * bean in an existing branch when its branch is created.
   * <p/>
   * When compiling DiffItems a bean is always compared to it's based-on bean to
   * discover what fields on it have changed. If there is no based-on bean then
   * we know that this bean was new to this branch.
   * @return Bean on which this bean was based (cloned), or null if this bean is
   *         new to this branch.
   */
  public entity.EffDated getBasedOnUntyped() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getBasedOnUntyped();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Building getBasedOnValue() {
    return (entity.Building)__getInternalInterface().getFieldValue(BASEDONVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the BasementArea field.
   * Area of the basement
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBasementArea() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(BASEMENTAREA_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  public entity.PolicyPeriod getBranch() {
    return (entity.PolicyPeriod)getBranchUntyped();
  }
  
  /**
   * Return the branch associated with this bean. This can never be null, and
   * will never change. A bean will always be associated with the same branch.
   * @return Branch associated with this bean
   */
  public entity.EffDatedBranch getBranchUntyped() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getBranchUntyped();
  }
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue() {
    return (entity.PolicyPeriod)__getInternalInterface().getFieldValue(BRANCHVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the BuildingAlarmType field.
   * Building alarm type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BuildingAlarmType getBuildingAlarmType() {
    return (typekey.BuildingAlarmType)__getInternalInterface().getFieldValue(BUILDINGALARMTYPE_PROP.get());
  }
  
  /**
   * Get BuildingImprovement by named type
   * @param buildingImprovementTypeStr the type to match
   * @return the building improvement
   */
  public entity.BuildingImprovement getBuildingImprovement(java.lang.String buildingImprovementTypeStr) {
    return ((com.guidewire.pc.domain.policy.period.BuildingPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.BuildingPublicMethods")).getBuildingImprovement(buildingImprovementTypeStr);
  }
  
  /**
   * Get BuildingImprovement by type code
   * @param typeKey the type to match
   * @return the building improvement
   */
  public entity.BuildingImprovement getBuildingImprovement(typekey.BuildingImprType typeKey) {
    return ((com.guidewire.pc.domain.policy.period.BuildingPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.BuildingPublicMethods")).getBuildingImprovement(typeKey);
  }
  
  /**
   * Gets the value of the BuildingImprovements field.
   * Improvements for building
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BuildingImprovement[] getBuildingImprovements() {
    return (entity.BuildingImprovement[])__getInternalInterface().getFieldValue(BUILDINGIMPROVEMENTS_PROP.get());
  }
  
  /**
   * Gets the value of the BuildingNum field.
   * The building number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBuildingNum() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(BUILDINGNUM_PROP.get());
  }
  
  /**
   * Get BuildingSide by named BuildingSideType
   * @param buildingSideTypeStr the type to match
   * @return BuildingSide
   */
  public entity.BuildingSide getBuildingSide(java.lang.String buildingSideTypeStr) {
    return ((com.guidewire.pc.domain.policy.period.BuildingPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.BuildingPublicMethods")).getBuildingSide(buildingSideTypeStr);
  }
  
  /**
   * Get BuildingSide by BuildingSideType typecode
   * @param typeKey the type to match
   * @return BuildingSide
   */
  public entity.BuildingSide getBuildingSide(typekey.BuildingSideType typeKey) {
    return ((com.guidewire.pc.domain.policy.period.BuildingPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.BuildingPublicMethods")).getBuildingSide(typeKey);
  }
  
  /**
   * Gets the value of the BuildingSides field.
   * Sides for building
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BuildingSide[] getBuildingSides() {
    return (entity.BuildingSide[])__getInternalInterface().getFieldValue(BUILDINGSIDES_PROP.get());
  }
  
  /**
   * Gets the value of the BurglarySafeguard field.
   * Burglary safeguard
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BurglarySafeguard getBurglarySafeguard() {
    return (typekey.BurglarySafeguard)__getInternalInterface().getFieldValue(BURGLARYSAFEGUARD_PROP.get());
  }
  
  /**
   * Gets the value of the ChangeType field.
   * Type of change made to this row
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.EffDatedChangeType getChangeType() {
    return (typekey.EffDatedChangeType)__getInternalInterface().getFieldValue(CHANGETYPE_PROP.get());
  }
  
  /**
   * Gets the value of the ConstructionType field.
   * Type of building construction
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ConstructionType getConstructionType() {
    return (typekey.ConstructionType)__getInternalInterface().getFieldValue(CONSTRUCTIONTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the CreateTime field.
   * Timestamp when the object was created
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCreateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(CREATETIME_PROP.get());
  }
  
  /**
   * Gets the value of the CreateUser field.
   * User who created the object
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getCreateUser() {
    return (entity.User)__getInternalInterface().getFieldValue(CREATEUSER_PROP.get());
  }
  
  /**
   * Gets the value of the Description field.
   * Description of the building
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
  }
  
  /**
   * Get an effective date independent key for this bean. This key will include
   * the BranchId and the FixedId. This is the key for the "logical" bean.
   * <p/>
   * An EffDatedKey only really applies to EffDateds as an EffDatedBranch is
   * the same throughout its effective range (or its period range) so there is
   * no difference between the "logical" bean and the actual bean.
   */
  public gw.pl.persistence.core.effdate.EffDatedKey getEffDatedKey() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getEffDatedKey();
  }
  
  /**
   * Get the date when this bean starts being effective.
   * @return Date when this bean starts being effective.
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEffectiveDate() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getEffectiveDate();
  }
  
  /**
   * Gets the value of the EffectivenessGrade field.
   * Building code effectiveness grade
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.EffectivenessGrade getEffectivenessGrade() {
    return (typekey.EffectivenessGrade)__getInternalInterface().getFieldValue(EFFECTIVENESSGRADE_PROP.get());
  }
  
  /**
   * Get the date when this bean expires.
   * @return Date when this bean expires.
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getExpirationDate() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getExpirationDate();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Building getFixed() {
    return (entity.Building)__getInternalInterface().getFieldValue(FIXED_PROP.get());
  }
  
  /**
   * Get the logical ID for this bean, not the row ID. All row
   * @return Logical ID for this bean, not the row ID.
   */
  public gw.pl.persistence.core.Key getFixedId() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getFixedId();
  }
  
  /**
   * Gets the value of the FrozenSet field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FrozenSet getFrozenSet() {
    return (entity.FrozenSet)__getInternalInterface().getFieldValue(FROZENSET_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the InterestType field.
   * Types of interest
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.InterestType getInterestType() {
    return (typekey.InterestType)__getInternalInterface().getFieldValue(INTERESTTYPE_PROP.get());
  }
  
  /**
   * Get the version list for an effective dated foreign key.  You need this
   * method because it's the only way to get the version list for a foreign key
   * bean if you're in window mode. You can't call this.getFKBean().getVersionListUntyped()
   * since you can't traverse the array and there are no methods on
   * EffDatedVersionList to access a FK (only arrays).
   * <p/>
   * This bean can be unsliced or sliced when this is called.
   * @param link Effective dated foreign key
   * @return Version list for an effective dated foreign key
   */
  public gw.pl.persistence.core.effdate.EffDatedVersionList getLinkVersionList(gw.entity.ILinkPropertyInfo link) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getLinkVersionList(link);
  }
  
  /**
   * Gets the value of the NumBasements field.
   * Number of basements
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNumBasements() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(NUMBASEMENTS_PROP.get());
  }
  
  /**
   * Gets the value of the NumStories field.
   * Number of stories
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNumStories() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(NUMSTORIES_PROP.get());
  }
  
  /**
   * Gets the value of the NumUnits field.
   * Number of units
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNumUnits() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(NUMUNITS_PROP.get());
  }
  
  /**
   * Gets the value of the PercentOccupied field.
   * % occupied
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PercentOccupied getPercentOccupied() {
    return (typekey.PercentOccupied)__getInternalInterface().getFieldValue(PERCENTOCCUPIED_PROP.get());
  }
  
  /**
   * Gets the value of the PercentVacant field.
   * % vacancy
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PercentByTens getPercentVacant() {
    return (typekey.PercentByTens)__getInternalInterface().getFieldValue(PERCENTVACANT_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyLocation field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLocation getPolicyLocation() {
    return (entity.PolicyLocation)__getInternalInterface().getFieldValue(POLICYLOCATION_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the RentedOthers field.
   * Rented to Others
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PercentByTens getRentedOthers() {
    return (typekey.PercentByTens)__getInternalInterface().getFieldValue(RENTEDOTHERS_PROP.get());
  }
  
  /**
   * Gets the value of the RoofType field.
   * Roof type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RoofType getRoofType() {
    return (typekey.RoofType)__getInternalInterface().getFieldValue(ROOFTYPE_PROP.get());
  }
  
  public entity.Building getSlice(java.util.Date sliceDate) {
    return (entity.Building)getSliceUntyped(sliceDate);
  }
  
  /**
   * Date which this bean is "sliced" or viewed. If you traverse from this bean
   * to another bean or beans via a link or array, only beans that are effective
   * at this slice date will be returned. The beans that are returned will be
   * sliced at this date as well. If NULL then the bean is in "window" mode.
   * <p/>
   * In most cases a bean will be sliced, window mode is used in special cases.
   * @return Date which bean is sliced or null if in window mode.
   */
  public java.util.Date getSliceDate() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getSliceDate();
  }
  
  /**
   * Slice this bean at a particular date. This bean can be unsliced or sliced
   * when this method is called. The slice date must be within the effective
   * range of this bean or an exception will be thrown. If you want to get at
   * the version of this "logical" bean at a date outside of this particular
   * bean's effective range then use this.getVersionListUntyped().getVersionAsOf(sliceDate).getSliceUntyped(sliceDate).
   * @param sliceDate Date at which to slice this bean.
   * @return Sliced version of the bean.
   */
  public entity.EffDatedBase getSliceUntyped(java.util.Date sliceDate) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getSliceUntyped(sliceDate);
  }
  
  /**
   * Gets the value of the SprinklerCoverage field.
   * % covered by sprinkler
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Sprinklered getSprinklerCoverage() {
    return (typekey.Sprinklered)__getInternalInterface().getFieldValue(SPRINKLERCOVERAGE_PROP.get());
  }
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Building getSubtype() {
    return (typekey.Building)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the TotalArea field.
   * Total area (excluding the basement)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getTotalArea() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(TOTALAREA_PROP.get());
  }
  
  public entity.Building getUnsliced() {
    return (entity.Building)getUnslicedUntyped();
  }
  
  /**
   * Return the unsliced version of this bean. If the bean is already unsliced
   * then returns itself.
   * @return An unsliced version of this bean. If the bean is already unsliced
   *         then returns itself.
   */
  public entity.EffDated getUnslicedUntyped() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getUnslicedUntyped();
  }
  
  /**
   * Gets the value of the UpdateTime field.
   * Timestamp when the object was last updated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getUpdateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(UPDATETIME_PROP.get());
  }
  
  /**
   * Gets the value of the UpdateUser field.
   * User who last updated the object
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getUpdateUser() {
    return (entity.User)__getInternalInterface().getFieldValue(UPDATEUSER_PROP.get());
  }
  
  public entity.windowed.BuildingVersionList getVersionList() {
    return (entity.windowed.BuildingVersionList)getVersionListUntyped();
  }
  
  /**
   * Get the version list for this bean. An EffDatedVersionList is a
   * representation of a logical bean through its effective range. For example,
   * if a bean has changes at three separate effective dates then the version
   * list will comprise 3 versions of the bean, one for each of these dates.
   * <p/>
   * You can use an EffDatedVersionList to traverse from this bean to other
   * linked beans in window mode. Recall that in window mode you cannot traverse
   * links directly from the bean.
   * <p/>
   * Although an EffDatedBranch only has a single version throughout its
   * effective range you can still get its EffDatedVersionList in order to
   * navigate in window mode from the branch to its related EffDateds.
   * @return Version list for this bean
   */
  public gw.pl.persistence.core.effdate.EffDatedVersionList getVersionListUntyped() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getVersionListUntyped();
  }
  
  /**
   * Gets the value of the WindRating field.
   * Rating against wind damage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.WindRating getWindRating() {
    return (typekey.WindRating)__getInternalInterface().getFieldValue(WINDRATING_PROP.get());
  }
  
  /**
   * Gets the value of the YearBuilt field.
   * Year built
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getYearBuilt() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(YEARBUILT_PROP.get());
  }
  
  /**
   * Given a date, check whether it falls within this bean's effective window.
   * @param effDate Date to check
   * @return True if date is within this bean's effective window.
   */
  public boolean isEffective(java.util.Date effDate) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).isEffective(effDate);
  }
  
  /**
   * Returns true if the given field has been modified relative to the based-on
   * bean and false if this bean has no based-on or if the field has the same
   * value as for the based-on bean.  This method only works with non-array
   * fields.
   * @param field the name of the property to check for changes, which must
   *              correspond to a database column (i.e. it can't be an array or
   *              a synthetic property)
   * @return true if the field has a different value for the based-on bean,
   *         false otherwise
   */
  public boolean isFieldChangedFromBasedOn(java.lang.String field) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).isFieldChangedFromBasedOn(field);
  }
  
  public boolean isFrozen() {
    return ((com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods")).isFrozen();
  }
  
  /**
   * Gets the value of the HeatingBoilerElsewhere field.
   * Indicates if a heating boiler other than on the premises is insured
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isHeatingBoilerElsewhere() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(HEATINGBOILERELSEWHERE_PROP.get());
  }
  
  /**
   * Gets the value of the HeatingBoilerOnPremises field.
   * Indicates if a heating boiler is on the premises
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isHeatingBoilerOnPremises() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(HEATINGBOILERONPREMISES_PROP.get());
  }
  
  public boolean isLogicalMatchUntyped(entity.KeyableBean bean) {
    return ((gw.api.logicalmatch.EffDatedLogicalMatcher)__getDelegateManager().getImplementation("gw.api.logicalmatch.EffDatedLogicalMatcher")).isLogicalMatchUntyped(bean);
  }
  
  /**
   * 
   * @return true if this bean is to be inserted into the database when the bundle is committed.
   */
  public boolean isNew() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).isNew();
  }
  
  /**
   * 
   * @return True if the object was created by importation from an external system,
   *         False if it was created internally. Note that this refers to the currently
   *         instantiated object, not the data it represents
   */
  public boolean isNewlyImported() {
    return ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).isNewlyImported();
  }
  
  /**
   * Check if this bean or branch has been promoted. A promoted bean is also
   * locked and cannot be changed.
   * <p/>
   * An EffDated is never promoted independent of its related
   * EffDatedBranch, meaning if the branch is promoted every bean in the graph
   * will be promoted, and if the branch is not promoted no bean in the graph
   * can be promoted.
   * @return True if promoted.
   */
  public boolean isPromoted() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).isPromoted();
  }
  
  /**
   * Whether this bean is sliced. If a bean is sliced then you can navigate from
   * this bean to another bean or beans via a link or array, if it's unsliced
   * (in "window" mode) you cannot navigate from this bean.
   * <p/>
   * In most cases a bean will be sliced, window mode is used in special cases.
   * @return 
   */
  public boolean isSlice() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).isSlice();
  }
  
  /**
   * Refreshes this bean with the latest database version.
   * <p/>
   * This method does nothing if the bean is edited or inserted in its current bundle. If the bean
   * no longer exists in the database, then <tt>null</tt> is returned. If the bean has been
   * evicted from its bundle, then <tt>null</tt> is returned. Otherwise, this bean is returned, with its contents
   * updated.
   */
  public entity.KeyableBean refresh() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).refresh();
  }
  
  /**
   * Marks this bean for remove. A bean marked for remove will be deleted or retired when the transaction
   * is committed. Once a bean is marked for remove, it cannot be switched to update, edit, or read.
   * <p>
   * WARNING: This method is designed for simple custom entities which are normally not
   * associated with other entities. Undesirable results may occur when used on out-of-box entities.
   */
  public void remove() {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).remove();
  }
  
  /**
   * Removes the given element from the BuildingImprovements array. This is achieved by marking the element for removal.
   */
  public void removeFromBuildingImprovements(entity.BuildingImprovement element) {
    __getInternalInterface().removeArrayElement(BUILDINGIMPROVEMENTS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the BuildingImprovements array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBuildingImprovements(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(BUILDINGIMPROVEMENTS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the BuildingSides array. This is achieved by marking the element for removal.
   */
  public void removeFromBuildingSides(entity.BuildingSide element) {
    __getInternalInterface().removeArrayElement(BUILDINGSIDES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the BuildingSides array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBuildingSides(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(BUILDINGSIDES_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the AlarmCertificate field.
   */
  public void setAlarmCertificate(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ALARMCERTIFICATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AlarmCertification field.
   */
  public void setAlarmCertification(typekey.AlarmCertification value) {
    __getInternalInterface().setFieldValue(ALARMCERTIFICATION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AlarmClass field.
   */
  public void setAlarmClass(typekey.AlarmClass value) {
    __getInternalInterface().setFieldValue(ALARMCLASS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AlarmExpiration field.
   */
  public void setAlarmExpiration(java.util.Date value) {
    __getInternalInterface().setFieldValue(ALARMEXPIRATION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AlarmGrade field.
   */
  public void setAlarmGrade(typekey.AlarmGrade value) {
    __getInternalInterface().setFieldValue(ALARMGRADE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ArchivePartition field.
   */
  private void setArchivePartition(java.lang.Long value) {
    __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AreaFinished field.
   */
  public void setAreaFinished(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(AREAFINISHED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AreaLeased field.
   */
  public void setAreaLeased(typekey.AreaLeased value) {
    __getInternalInterface().setFieldValue(AREALEASED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AreaUnfinished field.
   */
  public void setAreaUnfinished(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(AREAUNFINISHED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  private void setBasedOnValue(entity.Building value) {
    __getInternalInterface().setFieldValue(BASEDONVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BasementArea field.
   */
  public void setBasementArea(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BASEMENTAREA_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BranchValue field.
   */
  private void setBranchValue(entity.PolicyPeriod value) {
    __getInternalInterface().setFieldValue(BRANCHVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BuildingAlarmType field.
   */
  public void setBuildingAlarmType(typekey.BuildingAlarmType value) {
    __getInternalInterface().setFieldValue(BUILDINGALARMTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BuildingImprovements field.
   */
  public void setBuildingImprovements(entity.BuildingImprovement[] value) {
    __getInternalInterface().setFieldValue(BUILDINGIMPROVEMENTS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BuildingNum field.
   */
  public void setBuildingNum(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BUILDINGNUM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BuildingSides field.
   */
  public void setBuildingSides(entity.BuildingSide[] value) {
    __getInternalInterface().setFieldValue(BUILDINGSIDES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BurglarySafeguard field.
   */
  public void setBurglarySafeguard(typekey.BurglarySafeguard value) {
    __getInternalInterface().setFieldValue(BURGLARYSAFEGUARD_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ChangeType field.
   */
  private void setChangeType(typekey.EffDatedChangeType value) {
    __getInternalInterface().setFieldValue(CHANGETYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ConstructionType field.
   */
  public void setConstructionType(typekey.ConstructionType value) {
    __getInternalInterface().setFieldValue(CONSTRUCTIONTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CreateTime field.
   */
  private void setCreateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(CREATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CreateUser field.
   */
  private void setCreateUser(entity.User value) {
    __getInternalInterface().setFieldValue(CREATEUSER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(DESCRIPTION_PROP.get(), value);
  }
  
  /**
   * Change when the effective date of this bean. You cannot change the
   * effective date when in slice mode. In window mode there are no
   * restrictions.
   * <p/>
   * The effective date must be non-null. It must also come on or before the
   * expiration date and within the period range of its branch.
   * @param effDate New effective date
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setEffectiveDate(java.util.Date effDate) {
    ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).setEffectiveDate(effDate);
  }
  
  /**
   * Change the effective and expiration dates together. This can only be called
   * in window mode. Both dates must be non-null. The effective date must be
   * before or equal to the expiration date. Both dates must be within the
   * period range of its branch.
   * @param effDate New effective date
   * @param expDate New expiration date
   */
  public void setEffectiveWindow(java.util.Date effDate, java.util.Date expDate) {
    ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).setEffectiveWindow(effDate, expDate);
  }
  
  /**
   * Sets the value of the EffectivenessGrade field.
   */
  public void setEffectivenessGrade(typekey.EffectivenessGrade value) {
    __getInternalInterface().setFieldValue(EFFECTIVENESSGRADE_PROP.get(), value);
  }
  
  /**
   * Change when the expiration date of this bean. You cannot change the
   * expiration date when in slice mode UNLESS the bean is new to its branch and
   * you're not setting the expiration date to the effective date (zero width).
   * In window mode there are no restrictions.
   * <p/>
   * The expiration date must be non-null. It must also come on or after the
   * effective date and within the period range of its branch.
   * @param expDate New expiration date
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setExpirationDate(java.util.Date expDate) {
    ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).setExpirationDate(expDate);
  }
  
  /**
   * Sets the value of the Fixed field.
   */
  private void setFixed(entity.Building value) {
    __getInternalInterface().setFieldValue(FIXED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FrozenSet field.
   */
  public void setFrozenSet(entity.FrozenSet value) {
    __getInternalInterface().setFieldValue(FROZENSET_PROP.get(), value);
  }
  
  /**
   * Sets the value of the HeatingBoilerElsewhere field.
   */
  public void setHeatingBoilerElsewhere(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(HEATINGBOILERELSEWHERE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the HeatingBoilerOnPremises field.
   */
  public void setHeatingBoilerOnPremises(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(HEATINGBOILERONPREMISES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the InterestType field.
   */
  public void setInterestType(typekey.InterestType value) {
    __getInternalInterface().setFieldValue(INTERESTTYPE_PROP.get(), value);
  }
  
  /**
   * Set a foreign key by passing in an EFfDatedKey (effectively the
   * EffDatedVersionList or FixedId of the bean). You need this method because
   * it's the only way to set a foreign key given a FixedId (and no context for
   * when that FixeId might be effective).
   * <p/>
   * This bean can be unsliced or sliced when this is called.
   * @param link Effective dated foreign key to set
   * @param key EffDatedKey of the bean (effectively the EffDatedVersionList or
   *             FixedId of the bean)
   */
  public void setLinkVersionList(gw.entity.ILinkPropertyInfo link, gw.pl.persistence.core.effdate.EffDatedKey key) {
    ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).setLinkVersionList(link, key);
  }
  
  /**
   * Set a flag denoting that the currently instantiated object has been newly imported from
   * an external source
   * @param newlyImported 
   */
  public void setNewlyImported(boolean newlyImported) {
    ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
  }
  
  /**
   * Sets the value of the NumBasements field.
   */
  public void setNumBasements(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(NUMBASEMENTS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the NumStories field.
   */
  public void setNumStories(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(NUMSTORIES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the NumUnits field.
   */
  public void setNumUnits(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(NUMUNITS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PercentOccupied field.
   */
  public void setPercentOccupied(typekey.PercentOccupied value) {
    __getInternalInterface().setFieldValue(PERCENTOCCUPIED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PercentVacant field.
   */
  public void setPercentVacant(typekey.PercentByTens value) {
    __getInternalInterface().setFieldValue(PERCENTVACANT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PolicyLocation field.
   */
  public void setPolicyLocation(entity.PolicyLocation value) {
    __getInternalInterface().setFieldValue(POLICYLOCATION_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the RentedOthers field.
   */
  public void setRentedOthers(typekey.PercentByTens value) {
    __getInternalInterface().setFieldValue(RENTEDOTHERS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RoofType field.
   */
  public void setRoofType(typekey.RoofType value) {
    __getInternalInterface().setFieldValue(ROOFTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SprinklerCoverage field.
   */
  public void setSprinklerCoverage(typekey.Sprinklered value) {
    __getInternalInterface().setFieldValue(SPRINKLERCOVERAGE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Subtype field.
   */
  private void setSubtype(typekey.Building value) {
    __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalArea field.
   */
  public void setTotalArea(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(TOTALAREA_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateTime field.
   */
  private void setUpdateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(UPDATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateUser field.
   */
  private void setUpdateUser(entity.User value) {
    __getInternalInterface().setFieldValue(UPDATEUSER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the WindRating field.
   */
  public void setWindRating(typekey.WindRating value) {
    __getInternalInterface().setFieldValue(WINDRATING_PROP.get(), value);
  }
  
  /**
   * Sets the value of the YearBuilt field.
   */
  public void setYearBuilt(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(YEARBUILT_PROP.get(), value);
  }
  
  public entity.Building split(java.util.Date splitDate) {
    return (entity.Building)splitUntyped(splitDate);
  }
  
  /**
   * Split this bean at the given date. A bean can only be split in window mode.
   * Splitting creates a new bean (and row) with the same FixedId as this bean
   * which is effective from the original effective date of this bean to the
   * split date. We then move the effective date of this bean up to the split
   * date. The result is two beans: one effective from the original effective
   * date to the split date, the other effective from the split date to the
   * original expiration date. "This" bean is the later in that range, and the
   * bean returned from calling this method is the former in that range.
   * <p/>
   * If this bean's effective date equals the split date then no split will
   * occur. The split date must be within the effective range of this bean or an
   * exception is thrown.
   * @param splitDate Date on which to split this bean.
   * @return A new bean effective from the original effective date to the split
   *         date or this bean if no split occurred (see above).
   */
  public entity.EffDated splitUntyped(java.util.Date splitDate) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).splitUntyped(splitDate);
  }
  
  /**
   * Set's the version of the bean to the next value (i.e. the bean version original value+1)
   * Multiple calls to this method on the same bean will result in the same value being used
   * for the version (i.e. it is idempotent).
   * 
   * Calling this method will force the bean to be written to the database and participate fully
   * in the commit cycle e.g. pre-update rules will be run, etc.
   */
  public void touch() {
    ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).touch();
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.BuildingInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.Building.this.__getDelegateManager();
    }
    
    public void addSlice(entity.EffDatedBase slice, java.util.Date sliceDate) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).addSlice(slice, sliceDate);
    }
    
    /**
     * Adds the given element to the BuildingImprovements array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToBuildingImprovements(entity.BuildingImprovement element) {
      __getInternalInterface().addArrayElement(BUILDINGIMPROVEMENTS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the BuildingSides array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToBuildingSides(entity.BuildingSide element) {
      __getInternalInterface().addArrayElement(BUILDINGSIDES_PROP.get(), element);
    }
    
    public boolean alwaysReserveID() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).alwaysReserveID();
    }
    
    public void assignPermanentId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).assignPermanentId(id);
    }
    
    public void beforeInsert() {
      ((com.guidewire.pl.system.bundle.InsertCallback)__getDelegateManager().getImplementation("com.guidewire.pl.system.bundle.InsertCallback")).beforeInsert();
    }
    
    public void beforeUpdate() {
      ((com.guidewire.pl.system.bundle.UpdateCallback)__getDelegateManager().getImplementation("com.guidewire.pl.system.bundle.UpdateCallback")).beforeUpdate();
    }
    
    public java.lang.Integer calculateNextVersion() {
      return ((com.guidewire.pl.domain.persistence.core.impl.VersionableInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal")).calculateNextVersion();
    }
    
    public java.util.List<entity.KeyableBean> cascadeDelete() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cascadeDelete();
    }
    
    public void changeEdgeForeignKey(gw.entity.IEdgeLinkPropertyInfo edgeProp, gw.pl.persistence.core.Key newId) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).changeEdgeForeignKey(edgeProp, newId);
    }
    
    public void changeNonDefaultLocaleValue(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo localizedProperty, java.lang.Object value) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).changeNonDefaultLocaleValue(localizedProperty, value);
    }
    
    public void changeSlice(java.util.Date oldSliceDate, java.util.Date newSliceDate) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).changeSlice(oldSliceDate, newSliceDate);
    }
    
    public entity.KeyableBean cloneBeanForBundleTransfer() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cloneBeanForBundleTransfer();
    }
    
    public entity.EffDated cloneIntoBranch(entity.EffDatedBranch branch) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).cloneIntoBranch(branch);
    }
    
    public entity.EffDated cloneUntyped() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).cloneUntyped();
    }
    
    /**
     * 
     * @return A copy of the current bean and a deep copy of all owned array elements
     */
    public entity.KeyableBean copy() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
    }
    
    public void copyBasicFieldsFromBeanUntyped(entity.EffDated bean) {
      ((gw.api.copier.EffDatedCopyable)__getDelegateManager().getImplementation("gw.api.copier.EffDatedCopyable")).copyBasicFieldsFromBeanUntyped(bean);
    }
    
    public void copyFromBeanUntyped(entity.EffDated bean) {
      ((gw.api.copier.EffDatedCopyable)__getDelegateManager().getImplementation("gw.api.copier.EffDatedCopyable")).copyFromBeanUntyped(bean);
    }
    
    public boolean deletableInternal() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).deletableInternal();
    }
    
    public entity.KeyableBean downcast(gw.entity.IEntityType newSubtype) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).downcast(newSubtype);
    }
    
    public void extendExpirationDate(java.util.Date newExp) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).extendExpirationDate(newExp);
    }
    
    public java.util.List<entity.EffDated> findMatchesInPeriodUntyped(entity.PolicyPeriod period, boolean excludeSameFixedID) {
      return ((gw.api.logicalmatch.EffDatedLogicalMatcher)__getDelegateManager().getImplementation("gw.api.logicalmatch.EffDatedLogicalMatcher")).findMatchesInPeriodUntyped(period, excludeSameFixedID);
    }
    
    public java.lang.Object genKey() {
      return ((gw.api.logicalmatch.EffDatedLogicalMatcher)__getDelegateManager().getImplementation("gw.api.logicalmatch.EffDatedLogicalMatcher")).genKey();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateInsertEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateInsertEventsInternal();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateRemoveEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateRemoveEventsInternal();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateUpdateEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateUpdateEventsInternal();
    }
    
    /**
     * Gets the value of the AlarmCertificate field.
     * Alarm certificate number
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAlarmCertificate() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ALARMCERTIFICATE_PROP.get());
    }
    
    /**
     * Gets the value of the AlarmCertification field.
     * Alarm certification
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.AlarmCertification getAlarmCertification() {
      return (typekey.AlarmCertification)__getInternalInterface().getFieldValue(ALARMCERTIFICATION_PROP.get());
    }
    
    /**
     * Gets the value of the AlarmClass field.
     * Alarm class
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.AlarmClass getAlarmClass() {
      return (typekey.AlarmClass)__getInternalInterface().getFieldValue(ALARMCLASS_PROP.get());
    }
    
    /**
     * Gets the value of the AlarmExpiration field.
     * Alarm expiration date
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getAlarmExpiration() {
      return (java.util.Date)__getInternalInterface().getFieldValue(ALARMEXPIRATION_PROP.get());
    }
    
    /**
     * Gets the value of the AlarmGrade field.
     * Alarm grade
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.AlarmGrade getAlarmGrade() {
      return (typekey.AlarmGrade)__getInternalInterface().getFieldValue(ALARMGRADE_PROP.get());
    }
    
    /**
     * Gets the value of the ArchivePartition field.
     * Unique number to partition the data so that the multiple workers can work independently
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getArchivePartition() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(ARCHIVEPARTITION_PROP.get());
    }
    
    /**
     * Gets the value of the AreaFinished field.
     * Building finished square footage
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getAreaFinished() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(AREAFINISHED_PROP.get());
    }
    
    /**
     * Gets the value of the AreaLeased field.
     * Percentage of area leased
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.AreaLeased getAreaLeased() {
      return (typekey.AreaLeased)__getInternalInterface().getFieldValue(AREALEASED_PROP.get());
    }
    
    /**
     * Gets the value of the AreaUnfinished field.
     * Building unfinished square footage
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getAreaUnfinished() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(AREAUNFINISHED_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getBasedOnId() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getBasedOnId();
    }
    
    /**
     * Return the bean from which this bean was based (cloned), or null if this
     * bean is new to this branch. This value will never change for the life of
     * the bean as its set when the bean is first created, either as a bean new to
     * this branch (in which case it's null) or when this bean is cloned from a
     * bean in an existing branch when its branch is created.
     * <p/>
     * When compiling DiffItems a bean is always compared to it's based-on bean to
     * discover what fields on it have changed. If there is no based-on bean then
     * we know that this bean was new to this branch.
     * @return Bean on which this bean was based (cloned), or null if this bean is
     *         new to this branch.
     */
    public entity.EffDated getBasedOnUntyped() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getBasedOnUntyped();
    }
    
    /**
     * Gets the value of the BasedOnValue field.
     * Link to the row on which this row is based; or null if new to branch
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Building getBasedOnValue() {
      return (entity.Building)__getInternalInterface().getFieldValue(BASEDONVALUE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getBasedOnValueID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(BASEDONVALUE_PROP.get());
    }
    
    /**
     * Gets the value of the BasementArea field.
     * Area of the basement
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBasementArea() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(BASEMENTAREA_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    public gw.pl.persistence.core.Key getBranchId() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getBranchId();
    }
    
    /**
     * Return the branch associated with this bean. This can never be null, and
     * will never change. A bean will always be associated with the same branch.
     * @return Branch associated with this bean
     */
    public entity.EffDatedBranch getBranchUntyped() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getBranchUntyped();
    }
    
    /**
     * Gets the value of the BranchValue field.
     * Link to root of effdated tree
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyPeriod getBranchValue() {
      return (entity.PolicyPeriod)__getInternalInterface().getFieldValue(BRANCHVALUE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getBranchValueID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(BRANCHVALUE_PROP.get());
    }
    
    /**
     * Gets the value of the BuildingAlarmType field.
     * Building alarm type
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.BuildingAlarmType getBuildingAlarmType() {
      return (typekey.BuildingAlarmType)__getInternalInterface().getFieldValue(BUILDINGALARMTYPE_PROP.get());
    }
    
    /**
     * Get BuildingImprovement by named type
     * @param buildingImprovementTypeStr the type to match
     * @return the building improvement
     */
    public entity.BuildingImprovement getBuildingImprovement(java.lang.String buildingImprovementTypeStr) {
      return ((com.guidewire.pc.domain.policy.period.BuildingPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.BuildingPublicMethods")).getBuildingImprovement(buildingImprovementTypeStr);
    }
    
    /**
     * Get BuildingImprovement by type code
     * @param typeKey the type to match
     * @return the building improvement
     */
    public entity.BuildingImprovement getBuildingImprovement(typekey.BuildingImprType typeKey) {
      return ((com.guidewire.pc.domain.policy.period.BuildingPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.BuildingPublicMethods")).getBuildingImprovement(typeKey);
    }
    
    /**
     * Gets the value of the BuildingImprovements field.
     * Improvements for building
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.BuildingImprovement[] getBuildingImprovements() {
      return (entity.BuildingImprovement[])__getInternalInterface().getFieldValue(BUILDINGIMPROVEMENTS_PROP.get());
    }
    
    /**
     * Gets the value of the BuildingNum field.
     * The building number
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBuildingNum() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(BUILDINGNUM_PROP.get());
    }
    
    /**
     * Get BuildingSide by named BuildingSideType
     * @param buildingSideTypeStr the type to match
     * @return BuildingSide
     */
    public entity.BuildingSide getBuildingSide(java.lang.String buildingSideTypeStr) {
      return ((com.guidewire.pc.domain.policy.period.BuildingPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.BuildingPublicMethods")).getBuildingSide(buildingSideTypeStr);
    }
    
    /**
     * Get BuildingSide by BuildingSideType typecode
     * @param typeKey the type to match
     * @return BuildingSide
     */
    public entity.BuildingSide getBuildingSide(typekey.BuildingSideType typeKey) {
      return ((com.guidewire.pc.domain.policy.period.BuildingPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.BuildingPublicMethods")).getBuildingSide(typeKey);
    }
    
    /**
     * Gets the value of the BuildingSides field.
     * Sides for building
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.BuildingSide[] getBuildingSides() {
      return (entity.BuildingSide[])__getInternalInterface().getFieldValue(BUILDINGSIDES_PROP.get());
    }
    
    /**
     * Gets the value of the BurglarySafeguard field.
     * Burglary safeguard
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.BurglarySafeguard getBurglarySafeguard() {
      return (typekey.BurglarySafeguard)__getInternalInterface().getFieldValue(BURGLARYSAFEGUARD_PROP.get());
    }
    
    /**
     * Gets the value of the ChangeType field.
     * Type of change made to this row
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.EffDatedChangeType getChangeType() {
      return (typekey.EffDatedChangeType)__getInternalInterface().getFieldValue(CHANGETYPE_PROP.get());
    }
    
    public java.util.Set<gw.lang.reflect.IPropertyInfo> getChangedFields(entity.EffDated basedOn) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).getChangedFields(basedOn);
    }
    
    public java.util.Set<gw.lang.reflect.IPropertyInfo> getChangedFieldsFromBasedOn() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).getChangedFieldsFromBasedOn();
    }
    
    /**
     * Gets the value of the ConstructionType field.
     * Type of building construction
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.ConstructionType getConstructionType() {
      return (typekey.ConstructionType)__getInternalInterface().getFieldValue(CONSTRUCTIONTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the CreateTime field.
     * Timestamp when the object was created
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getCreateTime() {
      return (java.util.Date)__getInternalInterface().getFieldValue(CREATETIME_PROP.get());
    }
    
    /**
     * Gets the value of the CreateUser field.
     * User who created the object
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getCreateUser() {
      return (entity.User)__getInternalInterface().getFieldValue(CREATEUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getCreateUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(CREATEUSER_PROP.get());
    }
    
    /**
     * Gets the value of the Description field.
     * Description of the building
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getDescription() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
    }
    
    /**
     * Get an effective date independent key for this bean. This key will include
     * the BranchId and the FixedId. This is the key for the "logical" bean.
     * <p/>
     * An EffDatedKey only really applies to EffDateds as an EffDatedBranch is
     * the same throughout its effective range (or its period range) so there is
     * no difference between the "logical" bean and the actual bean.
     */
    public gw.pl.persistence.core.effdate.EffDatedKey getEffDatedKey() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getEffDatedKey();
    }
    
    public java.util.Map<java.util.Date, java.lang.Boolean> getEffectiveCache() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getEffectiveCache();
    }
    
    /**
     * Get the date when this bean starts being effective.
     * @return Date when this bean starts being effective.
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getEffectiveDate() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getEffectiveDate();
    }
    
    public com.guidewire.pl.system.util.DateRange getEffectiveRange() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).getEffectiveRange();
    }
    
    /**
     * Gets the value of the EffectivenessGrade field.
     * Building code effectiveness grade
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.EffectivenessGrade getEffectivenessGrade() {
      return (typekey.EffectivenessGrade)__getInternalInterface().getFieldValue(EFFECTIVENESSGRADE_PROP.get());
    }
    
    /**
     * Get the date when this bean expires.
     * @return Date when this bean expires.
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getExpirationDate() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getExpirationDate();
    }
    
    /**
     * Gets the value of the Fixed field.
     * Unique ID for this 'object' across all branches and periods
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Building getFixed() {
      return (entity.Building)__getInternalInterface().getFieldValue(FIXED_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getFixedID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(FIXED_PROP.get());
    }
    
    /**
     * Get the logical ID for this bean, not the row ID. All row
     * @return Logical ID for this bean, not the row ID.
     */
    public gw.pl.persistence.core.Key getFixedId() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getFixedId();
    }
    
    /**
     * Gets the value of the FrozenSet field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.FrozenSet getFrozenSet() {
      return (entity.FrozenSet)__getInternalInterface().getFieldValue(FROZENSET_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getFrozenSetID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(FROZENSET_PROP.get());
    }
    
    public java.util.List<entity.EffDated> getFutureVersions() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).getFutureVersions();
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
    }
    
    public gw.pl.persistence.core.Key getIdToSetForForeignKey(gw.entity.ILinkPropertyInfo link) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).getIdToSetForForeignKey(link);
    }
    
    /**
     * Gets the value of the InterestType field.
     * Types of interest
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.InterestType getInterestType() {
      return (typekey.InterestType)__getInternalInterface().getFieldValue(INTERESTTYPE_PROP.get());
    }
    
    /**
     * Get the version list for an effective dated foreign key.  You need this
     * method because it's the only way to get the version list for a foreign key
     * bean if you're in window mode. You can't call this.getFKBean().getVersionListUntyped()
     * since you can't traverse the array and there are no methods on
     * EffDatedVersionList to access a FK (only arrays).
     * <p/>
     * This bean can be unsliced or sliced when this is called.
     * @param link Effective dated foreign key
     * @return Version list for an effective dated foreign key
     */
    public gw.pl.persistence.core.effdate.EffDatedVersionList getLinkVersionList(gw.entity.ILinkPropertyInfo link) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getLinkVersionList(link);
    }
    
    public entity.EffDatedBase getMaster() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getMaster();
    }
    
    /**
     * Gets the value of the NumBasements field.
     * Number of basements
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getNumBasements() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(NUMBASEMENTS_PROP.get());
    }
    
    /**
     * Gets the value of the NumStories field.
     * Number of stories
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getNumStories() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(NUMSTORIES_PROP.get());
    }
    
    /**
     * Gets the value of the NumUnits field.
     * Number of units
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getNumUnits() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(NUMUNITS_PROP.get());
    }
    
    /**
     * Gets the value of the PercentOccupied field.
     * % occupied
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.PercentOccupied getPercentOccupied() {
      return (typekey.PercentOccupied)__getInternalInterface().getFieldValue(PERCENTOCCUPIED_PROP.get());
    }
    
    /**
     * Gets the value of the PercentVacant field.
     * % vacancy
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.PercentByTens getPercentVacant() {
      return (typekey.PercentByTens)__getInternalInterface().getFieldValue(PERCENTVACANT_PROP.get());
    }
    
    /**
     * Gets the value of the PolicyLocation field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyLocation getPolicyLocation() {
      return (entity.PolicyLocation)__getInternalInterface().getFieldValue(POLICYLOCATION_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getPolicyLocationID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(POLICYLOCATION_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Gets the value of the RentedOthers field.
     * Rented to Others
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.PercentByTens getRentedOthers() {
      return (typekey.PercentByTens)__getInternalInterface().getFieldValue(RENTEDOTHERS_PROP.get());
    }
    
    /**
     * Gets the value of the RoofType field.
     * Roof type
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.RoofType getRoofType() {
      return (typekey.RoofType)__getInternalInterface().getFieldValue(ROOFTYPE_PROP.get());
    }
    
    /**
     * Date which this bean is "sliced" or viewed. If you traverse from this bean
     * to another bean or beans via a link or array, only beans that are effective
     * at this slice date will be returned. The beans that are returned will be
     * sliced at this date as well. If NULL then the bean is in "window" mode.
     * <p/>
     * In most cases a bean will be sliced, window mode is used in special cases.
     * @return Date which bean is sliced or null if in window mode.
     */
    public java.util.Date getSliceDate() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getSliceDate();
    }
    
    /**
     * Slice this bean at a particular date. This bean can be unsliced or sliced
     * when this method is called. The slice date must be within the effective
     * range of this bean or an exception will be thrown. If you want to get at
     * the version of this "logical" bean at a date outside of this particular
     * bean's effective range then use this.getVersionListUntyped().getVersionAsOf(sliceDate).getSliceUntyped(sliceDate).
     * @param sliceDate Date at which to slice this bean.
     * @return Sliced version of the bean.
     */
    public entity.EffDatedBase getSliceUntyped(java.util.Date sliceDate) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getSliceUntyped(sliceDate);
    }
    
    public java.util.Collection<entity.EffDatedBase> getSlices() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getSlices();
    }
    
    public java.util.Map<java.util.Date, entity.EffDatedBase> getSlicesMap() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getSlicesMap();
    }
    
    /**
     * Gets the value of the SprinklerCoverage field.
     * % covered by sprinkler
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Sprinklered getSprinklerCoverage() {
      return (typekey.Sprinklered)__getInternalInterface().getFieldValue(SPRINKLERCOVERAGE_PROP.get());
    }
    
    /**
     * Gets the value of the Subtype field.
     * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Building getSubtype() {
      return (typekey.Building)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the TotalArea field.
     * Total area (excluding the basement)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getTotalArea() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(TOTALAREA_PROP.get());
    }
    
    public java.util.Date getTraversalDate() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getTraversalDate();
    }
    
    /**
     * Return the unsliced version of this bean. If the bean is already unsliced
     * then returns itself.
     * @return An unsliced version of this bean. If the bean is already unsliced
     *         then returns itself.
     */
    public entity.EffDated getUnslicedUntyped() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getUnslicedUntyped();
    }
    
    /**
     * Gets the value of the UpdateTime field.
     * Timestamp when the object was last updated
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getUpdateTime() {
      return (java.util.Date)__getInternalInterface().getFieldValue(UPDATETIME_PROP.get());
    }
    
    /**
     * Gets the value of the UpdateUser field.
     * User who last updated the object
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getUpdateUser() {
      return (entity.User)__getInternalInterface().getFieldValue(UPDATEUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getUpdateUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(UPDATEUSER_PROP.get());
    }
    
    /**
     * Get the version list for this bean. An EffDatedVersionList is a
     * representation of a logical bean through its effective range. For example,
     * if a bean has changes at three separate effective dates then the version
     * list will comprise 3 versions of the bean, one for each of these dates.
     * <p/>
     * You can use an EffDatedVersionList to traverse from this bean to other
     * linked beans in window mode. Recall that in window mode you cannot traverse
     * links directly from the bean.
     * <p/>
     * Although an EffDatedBranch only has a single version throughout its
     * effective range you can still get its EffDatedVersionList in order to
     * navigate in window mode from the branch to its related EffDateds.
     * @return Version list for this bean
     */
    public gw.pl.persistence.core.effdate.EffDatedVersionList getVersionListUntyped() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getVersionListUntyped();
    }
    
    /**
     * Gets the value of the WindRating field.
     * Rating against wind damage
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.WindRating getWindRating() {
      return (typekey.WindRating)__getInternalInterface().getFieldValue(WINDRATING_PROP.get());
    }
    
    /**
     * Gets the value of the YearBuilt field.
     * Year built
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getYearBuilt() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(YEARBUILT_PROP.get());
    }
    
    public boolean hasFutureVersions() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).hasFutureVersions();
    }
    
    public boolean hasMergeBase() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).hasMergeBase();
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    public boolean isAutoSplit() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).isAutoSplit();
    }
    
    public boolean isBasedOn() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).isBasedOn();
    }
    
    /**
     * Given a date, check whether it falls within this bean's effective window.
     * @param effDate Date to check
     * @return True if date is within this bean's effective window.
     */
    public boolean isEffective(java.util.Date effDate) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).isEffective(effDate);
    }
    
    /**
     * Returns true if the given field has been modified relative to the based-on
     * bean and false if this bean has no based-on or if the field has the same
     * value as for the based-on bean.  This method only works with non-array
     * fields.
     * @param field the name of the property to check for changes, which must
     *              correspond to a database column (i.e. it can't be an array or
     *              a synthetic property)
     * @return true if the field has a different value for the based-on bean,
     *         false otherwise
     */
    public boolean isFieldChangedFromBasedOn(java.lang.String field) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).isFieldChangedFromBasedOn(field);
    }
    
    public boolean isFrozen() {
      return ((com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods")).isFrozen();
    }
    
    /**
     * Gets the value of the HeatingBoilerElsewhere field.
     * Indicates if a heating boiler other than on the premises is insured
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isHeatingBoilerElsewhere() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(HEATINGBOILERELSEWHERE_PROP.get());
    }
    
    /**
     * Gets the value of the HeatingBoilerOnPremises field.
     * Indicates if a heating boiler is on the premises
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isHeatingBoilerOnPremises() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(HEATINGBOILERONPREMISES_PROP.get());
    }
    
    public java.lang.Boolean isLocked() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).isLocked();
    }
    
    public boolean isLogicalMatchUntyped(entity.KeyableBean bean) {
      return ((gw.api.logicalmatch.EffDatedLogicalMatcher)__getDelegateManager().getImplementation("gw.api.logicalmatch.EffDatedLogicalMatcher")).isLogicalMatchUntyped(bean);
    }
    
    /**
     * 
     * @return true if this bean is to be inserted into the database when the bundle is committed.
     */
    public boolean isNew() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).isNew();
    }
    
    /**
     * 
     * @return True if the object was created by importation from an external system,
     *         False if it was created internally. Note that this refers to the currently
     *         instantiated object, not the data it represents
     */
    public boolean isNewlyImported() {
      return ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).isNewlyImported();
    }
    
    /**
     * Check if this bean or branch has been promoted. A promoted bean is also
     * locked and cannot be changed.
     * <p/>
     * An EffDated is never promoted independent of its related
     * EffDatedBranch, meaning if the branch is promoted every bean in the graph
     * will be promoted, and if the branch is not promoted no bean in the graph
     * can be promoted.
     * @return True if promoted.
     */
    public boolean isPromoted() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).isPromoted();
    }
    
    /**
     * Whether this bean is sliced. If a bean is sliced then you can navigate from
     * this bean to another bean or beans via a link or array, if it's unsliced
     * (in "window" mode) you cannot navigate from this bean.
     * <p/>
     * In most cases a bean will be sliced, window mode is used in special cases.
     * @return 
     */
    public boolean isSlice() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).isSlice();
    }
    
    public boolean isSliceAddedBeforeBasedOn() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).isSliceAddedBeforeBasedOn();
    }
    
    public boolean isSliceChange() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).isSliceChange();
    }
    
    public boolean isTemporary() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).isTemporary();
    }
    
    public boolean isTerminated() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).isTerminated();
    }
    
    public boolean isZeroWidth() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).isZeroWidth();
    }
    
    public void markAsMerged() {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).markAsMerged();
    }
    
    public void mergeForwardFieldValue(gw.lang.reflect.IPropertyInfo property, java.lang.Object newValue) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).mergeForwardFieldValue(property, newValue);
    }
    
    public entity.KeyableBean overrideBundleAdd(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleAdd(bundle);
    }
    
    public entity.KeyableBean overrideBundleRemove(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleRemove(bundle);
    }
    
    public void putInBundle() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).putInBundle();
    }
    
    /**
     * Refreshes this bean with the latest database version.
     * <p/>
     * This method does nothing if the bean is edited or inserted in its current bundle. If the bean
     * no longer exists in the database, then <tt>null</tt> is returned. If the bean has been
     * evicted from its bundle, then <tt>null</tt> is returned. Otherwise, this bean is returned, with its contents
     * updated.
     */
    public entity.KeyableBean refresh() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).refresh();
    }
    
    public entity.KeyableBean reload(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).reload(bundle);
    }
    
    /**
     * Marks this bean for remove. A bean marked for remove will be deleted or retired when the transaction
     * is committed. Once a bean is marked for remove, it cannot be switched to update, edit, or read.
     * <p>
     * WARNING: This method is designed for simple custom entities which are normally not
     * associated with other entities. Undesirable results may occur when used on out-of-box entities.
     */
    public void remove() {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).remove();
    }
    
    /**
     * Removes the given element from the BuildingImprovements array. This is achieved by marking the element for removal.
     */
    public void removeFromBuildingImprovements(entity.BuildingImprovement element) {
      __getInternalInterface().removeArrayElement(BUILDINGIMPROVEMENTS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the BuildingImprovements array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromBuildingImprovements(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(BUILDINGIMPROVEMENTS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the BuildingSides array. This is achieved by marking the element for removal.
     */
    public void removeFromBuildingSides(entity.BuildingSide element) {
      __getInternalInterface().removeArrayElement(BUILDINGSIDES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the BuildingSides array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromBuildingSides(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(BUILDINGSIDES_PROP.get(), elementID);
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the AlarmCertificate field.
     */
    public void setAlarmCertificate(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ALARMCERTIFICATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AlarmCertification field.
     */
    public void setAlarmCertification(typekey.AlarmCertification value) {
      __getInternalInterface().setFieldValue(ALARMCERTIFICATION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AlarmClass field.
     */
    public void setAlarmClass(typekey.AlarmClass value) {
      __getInternalInterface().setFieldValue(ALARMCLASS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AlarmExpiration field.
     */
    public void setAlarmExpiration(java.util.Date value) {
      __getInternalInterface().setFieldValue(ALARMEXPIRATION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AlarmGrade field.
     */
    public void setAlarmGrade(typekey.AlarmGrade value) {
      __getInternalInterface().setFieldValue(ALARMGRADE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ArchivePartition field.
     */
    public void setArchivePartition(java.lang.Long value) {
      __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AreaFinished field.
     */
    public void setAreaFinished(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(AREAFINISHED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AreaLeased field.
     */
    public void setAreaLeased(typekey.AreaLeased value) {
      __getInternalInterface().setFieldValue(AREALEASED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AreaUnfinished field.
     */
    public void setAreaUnfinished(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(AREAUNFINISHED_PROP.get(), value);
    }
    
    public void setBasedOnId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).setBasedOnId(id);
    }
    
    /**
     * Sets the value of the BasedOnValue field.
     */
    public void setBasedOnValue(entity.Building value) {
      __getInternalInterface().setFieldValue(BASEDONVALUE_PROP.get(), value);
    }
    
    public void setBasedOnValueID(gw.pl.persistence.core.Key value) {
      setFieldValue(BASEDONVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BasementArea field.
     */
    public void setBasementArea(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BASEMENTAREA_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BranchValue field.
     */
    public void setBranchValue(entity.PolicyPeriod value) {
      __getInternalInterface().setFieldValue(BRANCHVALUE_PROP.get(), value);
    }
    
    public void setBranchValueID(gw.pl.persistence.core.Key value) {
      setFieldValue(BRANCHVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BuildingAlarmType field.
     */
    public void setBuildingAlarmType(typekey.BuildingAlarmType value) {
      __getInternalInterface().setFieldValue(BUILDINGALARMTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BuildingImprovements field.
     */
    public void setBuildingImprovements(entity.BuildingImprovement[] value) {
      __getInternalInterface().setFieldValue(BUILDINGIMPROVEMENTS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BuildingNum field.
     */
    public void setBuildingNum(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BUILDINGNUM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BuildingSides field.
     */
    public void setBuildingSides(entity.BuildingSide[] value) {
      __getInternalInterface().setFieldValue(BUILDINGSIDES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BurglarySafeguard field.
     */
    public void setBurglarySafeguard(typekey.BurglarySafeguard value) {
      __getInternalInterface().setFieldValue(BURGLARYSAFEGUARD_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ChangeType field.
     */
    public void setChangeType(typekey.EffDatedChangeType value) {
      __getInternalInterface().setFieldValue(CHANGETYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ConstructionType field.
     */
    public void setConstructionType(typekey.ConstructionType value) {
      __getInternalInterface().setFieldValue(CONSTRUCTIONTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CreateTime field.
     */
    public void setCreateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(CREATETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CreateUser field.
     */
    public void setCreateUser(entity.User value) {
      __getInternalInterface().setFieldValue(CREATEUSER_PROP.get(), value);
    }
    
    public void setCreateUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(CREATEUSER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Description field.
     */
    public void setDescription(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(DESCRIPTION_PROP.get(), value);
    }
    
    /**
     * Change when the effective date of this bean. You cannot change the
     * effective date when in slice mode. In window mode there are no
     * restrictions.
     * <p/>
     * The effective date must be non-null. It must also come on or before the
     * expiration date and within the period range of its branch.
     * @param effDate New effective date
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setEffectiveDate(java.util.Date effDate) {
      ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).setEffectiveDate(effDate);
    }
    
    public void setEffectiveDateInternal(java.util.Date newEff) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).setEffectiveDateInternal(newEff);
    }
    
    public void setEffectiveWindow(com.guidewire.pl.system.util.DateRange oldEffRange, java.util.Date newEff, java.util.Date newExp) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).setEffectiveWindow(oldEffRange, newEff, newExp);
    }
    
    /**
     * Change the effective and expiration dates together. This can only be called
     * in window mode. Both dates must be non-null. The effective date must be
     * before or equal to the expiration date. Both dates must be within the
     * period range of its branch.
     * @param effDate New effective date
     * @param expDate New expiration date
     */
    public void setEffectiveWindow(java.util.Date effDate, java.util.Date expDate) {
      ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).setEffectiveWindow(effDate, expDate);
    }
    
    public void setEffectiveWindowInternal(java.util.Date newEff, java.util.Date newExp) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).setEffectiveWindowInternal(newEff, newExp);
    }
    
    /**
     * Sets the value of the EffectivenessGrade field.
     */
    public void setEffectivenessGrade(typekey.EffectivenessGrade value) {
      __getInternalInterface().setFieldValue(EFFECTIVENESSGRADE_PROP.get(), value);
    }
    
    /**
     * Change when the expiration date of this bean. You cannot change the
     * expiration date when in slice mode UNLESS the bean is new to its branch and
     * you're not setting the expiration date to the effective date (zero width).
     * In window mode there are no restrictions.
     * <p/>
     * The expiration date must be non-null. It must also come on or after the
     * effective date and within the period range of its branch.
     * @param expDate New expiration date
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setExpirationDate(java.util.Date expDate) {
      ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).setExpirationDate(expDate);
    }
    
    public void setExpirationDateInternal(java.util.Date newExp) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).setExpirationDateInternal(newExp);
    }
    
    /**
     * Sets the value of the Fixed field.
     */
    public void setFixed(entity.Building value) {
      __getInternalInterface().setFieldValue(FIXED_PROP.get(), value);
    }
    
    public void setFixedID(gw.pl.persistence.core.Key value) {
      setFieldValue(FIXED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FrozenSet field.
     */
    public void setFrozenSet(entity.FrozenSet value) {
      __getInternalInterface().setFieldValue(FROZENSET_PROP.get(), value);
    }
    
    public void setFrozenSetID(gw.pl.persistence.core.Key value) {
      setFieldValue(FROZENSET_PROP.get(), value);
    }
    
    /**
     * Sets the value of the HeatingBoilerElsewhere field.
     */
    public void setHeatingBoilerElsewhere(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(HEATINGBOILERELSEWHERE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the HeatingBoilerOnPremises field.
     */
    public void setHeatingBoilerOnPremises(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(HEATINGBOILERONPREMISES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the InterestType field.
     */
    public void setInterestType(typekey.InterestType value) {
      __getInternalInterface().setFieldValue(INTERESTTYPE_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Set a foreign key by passing in an EFfDatedKey (effectively the
     * EffDatedVersionList or FixedId of the bean). You need this method because
     * it's the only way to set a foreign key given a FixedId (and no context for
     * when that FixeId might be effective).
     * <p/>
     * This bean can be unsliced or sliced when this is called.
     * @param link Effective dated foreign key to set
     * @param key EffDatedKey of the bean (effectively the EffDatedVersionList or
     *             FixedId of the bean)
     */
    public void setLinkVersionList(gw.entity.ILinkPropertyInfo link, gw.pl.persistence.core.effdate.EffDatedKey key) {
      ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).setLinkVersionList(link, key);
    }
    
    public void setMaster(entity.EffDatedBase master) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).setMaster(master);
    }
    
    /**
     * Set a flag denoting that the currently instantiated object has been newly imported from
     * an external source
     * @param newlyImported 
     */
    public void setNewlyImported(boolean newlyImported) {
      ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
    }
    
    /**
     * Sets the value of the NumBasements field.
     */
    public void setNumBasements(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(NUMBASEMENTS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the NumStories field.
     */
    public void setNumStories(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(NUMSTORIES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the NumUnits field.
     */
    public void setNumUnits(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(NUMUNITS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PercentOccupied field.
     */
    public void setPercentOccupied(typekey.PercentOccupied value) {
      __getInternalInterface().setFieldValue(PERCENTOCCUPIED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PercentVacant field.
     */
    public void setPercentVacant(typekey.PercentByTens value) {
      __getInternalInterface().setFieldValue(PERCENTVACANT_PROP.get(), value);
    }
    
    public void setPeriodWindow(com.guidewire.pl.system.util.DateRange oldPeriodRange) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).setPeriodWindow(oldPeriodRange);
    }
    
    /**
     * Sets the value of the PolicyLocation field.
     */
    public void setPolicyLocation(entity.PolicyLocation value) {
      __getInternalInterface().setFieldValue(POLICYLOCATION_PROP.get(), value);
    }
    
    public void setPolicyLocationID(gw.pl.persistence.core.Key value) {
      setFieldValue(POLICYLOCATION_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the RentedOthers field.
     */
    public void setRentedOthers(typekey.PercentByTens value) {
      __getInternalInterface().setFieldValue(RENTEDOTHERS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RoofType field.
     */
    public void setRoofType(typekey.RoofType value) {
      __getInternalInterface().setFieldValue(ROOFTYPE_PROP.get(), value);
    }
    
    public void setSliceDate(java.util.Date sliceDate) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).setSliceDate(sliceDate);
    }
    
    public void setSlicesMap(java.util.Map<java.util.Date, entity.EffDatedBase> slices) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).setSlicesMap(slices);
    }
    
    /**
     * Sets the value of the SprinklerCoverage field.
     */
    public void setSprinklerCoverage(typekey.Sprinklered value) {
      __getInternalInterface().setFieldValue(SPRINKLERCOVERAGE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Subtype field.
     */
    public void setSubtype(typekey.Building value) {
      __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalArea field.
     */
    public void setTotalArea(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(TOTALAREA_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateTime field.
     */
    public void setUpdateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(UPDATETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateUser field.
     */
    public void setUpdateUser(entity.User value) {
      __getInternalInterface().setFieldValue(UPDATEUSER_PROP.get(), value);
    }
    
    public void setUpdateUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(UPDATEUSER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the WindRating field.
     */
    public void setWindRating(typekey.WindRating value) {
      __getInternalInterface().setFieldValue(WINDRATING_PROP.get(), value);
    }
    
    /**
     * Sets the value of the YearBuilt field.
     */
    public void setYearBuilt(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(YEARBUILT_PROP.get(), value);
    }
    
    /**
     * Split this bean at the given date. A bean can only be split in window mode.
     * Splitting creates a new bean (and row) with the same FixedId as this bean
     * which is effective from the original effective date of this bean to the
     * split date. We then move the effective date of this bean up to the split
     * date. The result is two beans: one effective from the original effective
     * date to the split date, the other effective from the split date to the
     * original expiration date. "This" bean is the later in that range, and the
     * bean returned from calling this method is the former in that range.
     * <p/>
     * If this bean's effective date equals the split date then no split will
     * occur. The split date must be within the effective range of this bean or an
     * exception is thrown.
     * @param splitDate Date on which to split this bean.
     * @return A new bean effective from the original effective date to the split
     *         date or this bean if no split occurred (see above).
     */
    public entity.EffDated splitUntyped(java.util.Date splitDate) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).splitUntyped(splitDate);
    }
    
    /**
     * Set's the version of the bean to the next value (i.e. the bean version original value+1)
     * Multiple calls to this method on the same bean will result in the same value being used
     * for the version (i.e. it is idempotent).
     * 
     * Calling this method will force the bean to be written to the database and participate fully
     * in the commit cycle e.g. pre-update rules will be run, etc.
     */
    public void touch() {
      ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).touch();
    }
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pc.domain.policy.period.BuildingPublicMethods", "com.guidewire.pc.domain.policy.period.impl.BuildingImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods", "com.guidewire.pl.system.entity.proxy.EffDatedBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods", "com.guidewire.pl.system.entity.proxy.EffDatedBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods", "com.guidewire.pl.system.entity.proxy.EffDatedBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods", "com.guidewire.pl.system.entity.proxy.EffDatedBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods", "com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethodsImpl");
    config.put("com.guidewire.pl.system.bundle.InsertCallback", "com.guidewire.pl.system.entity.proxy.EffDatedBeanProxy");
    config.put("com.guidewire.pl.system.bundle.UpdateCallback", "com.guidewire.pl.system.entity.proxy.EffDatedBeanProxy");
    config.put("com.guidewire.pl.system.entity.DoesNotValidateOnCommit", "com.guidewire.pc.domain.policy.period.impl.BuildingImpl");
    config.put("gw.api.copier.EffDatedCopyable", "gw.api.copier.EffDatedCopier");
    config.put("gw.api.logicalmatch.EffDatedLogicalMatcher", "gw.lob.common.BuildingMatcher");
    config.put("gw.api.logicalmatch.LogicalMatcher", "gw.lob.common.BuildingMatcher");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.Building.class, config);
    com.guidewire._generated.entity.BuildingInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.Building, com.guidewire._generated.entity.BuildingInternal>() {
      public java.lang.Object getImplementation(entity.Building bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.BuildingInternal getInternalInterface(entity.Building bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.Building newEmptyInstance() {
        return new entity.Building((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}