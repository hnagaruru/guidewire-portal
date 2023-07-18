package entity;

/**
 * HOPDwellScheduleExclItem
 * HOP Dwelling level exclusion scheduled item
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellScheduleExclItem.eti;HOPDwellScheduleExclItem.eix;HOPDwellScheduleExclItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "HOPDwellScheduleExclItem")
public class HOPDwellScheduleExclItem extends com.guidewire.pl.persistence.code.BeanBase implements entity.EffDated, entity.HOPScheduledItem, entity.ScheduledItem, entity.Coverable, gw.api.copier.EffDatedCopyable, gw.api.logicalmatch.EffDatedLogicalMatcher {
  public static final gw.pl.persistence.type.EffDatedEntityTypeReference<entity.HOPDwellScheduleExclItem, entity.PolicyPeriod> TYPE = new com.guidewire.commons.metadata.types.EffDatedEntityIntrinsicTypeReference<entity.HOPDwellScheduleExclItem, entity.PolicyPeriod>("entity.HOPDwellScheduleExclItem");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEPARTITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchivePartition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BASEDONVALUE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "BasedOnValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BOOLCOL1_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BoolCol1");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BOOLCOL2_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BoolCol2");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BRANCHVALUE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "BranchValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CHANGETYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ChangeType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DATECOL1_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DateCol1");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EFFECTIVEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EffectiveDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPIRATIONDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExpirationDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FIXED_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Fixed");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FROZENSET_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "FrozenSet");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INITIALCONDITIONSCREATED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "InitialConditionsCreated");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INITIALCOVERAGESCREATED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "InitialCoveragesCreated");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INITIALEXCLUSIONSCREATED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "InitialExclusionsCreated");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INTCOL1_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "IntCol1");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> NAMEDINSURED_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "NamedInsured");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> POLICYLOCATION_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "PolicyLocation");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POSINTCOL1_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PosIntCol1");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PREFERREDCOVERAGECURRENCY_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "PreferredCoverageCurrency");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> REFERENCEDATEINTERNAL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ReferenceDateInternal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> SCHEDULE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Schedule");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SCHEDULENUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ScheduleNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> SCHEDULEDITEMCLAUSE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ScheduledItemClause");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> SCHEDULEDITEMCLAUSEARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "ScheduledItemClauseArray");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STRINGCOL1_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "StringCol1");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STRINGCOL2_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "StringCol2");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STRINGCOL3_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "StringCol3");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STRINGCOL4_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "StringCol4");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SUBTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Subtype");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TYPEKEYCOL1_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TypeKeyCol1");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TYPEKEYCOL2_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TypeKeyCol2");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.HOPDwellScheduleExclItemInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BASEDONID_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods.BASEDONID_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BRANCHID_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods.BRANCHID_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FIXEDID_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods.FIXEDID_DYNPROP;
  
  /**
   * Constructs a new instance of this entity in the given branch.
   */
  public HOPDwellScheduleExclItem(entity.PolicyPeriod branch)  {
    this((java.lang.Void)null);
    com.guidewire._generated.entity.PolicyPeriodInternalAccess.FRIEND_ACCESSOR.access().getInternalInterface(branch).initNewBeanInstance(this, java.util.Arrays.asList());
  }
  
  /**
   * Constructs a new <em>unsliced</em> instance of this entity in the given branch, and effective for the given date range.
   */
  public HOPDwellScheduleExclItem(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    this((java.lang.Void)null);
    com.guidewire._generated.entity.PolicyPeriodInternalAccess.FRIEND_ACCESSOR.access().getInternalInterface(branch).initUnslicedBeanInstance(this, effectiveDate, expirationDate, java.util.Arrays.asList());
  }
  
  protected HOPDwellScheduleExclItem(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.HOPDwellScheduleExclItemInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.HOPDwellScheduleExclItemInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Finds all issues involving conditions on this coverable. None of the actions involved will
   * be taken at this point; this will just return information about any potential problems.
   * @return the list of ProductModelSyncIssues found
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkConditionsAgainstProductModel() {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkConditionsAgainstProductModel();
  }
  
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkConditionsAgainstProductModel(gw.api.productmodel.ConditionPattern[] patternsToCheck) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkConditionsAgainstProductModel(patternsToCheck);
  }
  
  /**
   * Finds all issues involving conditions contained on this coverable.  None of the actions
   * involved will be taken at this point; this will just return information about any
   * potential problems.
   * @param policyLine the PolicyLine for this Coverable
   * @return a list of ProductModelSyncIssues
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkConditionsAgainstProductModelwLine(entity.PolicyLine policyLine) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkConditionsAgainstProductModelwLine(policyLine);
  }
  
  /**
   * Finds all issues involving coverages contained on this coverable. None of the actions
   * involved will be taken at this point; this will just return information about any
   * potential problems.
   * @return the list of ProductModelSyncIssues found
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkCoveragesAgainstProductModel() {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkCoveragesAgainstProductModel();
  }
  
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkCoveragesAgainstProductModel(gw.api.productmodel.CoveragePattern[] patternsToCheck) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkCoveragesAgainstProductModel(patternsToCheck);
  }
  
  /**
   * Finds all issues involving coverages contained on this coverable.  None of the actions
   * involved will be taken at this point; this will just return information about any
   * potential problems.
   * @param policyLine the PolicyLine for this Coverable
   * @return a list of ProductModelSyncIssues
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkCoveragesAgainstProductModelwLine(entity.PolicyLine policyLine) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkCoveragesAgainstProductModelwLine(policyLine);
  }
  
  /**
   * Finds all issues involving coverages, conditions, and exclusions on this coverable. None of the actions
   * involved will be taken at this point; this will just return information about any potential problems.
   * @return the list of ProductModelSyncIssues found
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkCoveragesConditionsAndExclusionsAgainstProductModel() {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkCoveragesConditionsAndExclusionsAgainstProductModel();
  }
  
  /**
   * Finds all issues involving exclusions on this coverable. None of the actions involved will
   * be taken at this point; this will just return information about any potential problems.
   * @return the list of ProductModelSyncIssues found
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkExclusionsAgainstProductModel() {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkExclusionsAgainstProductModel();
  }
  
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkExclusionsAgainstProductModel(gw.api.productmodel.ExclusionPattern[] patternsToCheck) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkExclusionsAgainstProductModel(patternsToCheck);
  }
  
  /**
   * Finds all issues involving exclusions contained on this coverable.  None of the actions
   * involved will be taken at this point; this will just return information about any
   * potential problems.
   * @param policyLine the PolicyLine for this Coverable
   * @return a list of ProductModelSyncIssues
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkExclusionsAgainstProductModelwLine(entity.PolicyLine policyLine) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkExclusionsAgainstProductModelwLine(policyLine);
  }
  
  /**
   * Sets this Coverable's internal reference date field to null so {@link #getCoverableReferenceDate()}
   * will compute the reference date based on the current policy data, rather than returning the
   * persisted field's value. This is meant to be called only upon creating a new policy term (e.g.,
   * in a renewal job), when the reference dates must be recalculated.
   */
  public void clearCoverableReferenceDateInternal() {
    ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).clearCoverableReferenceDateInternal();
  }
  
  public entity.HOPDwellScheduleExclItem clone() {
    return (entity.HOPDwellScheduleExclItem)__getInternalInterface().cloneUntyped();
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
  
  /**
   * Creates a condition of the given <code>pattern</code> and adds the condition to this Coverable.
   * It also does the following:
   * <p/>
   * <ul>
   * <li>Automatically adds the available condition terms to the condition as determined
   * by the product model</li>
   * <li>Updates coverage symbols</li>
   * <li>Runs the Gosu initialization script from the corresponding pattern</li>
   * </ul>
   * @param pattern the pattern for the created condition
   * @return the newly created condition
   */
  public entity.PolicyCondition createCondition(gw.api.productmodel.ConditionPattern pattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).createCondition(pattern);
  }
  
  /**
   * Creates conditions on this object.  Asserts there are no existing
   * conditions on this object.  Use this method when first creating a coverable to
   * create conditions.
   * <p/>
   * Conditions created are available and of existence type Required or Suggested.
   * @throws IllegalStateException if this coverable already has conditions
   */
  public void createConditions() {
    ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).createConditions();
  }
  
  /**
   * Creates a coverage of the given <code>pattern</code> and adds the coverage to this Coverable.
   * It also does the following:
   * <p/>
   * <ul>
   * <li>Automatically adds the available coverage terms to the coverage as determined
   * by the product model</li>
   * <li>Updates coverage symbols</li>
   * <li>Runs the Gosu initialization script from the corresponding pattern</li>
   * </ul>
   * @param pattern the pattern for the created coverage
   * @return the newly created coverage
   */
  public entity.Coverage createCoverage(gw.api.productmodel.CoveragePattern pattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).createCoverage(pattern);
  }
  
  /**
   * Creates a coverage, condition, or exclusion of the given <code>pattern</code> and adds it to this Coverable.
   * It also does the following:
   * <p/>
   * <ul>
   * <li>Automatically adds the available terms to the coverage, condition, or exclusion as determined
   * by the product model</li>
   * <li>Updates coverage symbols</li>
   * <li>Runs the Gosu initialization script from the corresponding pattern</li>
   * </ul>
   * @param pattern the pattern for the created clause
   * @return the newly created coverage, condition, or exclusion
   */
  public entity.Clause createCoverageConditionOrExclusion(gw.api.productmodel.ClausePattern pattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).createCoverageConditionOrExclusion(pattern);
  }
  
  /**
   * Creates coverages on this object.  Asserts there are no existing
   * coverages on this object.  Use this method when first creating a coverable to
   * create coverages.
   * <p/>
   * Coverages created are available and of existence type Required or Suggested.
   * @throws IllegalStateException if this coverable already has coverages
   */
  public void createCoverages() {
    ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).createCoverages();
  }
  
  /**
   * Creates coverages, conditions, and exclusions on this object.  Asserts there are no existing
   * coverages, conditions, and exclusions on this object.  Use this method when first creating a coverable to
   * create coverages, conditions, and exclusions.
   * <p/>
   * Coverages, conditions, and exclusions created are available and of existence type Required or Suggested.
   * @throws IllegalStateException if this coverable already has coverages, conditions, or exclusions
   */
  public void createCoveragesConditionsAndExclusions() {
    ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).createCoveragesConditionsAndExclusions();
  }
  
  /**
   * Creates an exclusion of the given <code>pattern</code> and adds the exclusion to this Coverable.
   * It also does the following:
   * <p/>
   * <ul>
   * <li>Automatically adds the available exclusion terms to the exclusion as determined
   * by the product model</li>
   * <li>Updates coverage symbols</li>
   * <li>Runs the Gosu initialization script from the corresponding pattern</li>
   * </ul>
   * @param pattern the pattern for the created exclusion
   * @return the newly created exclusion
   */
  public entity.Exclusion createExclusion(gw.api.productmodel.ExclusionPattern pattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).createExclusion(pattern);
  }
  
  /**
   * Creates exclusions on this object.  Asserts there are no existing
   * exclusions on this object.  Use this method when first creating a coverable to
   * create exclusions.
   * <p/>
   * Exclusions created are available and of existence type Required or Suggested.
   * @throws IllegalStateException if this coverable already has exclusions
   */
  public void createExclusions() {
    ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).createExclusions();
  }
  
  /**
   * Stores the current value of {@link #getCoverableReferenceDate()} in this Coverable's internal
   * reference date field if that field is currently null, and does nothing otherwise. This should
   * be called only upon binding a policy period.
   */
  public void denormalizeCoverableReferenceDate() {
    ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).denormalizeCoverableReferenceDate();
  }
  
  public java.util.List<entity.EffDated> findMatchesInPeriodUntyped(entity.PolicyPeriod period, boolean excludeSameFixedID) {
    return ((gw.api.logicalmatch.EffDatedLogicalMatcher)__getDelegateManager().getImplementation("gw.api.logicalmatch.EffDatedLogicalMatcher")).findMatchesInPeriodUntyped(period, excludeSameFixedID);
  }
  
  public java.lang.Object genKey() {
    return ((gw.api.logicalmatch.EffDatedLogicalMatcher)__getDelegateManager().getImplementation("gw.api.logicalmatch.EffDatedLogicalMatcher")).genKey();
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
  
  public typekey.CoveragePartType[] getAssociatedCoveragePartTypes() {
    return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getAssociatedCoveragePartTypes();
  }
  
  public entity.HOPDwellScheduleExclItem getBasedOn() {
    return (entity.HOPDwellScheduleExclItem)__getInternalInterface().getBasedOnUntyped();
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
  public entity.HOPDwellScheduleExclItem getBasedOnValue() {
    return (entity.HOPDwellScheduleExclItem)__getInternalInterface().getFieldValue(BASEDONVALUE_PROP.get());
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
   * Gets the value of the ChangeType field.
   * Type of change made to this row
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.EffDatedChangeType getChangeType() {
    return (typekey.EffDatedChangeType)__getInternalInterface().getFieldValue(CHANGETYPE_PROP.get());
  }
  
  /**
   * 
   * @return the <code>Clause</code> associated with this scheduled item.
   * @deprecated (PC 8.0.6) use the method {@link #getClause(ClausePattern pattern)} instead
   */
  public entity.Clause getClause() {
    return ((gw.api.productmodel.ScheduledItemAdapter)__getDelegateManager().getImplementation("gw.api.productmodel.ScheduledItemAdapter")).getClause();
  }
  
  /**
   * 
   * @param pattern 
   * @return the <code>Clause</code> by clause pattern associated with this scheduled item.
   */
  public entity.Clause getClause(gw.api.productmodel.ClausePattern pattern) {
    return ((gw.api.productmodel.ScheduledItemAdapter)__getDelegateManager().getImplementation("gw.api.productmodel.ScheduledItemAdapter")).getClause(pattern);
  }
  
  /**
   * 
   * @return the <code>Clause[]</code> associated with this scheduled item.
   */
  public entity.Clause[] getClauses() {
    return ((gw.api.productmodel.ScheduledItemAdapter)__getDelegateManager().getImplementation("gw.api.productmodel.ScheduledItemAdapter")).getClauses();
  }
  
  /**
   * Returns the condition on the coverable object that has
   * the passed in pattern.
   * @param pattern - the coverage type to get
   * @return the condition on the coverable
   */
  public entity.PolicyCondition getCondition(gw.api.productmodel.ConditionPattern pattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getCondition(pattern);
  }
  
  public entity.PolicyCondition[] getConditionsFromCoverable() {
    return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getConditionsFromCoverable();
  }
  
  /**
   * 
   * @return the reference date of this Coverable object. This will be the internally persisted
   * reference date if that is not null. Otherwise it will be calculated based on the Coverable's policy line and
   * state.
   */
  public java.util.Date getCoverableReferenceDate() {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getCoverableReferenceDate();
  }
  
  /**
   * 
   * @return the state of this particular Coverable object.
   */
  public typekey.Jurisdiction getCoverableState() {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getCoverableState();
  }
  
  /**
   * Returns the coverage on the coverable object that has
   * the passed in pattern.
   * @param pattern - the coverage type to get
   * @return the coverage on the coverable
   */
  public entity.Coverage getCoverage(gw.api.productmodel.CoveragePattern pattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getCoverage(pattern);
  }
  
  /**
   * Returns the coverage, condition, or exclusion on the coverable object that has
   * the passed in pattern.
   * @param pattern - the type of coverage, condition, or exclusion to get
   * @return the clause on the coverable
   */
  public entity.Clause getCoverageConditionOrExclusion(gw.api.productmodel.ClausePattern pattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getCoverageConditionOrExclusion(pattern);
  }
  
  /**
   * 
   * @return all the coverages, conditions, and exclusions on this coverable object.
   */
  public entity.Clause[] getCoveragesConditionsAndExclusionsFromCoverable() {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getCoveragesConditionsAndExclusionsFromCoverable();
  }
  
  public entity.Coverage[] getCoveragesFromCoverable() {
    return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getCoveragesFromCoverable();
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
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateCol1() {
    return (java.util.Date)__getInternalInterface().getFieldValue(DATECOL1_PROP.get());
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
   * Returns the exclusion on the coverable object that has
   * the passed in pattern.
   * @param pattern - the coverage type to get
   * @return the exclusion on the coverable
   */
  public entity.Exclusion getExclusion(gw.api.productmodel.ExclusionPattern pattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getExclusion(pattern);
  }
  
  public entity.Exclusion[] getExclusionsFromCoverable() {
    return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getExclusionsFromCoverable();
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
  public entity.HOPDwellScheduleExclItem getFixed() {
    return (entity.HOPDwellScheduleExclItem)__getInternalInterface().getFieldValue(FIXED_PROP.get());
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
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getIntCol1() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(INTCOL1_PROP.get());
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
   * Gets the value of the NamedInsured field.
   * NamedInsured
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyNamedInsured getNamedInsured() {
    return (entity.PolicyNamedInsured)__getInternalInterface().getFieldValue(NAMEDINSURED_PROP.get());
  }
  
  public entity.PolicyLine getPolicyLine() {
    return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getPolicyLine();
  }
  
  /**
   * Gets the value of the PolicyLocation field.
   * Policy Location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLocation getPolicyLocation() {
    return (entity.PolicyLocation)__getInternalInterface().getFieldValue(POLICYLOCATION_PROP.get());
  }
  
  public entity.PolicyLocation[] getPolicyLocations() {
    return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getPolicyLocations();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getPosIntCol1() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(POSINTCOL1_PROP.get());
  }
  
  /**
   * Gets the Preferred Coverage Currency for coverages associated with this coverable and initializes the value if null.
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getPreferredCoverageCurrency() {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getPreferredCoverageCurrency();
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the ReferenceDateInternal field.
   * Internal field for storing the reference date of this entity on bound policy periods.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getReferenceDateInternal() {
    return (java.util.Date)__getInternalInterface().getFieldValue(REFERENCEDATEINTERNAL_PROP.get());
  }
  
  /**
   * Gets the value of the Schedule field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellingScheduleExcl getSchedule() {
    return (entity.HOPDwellingScheduleExcl)__getInternalInterface().getFieldValue(SCHEDULE_PROP.get());
  }
  
  /**
   * Gets the value of the ScheduleNumber field.
   * Schedule number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getScheduleNumber() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(SCHEDULENUMBER_PROP.get());
  }
  
  /**
   * The parent of this ScheduleItem.
   * @return parent of this scheduled item
   */
  public gw.api.domain.Schedule getScheduleParent() {
    return ((gw.api.productmodel.ScheduledItemAdapter)__getDelegateManager().getImplementation("gw.api.productmodel.ScheduledItemAdapter")).getScheduleParent();
  }
  
  /**
   * Gets the value of the ScheduledItemClause field.
   * The exclusion that applies to this scheduled item
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellSchExclItemExcl getScheduledItemClause() {
    return (entity.HOPDwellSchExclItemExcl)__getInternalInterface().getFieldValue(SCHEDULEDITEMCLAUSE_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellSchExclItemExcl[] getScheduledItemClauseArray() {
    return (entity.HOPDwellSchExclItemExcl[])__getInternalInterface().getFieldValue(SCHEDULEDITEMCLAUSEARRAY_PROP.get());
  }
  
  /**
   * Returns a label for this ScheduledItem, consisting of the ScheduledItem display name followed by the value of the
   * ScheduledItem's most descriptive property if it exists.
   */
  public java.lang.String getScheduledItemEntityLabel() {
    return ((com.guidewire.pc.domain.schedule.ScheduledItemPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.schedule.ScheduledItemPublicMethods")).getScheduledItemEntityLabel();
  }
  
  public entity.HOPDwellScheduleExclItem getSlice(java.util.Date sliceDate) {
    return (entity.HOPDwellScheduleExclItem)getSliceUntyped(sliceDate);
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
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStringCol1() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STRINGCOL1_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStringCol2() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STRINGCOL2_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStringCol3() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STRINGCOL3_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStringCol4() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STRINGCOL4_PROP.get());
  }
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.HOPDwellScheduleExclItem getSubtype() {
    return (typekey.HOPDwellScheduleExclItem)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTypeKeyCol1() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TYPEKEYCOL1_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTypeKeyCol2() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TYPEKEYCOL2_PROP.get());
  }
  
  public entity.HOPDwellScheduleExclItem getUnsliced() {
    return (entity.HOPDwellScheduleExclItem)getUnslicedUntyped();
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
  
  public entity.windowed.HOPDwellScheduleExclItemVersionList getVersionList() {
    return (entity.windowed.HOPDwellScheduleExclItemVersionList)getVersionListUntyped();
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
   * True if this scheduled has a Coverage, PolicyCondition, or Exclusion associated with it.
   * @return true if this scheduled item has a coverage, policy condition, or exclusion
   * associated with it
   * @deprecated (PC 8.0.6) use the method {@link #hasClause(ClausePattern pattern)} instead
   */
  public boolean hasClause() {
    return ((gw.api.productmodel.ScheduledItemAdapter)__getDelegateManager().getImplementation("gw.api.productmodel.ScheduledItemAdapter")).hasClause();
  }
  
  /**
   * True if this scheduled has a Coverage, PolicyCondition, or Exclusion by clause pattern associated with it.
   * @param pattern 
   * @return true if this scheduled item has a coverage, policy condition, or exclusion
   * associated with it
   */
  public boolean hasClause(gw.api.productmodel.ClausePattern pattern) {
    return ((gw.api.productmodel.ScheduledItemAdapter)__getDelegateManager().getImplementation("gw.api.productmodel.ScheduledItemAdapter")).hasClause(pattern);
  }
  
  /**
   * 
   * @param conditionPattern the pattern of the condition to check on this coverable
   * @return true if condition of the given <code>conditionPattern</code>
   * exists on this Coverable; false otherwise.
   */
  public boolean hasCondition(gw.api.productmodel.ConditionPattern conditionPattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).hasCondition(conditionPattern);
  }
  
  /**
   * 
   * @param coveragePattern the pattern of the coverage to check
   * @return true if coverage of the given <code>coveragePattern</code>
   * exists on this Coverable; false otherwise.
   */
  public boolean hasCoverage(gw.api.productmodel.CoveragePattern coveragePattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).hasCoverage(coveragePattern);
  }
  
  /**
   * 
   * @param pattern the pattern of the clause to check on this coverable
   * @return true if coverage, condition, or exclusion of the given <code>pattern</code>
   * exists on this Coverable; false otherwise.
   */
  public boolean hasCoverageConditionOrExclusion(gw.api.productmodel.ClausePattern pattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).hasCoverageConditionOrExclusion(pattern);
  }
  
  /**
   * 
   * @param exclusionPattern the pattern of the exclusion to check on this coverable
   * @return true if exclusion of the given <code>exclusionPattern</code>
   * exists on this Coverable; false otherwise.
   */
  public boolean hasExclusion(gw.api.productmodel.ExclusionPattern exclusionPattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).hasExclusion(exclusionPattern);
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBoolCol1() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(BOOLCOL1_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBoolCol2() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(BOOLCOL2_PROP.get());
  }
  
  /**
   * Determines whether the given condition pattern is available for this coverable. This will be
   * true only if the coverable type is a subtype of the pattern's owning entity type, and one of
   * the following two cases holds:
   * <p/>
   * <ol>
   * <li>The pattern is available according to both its lookup table and script (if any).
   * <li>The pattern exists in the previous version of the period, and its state is grandfathered.
   * </ol>
   * @param conditionPattern The condition pattern whose availability should be checked for this Coverable.
   * @return true if the pattern is available for this coverable; false otherwise
   */
  public java.lang.Boolean isConditionAvailable(gw.api.productmodel.ConditionPattern conditionPattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).isConditionAvailable(conditionPattern);
  }
  
  /**
   * Determines whether the given covterm pattern is available for this coverable. This assumes that the covterm's
   * clause pattern is available and will be true if one of the following two cases holds:
   * <p/>
   * <ol>
   * <li>The pattern is available according to both its lookup table and script (if any).
   * <li>The pattern exists in the previous version of the period, and its state is grandfathered.
   * </ol>
   * @param pattern The covterm pattern whose availability should be checked for this Coverable.
   * @return true if pattern is available for this coverable; false otherwise
   */
  public java.lang.Boolean isCovTermAvailable(gw.api.productmodel.CovTermPattern pattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).isCovTermAvailable(pattern);
  }
  
  /**
   * Determines whether the given coverage pattern is available for this coverable. This will be
   * true only if the coverable type is a subtype of the pattern's owning entity type, and one of
   * the following two cases holds:
   * <p/>
   * <ol>
   * <li>The pattern is available according to both its lookup table and script (if any).
   * <li>The pattern exists in the previous version of the period, and its state is grandfathered.
   * </ol>
   * @param pattern The coverage pattern whose availability should be checked for this Coverable.
   * @return true
   *         if pattern is available for this coverable; false otherwise
   */
  public java.lang.Boolean isCoverageAvailable(gw.api.productmodel.CoveragePattern pattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).isCoverageAvailable(pattern);
  }
  
  /**
   * Determines whether the given coverage, condition, or exclusion pattern is available for this coverable. This will be
   * true only if the coverable type is a subtype of the pattern's owning entity type, and one of
   * the following two cases holds:
   * <p/>
   * <ol>
   * <li>The pattern is available according to both its lookup table and script (if any).
   * <li>The pattern exists in the previous version of the period, and its state is grandfathered.
   * </ol>
   * @param pattern The coverage, condition, or exclusion pattern whose availability should be checked for this Coverable.
   * @return true if the pattern is available for this coverable; false otherwise
   */
  public java.lang.Boolean isCoverageConditionOrExclusionAvailable(gw.api.productmodel.ClausePattern pattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).isCoverageConditionOrExclusionAvailable(pattern);
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
   * Determines whether the given exclusion pattern is available for this coverable. This will be
   * true only if the coverable type is a subtype of the pattern's owning entity type, and one of
   * the following two cases holds:
   * <p/>
   * <ol>
   * <li>The pattern is available according to both its lookup table and script (if any).
   * <li>The pattern exists in the previous version of the period, and its state is grandfathered.
   * </ol>
   * @param exclusionPattern The exclusion pattern whose availability should be checked for this Coverable.
   * @return true if the pattern is available for this coverable; false otherwise
   */
  public java.lang.Boolean isExclusionAvailable(gw.api.productmodel.ExclusionPattern exclusionPattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).isExclusionAvailable(exclusionPattern);
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
   * Gets the value of the InitialConditionsCreated field.
   * Whether or not the initial set of conditions has been created on this Coverable.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isInitialConditionsCreated() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(INITIALCONDITIONSCREATED_PROP.get());
  }
  
  /**
   * Gets the value of the InitialCoveragesCreated field.
   * Whether or not the initial set of coverages has been created on this Coverable.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isInitialCoveragesCreated() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(INITIALCOVERAGESCREATED_PROP.get());
  }
  
  /**
   * Gets the value of the InitialExclusionsCreated field.
   * Whether or not the initial set of exclusions has been created on this Coverable.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isInitialExclusionsCreated() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(INITIALEXCLUSIONSCREATED_PROP.get());
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
   * Removes the given <code>condition</code> from this Coverable
   * @param policyCondition the condition to remove
   */
  public void removeConditionFromCoverable(entity.PolicyCondition policyCondition) {
    ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).removeConditionFromCoverable(policyCondition);
  }
  
  /**
   * Removes the given coverage, condition, or exclusion from this Coverable
   * @param coverageConditionOrExclusion the clause to remove
   */
  public void removeCoverageConditionOrExclusionFromCoverable(entity.Clause coverageConditionOrExclusion) {
    ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).removeCoverageConditionOrExclusionFromCoverable(coverageConditionOrExclusion);
  }
  
  /**
   * Removes the given <code>coverage</code> from this Coverable
   * @param coverage the coverage to remove
   */
  public void removeCoverageFromCoverable(entity.Coverage coverage) {
    ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).removeCoverageFromCoverable(coverage);
  }
  
  /**
   * Removes the given <code>exclusion</code> from this Coverable
   * @param exclusion the exclusion to remove
   */
  public void removeExclusionFromCoverable(entity.Exclusion exclusion) {
    ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).removeExclusionFromCoverable(exclusion);
  }
  
  /**
   * Sets the value of the ArchivePartition field.
   */
  private void setArchivePartition(java.lang.Long value) {
    __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  private void setBasedOnValue(entity.HOPDwellScheduleExclItem value) {
    __getInternalInterface().setFieldValue(BASEDONVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BoolCol1 field.
   */
  private void setBoolCol1(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(BOOLCOL1_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BoolCol2 field.
   */
  private void setBoolCol2(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(BOOLCOL2_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BranchValue field.
   */
  private void setBranchValue(entity.PolicyPeriod value) {
    __getInternalInterface().setFieldValue(BRANCHVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ChangeType field.
   */
  private void setChangeType(typekey.EffDatedChangeType value) {
    __getInternalInterface().setFieldValue(CHANGETYPE_PROP.get(), value);
  }
  
  /**
   * <p>Adds or removes a condition with the given condition pattern.
   * <p/>
   * <p>If <code>exist</code> is <code>true</code>, adds an instance of the condition of
   * type <code>pattern</code> to this Coverable if the condition does not already exist
   * on it; does nothing if condition already exists.
   * <p/>
   * <p>If <code>exist</code> is <code>false</code>, removes the condition of type
   * <code>pattern</code> from this Coverable if such a condition exists on it; does
   * nothing otherwise.
   * @param pattern determines which condition to add or remove
   * @param exist If true, adds a condition. If false, removes the condition.
   */
  public void setConditionExists(gw.api.productmodel.ConditionPattern pattern, java.lang.Boolean exist) {
    ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).setConditionExists(pattern, exist);
  }
  
  /**
   * <p>Adds or removes a coverage, condition, or exclusion with the given pattern.
   * <p/>
   * <p>If <code>exist</code> is <code>true</code>, adds an instance of the coverage, condition, or exclusion of
   * type <code>pattern</code> to this Coverable if it does not already exist
   * on it; does nothing if it already exists.
   * <p/>
   * <p>If <code>exist</code> is <code>false</code>, removes the coverage, condition, or exclusion of type
   * <code>pattern</code> from this Coverable if it exists on it; does
   * nothing otherwise.
   * @param pattern determines which coverage, condition, or exclusion to add or remove
   * @param exist If true, adds a coverage, condition, or exclusion. If false, removes it.
   */
  public void setCoverageConditionOrExclusionExists(gw.api.productmodel.ClausePattern pattern, java.lang.Boolean exist) {
    ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).setCoverageConditionOrExclusionExists(pattern, exist);
  }
  
  /**
   * <p>Adds or removes a coverage with the given coverage pattern.
   * <p/>
   * <p>If <code>exist</code> is <code>true</code>, adds an instance of the coverage of
   * type <code>pattern</code> to this Coverable if the coverage does not already exist
   * on it; does nothing if coverage already exists.
   * <p/>
   * <p>If <code>exist</code> is <code>false</code>, removes the coverage of type
   * <code>pattern</code> from this Coverable if such a coverage exists on it; does
   * nothing otherwise.
   * @param pattern determines which coverage to add or remove
   * @param exist If true, adds a coverage. If false, removes the coverage.
   */
  public void setCoverageExists(gw.api.productmodel.CoveragePattern pattern, java.lang.Boolean exist) {
    ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).setCoverageExists(pattern, exist);
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
   * Sets the value of the DateCol1 field.
   */
  private void setDateCol1(java.util.Date value) {
    __getInternalInterface().setFieldValue(DATECOL1_PROP.get(), value);
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
   * <p>Adds or removes a exclusion with the given exclusion pattern.
   * <p/>
   * <p>If <code>exist</code> is <code>true</code>, adds an instance of the exclusion of
   * type <code>pattern</code> to this Coverable if the exclusion does not already exist
   * on it; does nothing if exclusion already exists.
   * <p/>
   * <p>If <code>exist</code> is <code>false</code>, removes the exclusion of type
   * <code>pattern</code> from this Coverable if such a exclusion exists on it; does
   * nothing otherwise.
   * @param pattern determines which exclusion to add or remove
   * @param exist If true, adds a exclusion. If false, removes the exclusion.
   */
  public void setExclusionExists(gw.api.productmodel.ExclusionPattern pattern, java.lang.Boolean exist) {
    ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).setExclusionExists(pattern, exist);
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
  private void setFixed(entity.HOPDwellScheduleExclItem value) {
    __getInternalInterface().setFieldValue(FIXED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FrozenSet field.
   */
  public void setFrozenSet(entity.FrozenSet value) {
    __getInternalInterface().setFieldValue(FROZENSET_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the InitialConditionsCreated field.
   */
  public void setInitialConditionsCreated(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(INITIALCONDITIONSCREATED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the InitialCoveragesCreated field.
   */
  public void setInitialCoveragesCreated(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(INITIALCOVERAGESCREATED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the InitialExclusionsCreated field.
   */
  public void setInitialExclusionsCreated(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(INITIALEXCLUSIONSCREATED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the IntCol1 field.
   */
  private void setIntCol1(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(INTCOL1_PROP.get(), value);
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
   * Sets the value of the NamedInsured field.
   */
  public void setNamedInsured(entity.PolicyNamedInsured value) {
    __getInternalInterface().setFieldValue(NAMEDINSURED_PROP.get(), value);
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
   * Sets the value of the PolicyLocation field.
   */
  public void setPolicyLocation(entity.PolicyLocation value) {
    __getInternalInterface().setFieldValue(POLICYLOCATION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PosIntCol1 field.
   */
  private void setPosIntCol1(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(POSINTCOL1_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PreferredCoverageCurrency field.
   */
  public void setPreferredCoverageCurrency(typekey.Currency value) {
    __getInternalInterface().setFieldValue(PREFERREDCOVERAGECURRENCY_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the ReferenceDateInternal field.
   */
  public void setReferenceDateInternal(java.util.Date value) {
    __getInternalInterface().setFieldValue(REFERENCEDATEINTERNAL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Schedule field.
   */
  public void setSchedule(entity.HOPDwellingScheduleExcl value) {
    __getInternalInterface().setFieldValue(SCHEDULE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ScheduleNumber field.
   */
  public void setScheduleNumber(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(SCHEDULENUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ScheduledItemClause field.
   */
  public void setScheduledItemClause(entity.HOPDwellSchExclItemExcl value) {
    __getInternalInterface().setFieldValue(SCHEDULEDITEMCLAUSE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ScheduledItemClauseArray field.
   */
  private void setScheduledItemClauseArray(entity.HOPDwellSchExclItemExcl[] value) {
    __getInternalInterface().setFieldValue(SCHEDULEDITEMCLAUSEARRAY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the StringCol1 field.
   */
  private void setStringCol1(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(STRINGCOL1_PROP.get(), value);
  }
  
  /**
   * Sets the value of the StringCol2 field.
   */
  private void setStringCol2(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(STRINGCOL2_PROP.get(), value);
  }
  
  /**
   * Sets the value of the StringCol3 field.
   */
  private void setStringCol3(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(STRINGCOL3_PROP.get(), value);
  }
  
  /**
   * Sets the value of the StringCol4 field.
   */
  private void setStringCol4(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(STRINGCOL4_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Subtype field.
   */
  private void setSubtype(typekey.HOPDwellScheduleExclItem value) {
    __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TypeKeyCol1 field.
   */
  private void setTypeKeyCol1(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(TYPEKEYCOL1_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TypeKeyCol2 field.
   */
  private void setTypeKeyCol2(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(TYPEKEYCOL2_PROP.get(), value);
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
  
  public entity.HOPDwellScheduleExclItem split(java.util.Date splitDate) {
    return (entity.HOPDwellScheduleExclItem)splitUntyped(splitDate);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.HOPDwellScheduleExclItemInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.HOPDwellScheduleExclItem.this.__getDelegateManager();
    }
    
    /**
     * Adds the given <code>condition</code> to the delegator's conditions.
     * @param condition the PolicyCondition to add to the delegator's conditions
     * @throws IllegalArgumentException if the PolicyCondition cannot be associated with the coverable object
     */
    public void addCondition(entity.PolicyCondition condition) {
      ((gw.api.domain.CoverableAdapter)__getDelegateManager().getImplementation("gw.api.domain.CoverableAdapter")).addCondition(condition);
    }
    
    /**
     * Adds the given <code>coverage</code> to the delegator's coverages.
     * @param coverage the Coverage to add to the delegator's coverages
     * @throws IllegalArgumentException if the coverage cannot be associated with the coverable object
     */
    public void addCoverage(entity.Coverage coverage) {
      ((gw.api.domain.CoverableAdapter)__getDelegateManager().getImplementation("gw.api.domain.CoverableAdapter")).addCoverage(coverage);
    }
    
    /**
     * Adds the given <code>exclusion</code> to the delegator's exclusions.
     * @param exclusion the Exclusion to add to the delegator's exclusions
     * @throws IllegalArgumentException if the exclusion cannot be associated with the coverable object
     */
    public void addExclusion(entity.Exclusion exclusion) {
      ((gw.api.domain.CoverableAdapter)__getDelegateManager().getImplementation("gw.api.domain.CoverableAdapter")).addExclusion(exclusion);
    }
    
    public void addSlice(entity.EffDatedBase slice, java.util.Date sliceDate) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).addSlice(slice, sliceDate);
    }
    
    /**
     * Adds the given element to the ScheduledItemClauseArray array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToScheduledItemClauseArray(entity.HOPDwellSchExclItemExcl element) {
      __getInternalInterface().addArrayElement(SCHEDULEDITEMCLAUSEARRAY_PROP.get(), element);
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
    
    /**
     * Finds all issues involving conditions on this coverable. None of the actions involved will
     * be taken at this point; this will just return information about any potential problems.
     * @return the list of ProductModelSyncIssues found
     */
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkConditionsAgainstProductModel() {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkConditionsAgainstProductModel();
    }
    
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkConditionsAgainstProductModel(gw.api.productmodel.ConditionPattern[] patternsToCheck) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkConditionsAgainstProductModel(patternsToCheck);
    }
    
    /**
     * Finds all issues involving conditions contained on this coverable.  None of the actions
     * involved will be taken at this point; this will just return information about any
     * potential problems.
     * @param policyLine the PolicyLine for this Coverable
     * @return a list of ProductModelSyncIssues
     */
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkConditionsAgainstProductModelwLine(entity.PolicyLine policyLine) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkConditionsAgainstProductModelwLine(policyLine);
    }
    
    /**
     * Finds all issues involving coverages contained on this coverable. None of the actions
     * involved will be taken at this point; this will just return information about any
     * potential problems.
     * @return the list of ProductModelSyncIssues found
     */
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkCoveragesAgainstProductModel() {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkCoveragesAgainstProductModel();
    }
    
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkCoveragesAgainstProductModel(gw.api.productmodel.CoveragePattern[] patternsToCheck) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkCoveragesAgainstProductModel(patternsToCheck);
    }
    
    /**
     * Finds all issues involving coverages contained on this coverable.  None of the actions
     * involved will be taken at this point; this will just return information about any
     * potential problems.
     * @param policyLine the PolicyLine for this Coverable
     * @return a list of ProductModelSyncIssues
     */
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkCoveragesAgainstProductModelwLine(entity.PolicyLine policyLine) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkCoveragesAgainstProductModelwLine(policyLine);
    }
    
    /**
     * Finds all issues involving coverages, conditions, and exclusions on this coverable. None of the actions
     * involved will be taken at this point; this will just return information about any potential problems.
     * @return the list of ProductModelSyncIssues found
     */
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkCoveragesConditionsAndExclusionsAgainstProductModel() {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkCoveragesConditionsAndExclusionsAgainstProductModel();
    }
    
    /**
     * Finds all issues involving exclusions on this coverable. None of the actions involved will
     * be taken at this point; this will just return information about any potential problems.
     * @return the list of ProductModelSyncIssues found
     */
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkExclusionsAgainstProductModel() {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkExclusionsAgainstProductModel();
    }
    
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkExclusionsAgainstProductModel(gw.api.productmodel.ExclusionPattern[] patternsToCheck) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkExclusionsAgainstProductModel(patternsToCheck);
    }
    
    /**
     * Finds all issues involving exclusions contained on this coverable.  None of the actions
     * involved will be taken at this point; this will just return information about any
     * potential problems.
     * @param policyLine the PolicyLine for this Coverable
     * @return a list of ProductModelSyncIssues
     */
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkExclusionsAgainstProductModelwLine(entity.PolicyLine policyLine) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkExclusionsAgainstProductModelwLine(policyLine);
    }
    
    /**
     * Sets this Coverable's internal reference date field to null so {@link #getCoverableReferenceDate()}
     * will compute the reference date based on the current policy data, rather than returning the
     * persisted field's value. This is meant to be called only upon creating a new policy term (e.g.,
     * in a renewal job), when the reference dates must be recalculated.
     */
    public void clearCoverableReferenceDateInternal() {
      ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).clearCoverableReferenceDateInternal();
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
    
    /**
     * Creates a condition of the given <code>pattern</code> and adds the condition to this Coverable.
     * It also does the following:
     * <p/>
     * <ul>
     * <li>Automatically adds the available condition terms to the condition as determined
     * by the product model</li>
     * <li>Updates coverage symbols</li>
     * <li>Runs the Gosu initialization script from the corresponding pattern</li>
     * </ul>
     * @param pattern the pattern for the created condition
     * @return the newly created condition
     */
    public entity.PolicyCondition createCondition(gw.api.productmodel.ConditionPattern pattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).createCondition(pattern);
    }
    
    public entity.PolicyCondition createCondition(gw.api.productmodel.ConditionPattern pattern, com.guidewire.pc.domain.productmodel.CovTermAvailabilityContext context) {
      return ((com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods")).createCondition(pattern, context);
    }
    
    /**
     * Creates conditions on this object.  Asserts there are no existing
     * conditions on this object.  Use this method when first creating a coverable to
     * create conditions.
     * <p/>
     * Conditions created are available and of existence type Required or Suggested.
     * @throws IllegalStateException if this coverable already has conditions
     */
    public void createConditions() {
      ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).createConditions();
    }
    
    /**
     * Creates a coverage of the given <code>pattern</code> and adds the coverage to this Coverable.
     * It also does the following:
     * <p/>
     * <ul>
     * <li>Automatically adds the available coverage terms to the coverage as determined
     * by the product model</li>
     * <li>Updates coverage symbols</li>
     * <li>Runs the Gosu initialization script from the corresponding pattern</li>
     * </ul>
     * @param pattern the pattern for the created coverage
     * @return the newly created coverage
     */
    public entity.Coverage createCoverage(gw.api.productmodel.CoveragePattern pattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).createCoverage(pattern);
    }
    
    public entity.Coverage createCoverage(gw.api.productmodel.CoveragePattern pattern, com.guidewire.pc.domain.productmodel.CovTermAvailabilityContext context) {
      return ((com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods")).createCoverage(pattern, context);
    }
    
    /**
     * Creates a coverage, condition, or exclusion of the given <code>pattern</code> and adds it to this Coverable.
     * It also does the following:
     * <p/>
     * <ul>
     * <li>Automatically adds the available terms to the coverage, condition, or exclusion as determined
     * by the product model</li>
     * <li>Updates coverage symbols</li>
     * <li>Runs the Gosu initialization script from the corresponding pattern</li>
     * </ul>
     * @param pattern the pattern for the created clause
     * @return the newly created coverage, condition, or exclusion
     */
    public entity.Clause createCoverageConditionOrExclusion(gw.api.productmodel.ClausePattern pattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).createCoverageConditionOrExclusion(pattern);
    }
    
    public entity.Clause createCoverageConditionOrExclusion(gw.api.productmodel.ClausePattern pattern, com.guidewire.pc.domain.productmodel.CovTermAvailabilityContext context) {
      return ((com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods")).createCoverageConditionOrExclusion(pattern, context);
    }
    
    /**
     * Creates coverages on this object.  Asserts there are no existing
     * coverages on this object.  Use this method when first creating a coverable to
     * create coverages.
     * <p/>
     * Coverages created are available and of existence type Required or Suggested.
     * @throws IllegalStateException if this coverable already has coverages
     */
    public void createCoverages() {
      ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).createCoverages();
    }
    
    /**
     * Creates coverages, conditions, and exclusions on this object.  Asserts there are no existing
     * coverages, conditions, and exclusions on this object.  Use this method when first creating a coverable to
     * create coverages, conditions, and exclusions.
     * <p/>
     * Coverages, conditions, and exclusions created are available and of existence type Required or Suggested.
     * @throws IllegalStateException if this coverable already has coverages, conditions, or exclusions
     */
    public void createCoveragesConditionsAndExclusions() {
      ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).createCoveragesConditionsAndExclusions();
    }
    
    /**
     * Creates an exclusion of the given <code>pattern</code> and adds the exclusion to this Coverable.
     * It also does the following:
     * <p/>
     * <ul>
     * <li>Automatically adds the available exclusion terms to the exclusion as determined
     * by the product model</li>
     * <li>Updates coverage symbols</li>
     * <li>Runs the Gosu initialization script from the corresponding pattern</li>
     * </ul>
     * @param pattern the pattern for the created exclusion
     * @return the newly created exclusion
     */
    public entity.Exclusion createExclusion(gw.api.productmodel.ExclusionPattern pattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).createExclusion(pattern);
    }
    
    public entity.Exclusion createExclusion(gw.api.productmodel.ExclusionPattern pattern, com.guidewire.pc.domain.productmodel.CovTermAvailabilityContext context) {
      return ((com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods")).createExclusion(pattern, context);
    }
    
    /**
     * Creates exclusions on this object.  Asserts there are no existing
     * exclusions on this object.  Use this method when first creating a coverable to
     * create exclusions.
     * <p/>
     * Exclusions created are available and of existence type Required or Suggested.
     * @throws IllegalStateException if this coverable already has exclusions
     */
    public void createExclusions() {
      ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).createExclusions();
    }
    
    public boolean deletableInternal() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).deletableInternal();
    }
    
    /**
     * Stores the current value of {@link #getCoverableReferenceDate()} in this Coverable's internal
     * reference date field if that field is currently null, and does nothing otherwise. This should
     * be called only upon binding a policy period.
     */
    public void denormalizeCoverableReferenceDate() {
      ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).denormalizeCoverableReferenceDate();
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
     * Returns the list of currencies available for use on the coverable.  OOTB set to the available currencies on the
     * associated policy line pattern
     * @return list of currencies that are allowed to be set on the coverable
     */
    public java.util.List<typekey.Currency> getAllowedCurrencies() {
      return ((gw.api.domain.CoverableAdapter)__getDelegateManager().getImplementation("gw.api.domain.CoverableAdapter")).getAllowedCurrencies();
    }
    
    /**
     * Gets the value of the ArchivePartition field.
     * Unique number to partition the data so that the multiple workers can work independently
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getArchivePartition() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(ARCHIVEPARTITION_PROP.get());
    }
    
    public typekey.CoveragePartType[] getAssociatedCoveragePartTypes() {
      return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getAssociatedCoveragePartTypes();
    }
    
    public com.guidewire.pc.domain.productmodel.ClauseAvailabilityContext getAvailabilityContext(gw.api.productmodel.ClausePattern pattern) {
      return ((com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods")).getAvailabilityContext(pattern);
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
    public entity.HOPDwellScheduleExclItem getBasedOnValue() {
      return (entity.HOPDwellScheduleExclItem)__getInternalInterface().getFieldValue(BASEDONVALUE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getBasedOnValueID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(BASEDONVALUE_PROP.get());
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
     * 
     * @return the <code>Clause</code> associated with this scheduled item.
     * @deprecated (PC 8.0.6) use the method {@link #getClause(ClausePattern pattern)} instead
     */
    public entity.Clause getClause() {
      return ((gw.api.productmodel.ScheduledItemAdapter)__getDelegateManager().getImplementation("gw.api.productmodel.ScheduledItemAdapter")).getClause();
    }
    
    /**
     * 
     * @param pattern 
     * @return the <code>Clause</code> by clause pattern associated with this scheduled item.
     */
    public entity.Clause getClause(gw.api.productmodel.ClausePattern pattern) {
      return ((gw.api.productmodel.ScheduledItemAdapter)__getDelegateManager().getImplementation("gw.api.productmodel.ScheduledItemAdapter")).getClause(pattern);
    }
    
    /**
     * 
     * @return the <code>Clause[]</code> associated with this scheduled item.
     */
    public entity.Clause[] getClauses() {
      return ((gw.api.productmodel.ScheduledItemAdapter)__getDelegateManager().getImplementation("gw.api.productmodel.ScheduledItemAdapter")).getClauses();
    }
    
    /**
     * Returns the condition on the coverable object that has
     * the passed in pattern.
     * @param pattern - the coverage type to get
     * @return the condition on the coverable
     */
    public entity.PolicyCondition getCondition(gw.api.productmodel.ConditionPattern pattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getCondition(pattern);
    }
    
    public gw.api.productmodel.ConditionPattern[] getConditionTypesForCoverable() {
      return ((com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods")).getConditionTypesForCoverable();
    }
    
    public entity.PolicyCondition[] getConditionsFromCoverable() {
      return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getConditionsFromCoverable();
    }
    
    /**
     * 
     * @return the reference date of this Coverable object. This will be the internally persisted
     * reference date if that is not null. Otherwise it will be calculated based on the Coverable's policy line and
     * state.
     */
    public java.util.Date getCoverableReferenceDate() {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getCoverableReferenceDate();
    }
    
    /**
     * 
     * @return the state of this particular Coverable object.
     */
    public typekey.Jurisdiction getCoverableState() {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getCoverableState();
    }
    
    /**
     * Returns the coverage on the coverable object that has
     * the passed in pattern.
     * @param pattern - the coverage type to get
     * @return the coverage on the coverable
     */
    public entity.Coverage getCoverage(gw.api.productmodel.CoveragePattern pattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getCoverage(pattern);
    }
    
    public gw.api.productmodel.ClausePattern[] getCoverageConditionAndExclusionTypesForCoverable() {
      return ((com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods")).getCoverageConditionAndExclusionTypesForCoverable();
    }
    
    /**
     * Returns the coverage, condition, or exclusion on the coverable object that has
     * the passed in pattern.
     * @param pattern - the type of coverage, condition, or exclusion to get
     * @return the clause on the coverable
     */
    public entity.Clause getCoverageConditionOrExclusion(gw.api.productmodel.ClausePattern pattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getCoverageConditionOrExclusion(pattern);
    }
    
    public gw.api.productmodel.CoveragePattern[] getCoverageTypesForCoverable() {
      return ((com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods")).getCoverageTypesForCoverable();
    }
    
    /**
     * 
     * @return all the coverages, conditions, and exclusions on this coverable object.
     */
    public entity.Clause[] getCoveragesConditionsAndExclusionsFromCoverable() {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getCoveragesConditionsAndExclusionsFromCoverable();
    }
    
    public entity.Coverage[] getCoveragesFromCoverable() {
      return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getCoveragesFromCoverable();
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
     * Gets the value of the DateCol1 field.
     * Date Field
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getDateCol1() {
      return (java.util.Date)__getInternalInterface().getFieldValue(DATECOL1_PROP.get());
    }
    
    /**
     * Returns the currency used as the default for the PreferredCoverageCurrency input. E.g. we refer to the PolicyLine currency
     * in the PersonalVehicleCoverableAdapter.
     * @return the default currency used in the PreferredCoverageCurrency input
     */
    public typekey.Currency getDefaultCurrency() {
      return ((gw.api.domain.CoverableAdapter)__getDelegateManager().getImplementation("gw.api.domain.CoverableAdapter")).getDefaultCurrency();
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
     * Returns the exclusion on the coverable object that has
     * the passed in pattern.
     * @param pattern - the coverage type to get
     * @return the exclusion on the coverable
     */
    public entity.Exclusion getExclusion(gw.api.productmodel.ExclusionPattern pattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getExclusion(pattern);
    }
    
    public gw.api.productmodel.ExclusionPattern[] getExclusionTypesForCoverable() {
      return ((com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods")).getExclusionTypesForCoverable();
    }
    
    public entity.Exclusion[] getExclusionsFromCoverable() {
      return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getExclusionsFromCoverable();
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
    public entity.HOPDwellScheduleExclItem getFixed() {
      return (entity.HOPDwellScheduleExclItem)__getInternalInterface().getFieldValue(FIXED_PROP.get());
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
     * Gets the value of the IntCol1 field.
     * Integer field1
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getIntCol1() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(INTCOL1_PROP.get());
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
     * Gets the value of the NamedInsured field.
     * NamedInsured
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyNamedInsured getNamedInsured() {
      return (entity.PolicyNamedInsured)__getInternalInterface().getFieldValue(NAMEDINSURED_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getNamedInsuredID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(NAMEDINSURED_PROP.get());
    }
    
    public entity.PolicyLine getPolicyLine() {
      return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getPolicyLine();
    }
    
    /**
     * Gets the value of the PolicyLocation field.
     * Policy Location
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyLocation getPolicyLocation() {
      return (entity.PolicyLocation)__getInternalInterface().getFieldValue(POLICYLOCATION_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getPolicyLocationID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(POLICYLOCATION_PROP.get());
    }
    
    public entity.PolicyLocation[] getPolicyLocations() {
      return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getPolicyLocations();
    }
    
    /**
     * Gets the value of the PosIntCol1 field.
     * Positive integer field1
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getPosIntCol1() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(POSINTCOL1_PROP.get());
    }
    
    /**
     * Gets the Preferred Coverage Currency for coverages associated with this coverable and initializes the value if null.
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getPreferredCoverageCurrency() {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getPreferredCoverageCurrency();
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Gets the value of the ReferenceDateInternal field.
     * Internal field for storing the reference date of this entity on bound policy periods.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getReferenceDateInternal() {
      return (java.util.Date)__getInternalInterface().getFieldValue(REFERENCEDATEINTERNAL_PROP.get());
    }
    
    /**
     * Gets the value of the Schedule field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.HOPDwellingScheduleExcl getSchedule() {
      return (entity.HOPDwellingScheduleExcl)__getInternalInterface().getFieldValue(SCHEDULE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getScheduleID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(SCHEDULE_PROP.get());
    }
    
    /**
     * Gets the value of the ScheduleNumber field.
     * Schedule number
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getScheduleNumber() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(SCHEDULENUMBER_PROP.get());
    }
    
    /**
     * The parent of this ScheduleItem.
     * @return parent of this scheduled item
     */
    public gw.api.domain.Schedule getScheduleParent() {
      return ((gw.api.productmodel.ScheduledItemAdapter)__getDelegateManager().getImplementation("gw.api.productmodel.ScheduledItemAdapter")).getScheduleParent();
    }
    
    /**
     * Gets the value of the ScheduledItemClause field.
     * The exclusion that applies to this scheduled item
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.HOPDwellSchExclItemExcl getScheduledItemClause() {
      return (entity.HOPDwellSchExclItemExcl)__getInternalInterface().getFieldValue(SCHEDULEDITEMCLAUSE_PROP.get());
    }
    
    /**
     * Gets the value of the ScheduledItemClauseArray field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.HOPDwellSchExclItemExcl[] getScheduledItemClauseArray() {
      return (entity.HOPDwellSchExclItemExcl[])__getInternalInterface().getFieldValue(SCHEDULEDITEMCLAUSEARRAY_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getScheduledItemClauseID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(SCHEDULEDITEMCLAUSE_PROP.get());
    }
    
    /**
     * Returns a label for this ScheduledItem, consisting of the ScheduledItem display name followed by the value of the
     * ScheduledItem's most descriptive property if it exists.
     */
    public java.lang.String getScheduledItemEntityLabel() {
      return ((com.guidewire.pc.domain.schedule.ScheduledItemPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.schedule.ScheduledItemPublicMethods")).getScheduledItemEntityLabel();
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
     * 
     * @return the Jurisdiction of the delegating entity
     */
    public typekey.Jurisdiction getState() {
      return ((gw.api.domain.CoverableAdapter)__getDelegateManager().getImplementation("gw.api.domain.CoverableAdapter")).getState();
    }
    
    /**
     * Gets the value of the StringCol1 field.
     * String field1
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getStringCol1() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STRINGCOL1_PROP.get());
    }
    
    /**
     * Gets the value of the StringCol2 field.
     * String field2
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getStringCol2() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STRINGCOL2_PROP.get());
    }
    
    /**
     * Gets the value of the StringCol3 field.
     * String field3
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getStringCol3() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STRINGCOL3_PROP.get());
    }
    
    /**
     * Gets the value of the StringCol4 field.
     * String field4
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getStringCol4() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STRINGCOL4_PROP.get());
    }
    
    /**
     * Gets the value of the Subtype field.
     * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.HOPDwellScheduleExclItem getSubtype() {
      return (typekey.HOPDwellScheduleExclItem)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
    }
    
    public java.util.Date getTraversalDate() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getTraversalDate();
    }
    
    /**
     * Gets the value of the TypeKeyCol1 field.
     * typekey column field1
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getTypeKeyCol1() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TYPEKEYCOL1_PROP.get());
    }
    
    /**
     * Gets the value of the TypeKeyCol2 field.
     * typekey column field2
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getTypeKeyCol2() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TYPEKEYCOL2_PROP.get());
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
     * True if this scheduled has a Coverage, PolicyCondition, or Exclusion associated with it.
     * @return true if this scheduled item has a coverage, policy condition, or exclusion
     * associated with it
     * @deprecated (PC 8.0.6) use the method {@link #hasClause(ClausePattern pattern)} instead
     */
    public boolean hasClause() {
      return ((gw.api.productmodel.ScheduledItemAdapter)__getDelegateManager().getImplementation("gw.api.productmodel.ScheduledItemAdapter")).hasClause();
    }
    
    /**
     * True if this scheduled has a Coverage, PolicyCondition, or Exclusion by clause pattern associated with it.
     * @param pattern 
     * @return true if this scheduled item has a coverage, policy condition, or exclusion
     * associated with it
     */
    public boolean hasClause(gw.api.productmodel.ClausePattern pattern) {
      return ((gw.api.productmodel.ScheduledItemAdapter)__getDelegateManager().getImplementation("gw.api.productmodel.ScheduledItemAdapter")).hasClause(pattern);
    }
    
    /**
     * 
     * @param conditionPattern the pattern of the condition to check on this coverable
     * @return true if condition of the given <code>conditionPattern</code>
     * exists on this Coverable; false otherwise.
     */
    public boolean hasCondition(gw.api.productmodel.ConditionPattern conditionPattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).hasCondition(conditionPattern);
    }
    
    /**
     * 
     * @param coveragePattern the pattern of the coverage to check
     * @return true if coverage of the given <code>coveragePattern</code>
     * exists on this Coverable; false otherwise.
     */
    public boolean hasCoverage(gw.api.productmodel.CoveragePattern coveragePattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).hasCoverage(coveragePattern);
    }
    
    /**
     * 
     * @param pattern the pattern of the clause to check on this coverable
     * @return true if coverage, condition, or exclusion of the given <code>pattern</code>
     * exists on this Coverable; false otherwise.
     */
    public boolean hasCoverageConditionOrExclusion(gw.api.productmodel.ClausePattern pattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).hasCoverageConditionOrExclusion(pattern);
    }
    
    /**
     * 
     * @param exclusionPattern the pattern of the exclusion to check on this coverable
     * @return true if exclusion of the given <code>exclusionPattern</code>
     * exists on this Coverable; false otherwise.
     */
    public boolean hasExclusion(gw.api.productmodel.ExclusionPattern exclusionPattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).hasExclusion(exclusionPattern);
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
     * Gets the value of the BoolCol1 field.
     * Boolean Field1
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isBoolCol1() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(BOOLCOL1_PROP.get());
    }
    
    /**
     * Gets the value of the BoolCol2 field.
     * Boolean Field2
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isBoolCol2() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(BOOLCOL2_PROP.get());
    }
    
    /**
     * Determines whether the given condition pattern is available for this coverable. This will be
     * true only if the coverable type is a subtype of the pattern's owning entity type, and one of
     * the following two cases holds:
     * <p/>
     * <ol>
     * <li>The pattern is available according to both its lookup table and script (if any).
     * <li>The pattern exists in the previous version of the period, and its state is grandfathered.
     * </ol>
     * @param conditionPattern The condition pattern whose availability should be checked for this Coverable.
     * @return true if the pattern is available for this coverable; false otherwise
     */
    public java.lang.Boolean isConditionAvailable(gw.api.productmodel.ConditionPattern conditionPattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).isConditionAvailable(conditionPattern);
    }
    
    /**
     * Determines whether the given covterm pattern is available for this coverable. This assumes that the covterm's
     * clause pattern is available and will be true if one of the following two cases holds:
     * <p/>
     * <ol>
     * <li>The pattern is available according to both its lookup table and script (if any).
     * <li>The pattern exists in the previous version of the period, and its state is grandfathered.
     * </ol>
     * @param pattern The covterm pattern whose availability should be checked for this Coverable.
     * @return true if pattern is available for this coverable; false otherwise
     */
    public java.lang.Boolean isCovTermAvailable(gw.api.productmodel.CovTermPattern pattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).isCovTermAvailable(pattern);
    }
    
    /**
     * Determines whether the given coverage pattern is available for this coverable. This will be
     * true only if the coverable type is a subtype of the pattern's owning entity type, and one of
     * the following two cases holds:
     * <p/>
     * <ol>
     * <li>The pattern is available according to both its lookup table and script (if any).
     * <li>The pattern exists in the previous version of the period, and its state is grandfathered.
     * </ol>
     * @param pattern The coverage pattern whose availability should be checked for this Coverable.
     * @return true
     *         if pattern is available for this coverable; false otherwise
     */
    public java.lang.Boolean isCoverageAvailable(gw.api.productmodel.CoveragePattern pattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).isCoverageAvailable(pattern);
    }
    
    /**
     * Determines whether the given coverage, condition, or exclusion pattern is available for this coverable. This will be
     * true only if the coverable type is a subtype of the pattern's owning entity type, and one of
     * the following two cases holds:
     * <p/>
     * <ol>
     * <li>The pattern is available according to both its lookup table and script (if any).
     * <li>The pattern exists in the previous version of the period, and its state is grandfathered.
     * </ol>
     * @param pattern The coverage, condition, or exclusion pattern whose availability should be checked for this Coverable.
     * @return true if the pattern is available for this coverable; false otherwise
     */
    public java.lang.Boolean isCoverageConditionOrExclusionAvailable(gw.api.productmodel.ClausePattern pattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).isCoverageConditionOrExclusionAvailable(pattern);
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
     * Determines whether the given exclusion pattern is available for this coverable. This will be
     * true only if the coverable type is a subtype of the pattern's owning entity type, and one of
     * the following two cases holds:
     * <p/>
     * <ol>
     * <li>The pattern is available according to both its lookup table and script (if any).
     * <li>The pattern exists in the previous version of the period, and its state is grandfathered.
     * </ol>
     * @param exclusionPattern The exclusion pattern whose availability should be checked for this Coverable.
     * @return true if the pattern is available for this coverable; false otherwise
     */
    public java.lang.Boolean isExclusionAvailable(gw.api.productmodel.ExclusionPattern exclusionPattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).isExclusionAvailable(exclusionPattern);
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
     * Gets the value of the InitialConditionsCreated field.
     * Whether or not the initial set of conditions has been created on this Coverable.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isInitialConditionsCreated() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(INITIALCONDITIONSCREATED_PROP.get());
    }
    
    /**
     * Gets the value of the InitialCoveragesCreated field.
     * Whether or not the initial set of coverages has been created on this Coverable.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isInitialCoveragesCreated() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(INITIALCOVERAGESCREATED_PROP.get());
    }
    
    /**
     * Gets the value of the InitialExclusionsCreated field.
     * Whether or not the initial set of exclusions has been created on this Coverable.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isInitialExclusionsCreated() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(INITIALEXCLUSIONSCREATED_PROP.get());
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
    
    public com.guidewire.pl.system.expression.SymbolSet makeAvailabilitySymbolSet() {
      return ((com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods")).makeAvailabilitySymbolSet();
    }
    
    public com.guidewire.pl.system.expression.SymbolSet makeExistenceSymbolSet() {
      return ((com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods")).makeExistenceSymbolSet();
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
     * Removes the given <code>condition</code> from the delegator's policy conditions.
     * @param condition the Condition to remove from the delegator's policy conditions
     */
    public void removeCondition(entity.PolicyCondition condition) {
      ((gw.api.domain.CoverableAdapter)__getDelegateManager().getImplementation("gw.api.domain.CoverableAdapter")).removeCondition(condition);
    }
    
    public void removeCondition(gw.api.productmodel.ConditionPattern pattern) {
      ((com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods")).removeCondition(pattern);
    }
    
    /**
     * Removes the given <code>condition</code> from this Coverable
     * @param policyCondition the condition to remove
     */
    public void removeConditionFromCoverable(entity.PolicyCondition policyCondition) {
      ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).removeConditionFromCoverable(policyCondition);
    }
    
    /**
     * Removes the given <code>coverage</code> from the delegator's coverages
     * @param coverage the Coverage to remove from the delegator's coverages
     */
    public void removeCoverage(entity.Coverage coverage) {
      ((gw.api.domain.CoverableAdapter)__getDelegateManager().getImplementation("gw.api.domain.CoverableAdapter")).removeCoverage(coverage);
    }
    
    public void removeCoverage(gw.api.productmodel.CoveragePattern pattern) {
      ((com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods")).removeCoverage(pattern);
    }
    
    public void removeCoverageConditionOrExclusion(gw.api.productmodel.ClausePattern pattern) {
      ((com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods")).removeCoverageConditionOrExclusion(pattern);
    }
    
    /**
     * Removes the given coverage, condition, or exclusion from this Coverable
     * @param coverageConditionOrExclusion the clause to remove
     */
    public void removeCoverageConditionOrExclusionFromCoverable(entity.Clause coverageConditionOrExclusion) {
      ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).removeCoverageConditionOrExclusionFromCoverable(coverageConditionOrExclusion);
    }
    
    /**
     * Removes the given <code>coverage</code> from this Coverable
     * @param coverage the coverage to remove
     */
    public void removeCoverageFromCoverable(entity.Coverage coverage) {
      ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).removeCoverageFromCoverable(coverage);
    }
    
    /**
     * Removes the given <code>exclusion</code> from the delegator's exclusions.
     * @param exclusion the Exclusion to remove from the delegator's exclusions
     */
    public void removeExclusion(entity.Exclusion exclusion) {
      ((gw.api.domain.CoverableAdapter)__getDelegateManager().getImplementation("gw.api.domain.CoverableAdapter")).removeExclusion(exclusion);
    }
    
    public void removeExclusion(gw.api.productmodel.ExclusionPattern pattern) {
      ((com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods")).removeExclusion(pattern);
    }
    
    /**
     * Removes the given <code>exclusion</code> from this Coverable
     * @param exclusion the exclusion to remove
     */
    public void removeExclusionFromCoverable(entity.Exclusion exclusion) {
      ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).removeExclusionFromCoverable(exclusion);
    }
    
    /**
     * Removes the given element from the ScheduledItemClauseArray array. This is achieved by marking the element for removal.
     */
    public void removeFromScheduledItemClauseArray(entity.HOPDwellSchExclItemExcl element) {
      __getInternalInterface().removeArrayElement(SCHEDULEDITEMCLAUSEARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the ScheduledItemClauseArray array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromScheduledItemClauseArray(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(SCHEDULEDITEMCLAUSEARRAY_PROP.get(), elementID);
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the ArchivePartition field.
     */
    public void setArchivePartition(java.lang.Long value) {
      __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
    }
    
    public void setBasedOnId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).setBasedOnId(id);
    }
    
    /**
     * Sets the value of the BasedOnValue field.
     */
    public void setBasedOnValue(entity.HOPDwellScheduleExclItem value) {
      __getInternalInterface().setFieldValue(BASEDONVALUE_PROP.get(), value);
    }
    
    public void setBasedOnValueID(gw.pl.persistence.core.Key value) {
      setFieldValue(BASEDONVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BoolCol1 field.
     */
    public void setBoolCol1(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(BOOLCOL1_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BoolCol2 field.
     */
    public void setBoolCol2(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(BOOLCOL2_PROP.get(), value);
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
     * Sets the value of the ChangeType field.
     */
    public void setChangeType(typekey.EffDatedChangeType value) {
      __getInternalInterface().setFieldValue(CHANGETYPE_PROP.get(), value);
    }
    
    /**
     * <p>Adds or removes a condition with the given condition pattern.
     * <p/>
     * <p>If <code>exist</code> is <code>true</code>, adds an instance of the condition of
     * type <code>pattern</code> to this Coverable if the condition does not already exist
     * on it; does nothing if condition already exists.
     * <p/>
     * <p>If <code>exist</code> is <code>false</code>, removes the condition of type
     * <code>pattern</code> from this Coverable if such a condition exists on it; does
     * nothing otherwise.
     * @param pattern determines which condition to add or remove
     * @param exist If true, adds a condition. If false, removes the condition.
     */
    public void setConditionExists(gw.api.productmodel.ConditionPattern pattern, java.lang.Boolean exist) {
      ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).setConditionExists(pattern, exist);
    }
    
    /**
     * <p>Adds or removes a coverage, condition, or exclusion with the given pattern.
     * <p/>
     * <p>If <code>exist</code> is <code>true</code>, adds an instance of the coverage, condition, or exclusion of
     * type <code>pattern</code> to this Coverable if it does not already exist
     * on it; does nothing if it already exists.
     * <p/>
     * <p>If <code>exist</code> is <code>false</code>, removes the coverage, condition, or exclusion of type
     * <code>pattern</code> from this Coverable if it exists on it; does
     * nothing otherwise.
     * @param pattern determines which coverage, condition, or exclusion to add or remove
     * @param exist If true, adds a coverage, condition, or exclusion. If false, removes it.
     */
    public void setCoverageConditionOrExclusionExists(gw.api.productmodel.ClausePattern pattern, java.lang.Boolean exist) {
      ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).setCoverageConditionOrExclusionExists(pattern, exist);
    }
    
    /**
     * <p>Adds or removes a coverage with the given coverage pattern.
     * <p/>
     * <p>If <code>exist</code> is <code>true</code>, adds an instance of the coverage of
     * type <code>pattern</code> to this Coverable if the coverage does not already exist
     * on it; does nothing if coverage already exists.
     * <p/>
     * <p>If <code>exist</code> is <code>false</code>, removes the coverage of type
     * <code>pattern</code> from this Coverable if such a coverage exists on it; does
     * nothing otherwise.
     * @param pattern determines which coverage to add or remove
     * @param exist If true, adds a coverage. If false, removes the coverage.
     */
    public void setCoverageExists(gw.api.productmodel.CoveragePattern pattern, java.lang.Boolean exist) {
      ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).setCoverageExists(pattern, exist);
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
     * Sets the value of the DateCol1 field.
     */
    public void setDateCol1(java.util.Date value) {
      __getInternalInterface().setFieldValue(DATECOL1_PROP.get(), value);
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
     * <p>Adds or removes a exclusion with the given exclusion pattern.
     * <p/>
     * <p>If <code>exist</code> is <code>true</code>, adds an instance of the exclusion of
     * type <code>pattern</code> to this Coverable if the exclusion does not already exist
     * on it; does nothing if exclusion already exists.
     * <p/>
     * <p>If <code>exist</code> is <code>false</code>, removes the exclusion of type
     * <code>pattern</code> from this Coverable if such a exclusion exists on it; does
     * nothing otherwise.
     * @param pattern determines which exclusion to add or remove
     * @param exist If true, adds a exclusion. If false, removes the exclusion.
     */
    public void setExclusionExists(gw.api.productmodel.ExclusionPattern pattern, java.lang.Boolean exist) {
      ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).setExclusionExists(pattern, exist);
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
    public void setFixed(entity.HOPDwellScheduleExclItem value) {
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
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the InitialConditionsCreated field.
     */
    public void setInitialConditionsCreated(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(INITIALCONDITIONSCREATED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the InitialCoveragesCreated field.
     */
    public void setInitialCoveragesCreated(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(INITIALCOVERAGESCREATED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the InitialExclusionsCreated field.
     */
    public void setInitialExclusionsCreated(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(INITIALEXCLUSIONSCREATED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the IntCol1 field.
     */
    public void setIntCol1(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(INTCOL1_PROP.get(), value);
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
     * Sets the value of the NamedInsured field.
     */
    public void setNamedInsured(entity.PolicyNamedInsured value) {
      __getInternalInterface().setFieldValue(NAMEDINSURED_PROP.get(), value);
    }
    
    public void setNamedInsuredID(gw.pl.persistence.core.Key value) {
      setFieldValue(NAMEDINSURED_PROP.get(), value);
    }
    
    /**
     * Set a flag denoting that the currently instantiated object has been newly imported from
     * an external source
     * @param newlyImported 
     */
    public void setNewlyImported(boolean newlyImported) {
      ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
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
    
    /**
     * Sets the value of the PosIntCol1 field.
     */
    public void setPosIntCol1(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(POSINTCOL1_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PreferredCoverageCurrency field.
     */
    public void setPreferredCoverageCurrency(typekey.Currency value) {
      __getInternalInterface().setFieldValue(PREFERREDCOVERAGECURRENCY_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the ReferenceDateInternal field.
     */
    public void setReferenceDateInternal(java.util.Date value) {
      __getInternalInterface().setFieldValue(REFERENCEDATEINTERNAL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Schedule field.
     */
    public void setSchedule(entity.HOPDwellingScheduleExcl value) {
      __getInternalInterface().setFieldValue(SCHEDULE_PROP.get(), value);
    }
    
    public void setScheduleID(gw.pl.persistence.core.Key value) {
      setFieldValue(SCHEDULE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ScheduleNumber field.
     */
    public void setScheduleNumber(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(SCHEDULENUMBER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ScheduledItemClause field.
     */
    public void setScheduledItemClause(entity.HOPDwellSchExclItemExcl value) {
      __getInternalInterface().setFieldValue(SCHEDULEDITEMCLAUSE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ScheduledItemClauseArray field.
     */
    public void setScheduledItemClauseArray(entity.HOPDwellSchExclItemExcl[] value) {
      __getInternalInterface().setFieldValue(SCHEDULEDITEMCLAUSEARRAY_PROP.get(), value);
    }
    
    public void setScheduledItemClauseID(gw.pl.persistence.core.Key value) {
      setFieldValue(SCHEDULEDITEMCLAUSE_PROP.get(), value);
    }
    
    public void setSliceDate(java.util.Date sliceDate) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).setSliceDate(sliceDate);
    }
    
    public void setSlicesMap(java.util.Map<java.util.Date, entity.EffDatedBase> slices) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).setSlicesMap(slices);
    }
    
    /**
     * Sets the value of the StringCol1 field.
     */
    public void setStringCol1(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(STRINGCOL1_PROP.get(), value);
    }
    
    /**
     * Sets the value of the StringCol2 field.
     */
    public void setStringCol2(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(STRINGCOL2_PROP.get(), value);
    }
    
    /**
     * Sets the value of the StringCol3 field.
     */
    public void setStringCol3(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(STRINGCOL3_PROP.get(), value);
    }
    
    /**
     * Sets the value of the StringCol4 field.
     */
    public void setStringCol4(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(STRINGCOL4_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Subtype field.
     */
    public void setSubtype(typekey.HOPDwellScheduleExclItem value) {
      __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TypeKeyCol1 field.
     */
    public void setTypeKeyCol1(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(TYPEKEYCOL1_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TypeKeyCol2 field.
     */
    public void setTypeKeyCol2(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(TYPEKEYCOL2_PROP.get(), value);
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
    config.put("com.guidewire.pc.domain.coverage.CoverablePublicMethods", "com.guidewire.pc.domain.coverage.impl.CoverableImpl");
    config.put("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods", "com.guidewire.pc.domain.coverage.impl.CoverableImpl");
    config.put("com.guidewire.pc.domain.schedule.ScheduledItemPublicMethods", "com.guidewire.pc.domain.schedule.impl.ScheduledItemImpl");
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
    config.put("gw.api.copier.EffDatedCopyable", "gw.api.copier.EffDatedCopier");
    config.put("gw.api.domain.CoverableAbstractDomainMethods", "gw.lob.hop.schedule.HOPDwellScheduleExclItemCoverableAdapter");
    config.put("gw.api.domain.CoverableAdapter", "gw.lob.hop.schedule.HOPDwellScheduleExclItemCoverableAdapter");
    config.put("gw.api.logicalmatch.EffDatedLogicalMatcher", "gw.lob.hop.HOPDwellScheduleExclItemMatcher");
    config.put("gw.api.logicalmatch.LogicalMatcher", "gw.lob.hop.HOPDwellScheduleExclItemMatcher");
    config.put("gw.api.productmodel.ScheduledItemAdapter", "gw.lob.hop.schedule.HOPDwellScheduleExclItemCoverableAdapter");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.HOPDwellScheduleExclItem.class, config);
    com.guidewire._generated.entity.HOPDwellScheduleExclItemInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.HOPDwellScheduleExclItem, com.guidewire._generated.entity.HOPDwellScheduleExclItemInternal>() {
      public java.lang.Object getImplementation(entity.HOPDwellScheduleExclItem bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.HOPDwellScheduleExclItemInternal getInternalInterface(entity.HOPDwellScheduleExclItem bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.HOPDwellScheduleExclItem newEmptyInstance() {
        return new entity.HOPDwellScheduleExclItem((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}