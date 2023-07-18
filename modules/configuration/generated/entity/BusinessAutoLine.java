package entity;

/**
 * BusinessAutoLine
 * Commercial Auto line of business.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BusinessAutoLine.eti;BusinessAutoLine.eix;BusinessAutoLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "BusinessAutoLine")
public class BusinessAutoLine extends entity.PolicyLine implements entity.Coverable, entity.Modifiable, entity.CoverageSymbolGroupOwner, gw.api.policy.PolicyLineJavaMethods {
  public static final gw.pl.persistence.type.EffDatedEntityTypeReference<entity.BusinessAutoLine, entity.PolicyPeriod> TYPE = new com.guidewire.commons.metadata.types.EffDatedEntityIntrinsicTypeReference<entity.BusinessAutoLine, entity.PolicyPeriod>("entity.BusinessAutoLine");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> AUTOSYMBOLSMANUALEDITDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AutoSymbolsManualEditDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> BACOSTS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "BACosts");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> BALINECONDITIONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "BALineConditions");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> BALINECOVERAGES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "BALineCoverages");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> BALINEEXCLUSIONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "BALineExclusions");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> BAMODIFIERS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "BAModifiers");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BUSINESSVEHICLEAUTONUMBERSEQ_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "BusinessVehicleAutoNumberSeq");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CUSTOMAUTOSYMBOLDESC_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CustomAutoSymbolDesc");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> DRIVERS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Drivers");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> FLEET_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Fleet");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INITIALCONDITIONSCREATED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "InitialConditionsCreated");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INITIALCOVERAGESCREATED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "InitialCoveragesCreated");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INITIALEXCLUSIONSCREATED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "InitialExclusionsCreated");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> JURISDICTIONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Jurisdictions");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> POLICYTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "PolicyType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PREFERREDCOVERAGECURRENCY_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "PreferredCoverageCurrency");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> REFERENCEDATEINTERNAL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ReferenceDateInternal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> VEHICLES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Vehicles");
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  /**
   * Constructs a new instance of this entity in the given branch.
   */
  protected BusinessAutoLine(entity.PolicyPeriod branch, java.lang.String param_PatternCode)  {
    this((java.lang.Void)null);
    com.guidewire._generated.entity.PolicyPeriodInternalAccess.FRIEND_ACCESSOR.access().getInternalInterface(branch).initNewBeanInstance(this, java.util.Arrays.asList(param_PatternCode));
  }
  
  /**
   * Constructs a new <em>unsliced</em> instance of this entity in the given branch, and effective for the given date range.
   */
  protected BusinessAutoLine(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate, java.lang.String param_PatternCode)  {
    this((java.lang.Void)null);
    com.guidewire._generated.entity.PolicyPeriodInternalAccess.FRIEND_ACCESSOR.access().getInternalInterface(branch).initUnslicedBeanInstance(this, effectiveDate, expirationDate, java.util.Arrays.asList(param_PatternCode));
  }
  
  protected BusinessAutoLine(java.lang.Void ignored)  {
    super(ignored);
  }
  
  protected com.guidewire._generated.entity.BusinessAutoLineInternal __createInternalInterface() {
    return new _Internal();
  }
  
  protected com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap() {
    return DELEGATE_MAP;
  }
  
  protected com.guidewire._generated.entity.BusinessAutoLineInternal __getInternalInterface() {
    return (com.guidewire._generated.entity.BusinessAutoLineInternal)super.__getInternalInterface();
  }
  
  /**
   * Adds the given element to the BACosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBACosts(entity.BACost element) {
    __getInternalInterface().addArrayElement(BACOSTS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the BALineConditions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBALineConditions(entity.BusinessAutoCond element) {
    __getInternalInterface().addArrayElement(BALINECONDITIONS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the BALineCoverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBALineCoverages(entity.BusinessAutoCov element) {
    __getInternalInterface().addArrayElement(BALINECOVERAGES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the BALineExclusions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBALineExclusions(entity.BusinessAutoExcl element) {
    __getInternalInterface().addArrayElement(BALINEEXCLUSIONS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the BAModifiers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBAModifiers(entity.BAModifier element) {
    __getInternalInterface().addArrayElement(BAMODIFIERS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Drivers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDrivers(entity.CommercialDriver element) {
    __getInternalInterface().addArrayElement(DRIVERS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Jurisdictions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToJurisdictions(entity.BAJurisdiction element) {
    __getInternalInterface().addArrayElement(JURISDICTIONS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Vehicles array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToVehicles(entity.BusinessVehicle element) {
    __getInternalInterface().addArrayElement(VEHICLES_PROP.get(), element);
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
   * Checks modifiers on this Modifiable instance against the product model and returns the resulting sync issues.
   * None of the fix actions involved will be taken at this point; this will just return information about any
   * potential problems.
   * @return a list of ProductModelSyncIssues
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkModifiersAgainstProductModel() {
    return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).checkModifiersAgainstProductModel();
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
  
  /**
   * Sets this Modifiable's internal reference date field to null so {@link #getModifiableReferenceDate()}
   * will compute the reference date based on the current policy data, rather than returning the
   * persisted field's value. This is meant to be called only upon creating a new policy term (e.g.,
   * in a renewal job), when the reference dates must be recalculated.
   */
  public void clearModifiableReferenceDateInternal() {
    ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).clearModifiableReferenceDateInternal();
  }
  
  public entity.BusinessAutoLine clone() {
    return (entity.BusinessAutoLine)__getInternalInterface().cloneUntyped();
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
   * Creates and adds CoverageSymbolGroups using CoverageSymbolGroupPatterns
   * that belong to this owner's PolicyLine.
   */
  public void createCoverageSymbolGroups() {
    ((com.guidewire.pc.domain.coverage.CoverageSymbolGroupOwnerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverageSymbolGroupOwnerPublicMethods")).createCoverageSymbolGroups();
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
  
  /**
   * Stores the current value of {@link #getModifiableReferenceDate()} in this Modifiable's internal
   * reference date field if that field is currently null, and does nothing otherwise. This should
   * be called only upon binding a policy period.
   */
  public void denormalizeModifiableReferenceDate() {
    ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).denormalizeModifiableReferenceDate();
  }
  
  public typekey.CoveragePartType[] getAssociatedCoveragePartTypes() {
    return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getAssociatedCoveragePartTypes();
  }
  
  /**
   * Gets the value of the AutoSymbolsManualEditDate field.
   * Date when the selection of auto symbols was last manually edited
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getAutoSymbolsManualEditDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(AUTOSYMBOLSMANUALEDITDATE_PROP.get());
  }
  
  /**
   * Gets the value of the BACosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BACost[] getBACosts() {
    return (entity.BACost[])__getInternalInterface().getFieldValue(BACOSTS_PROP.get());
  }
  
  /**
   * Gets the value of the BALineConditions field.
   * Line-level conditions for Commercial Auto.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BusinessAutoCond[] getBALineConditions() {
    return (entity.BusinessAutoCond[])__getInternalInterface().getFieldValue(BALINECONDITIONS_PROP.get());
  }
  
  /**
   * Gets the value of the BALineCoverages field.
   * Line-level coverages for Commercial Auto.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BusinessAutoCov[] getBALineCoverages() {
    return (entity.BusinessAutoCov[])__getInternalInterface().getFieldValue(BALINECOVERAGES_PROP.get());
  }
  
  /**
   * Gets the value of the BALineExclusions field.
   * Line-level exclusions for Commercial Auto.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BusinessAutoExcl[] getBALineExclusions() {
    return (entity.BusinessAutoExcl[])__getInternalInterface().getFieldValue(BALINEEXCLUSIONS_PROP.get());
  }
  
  /**
   * Gets the value of the BAModifiers field.
   * Rating info for the line.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BAModifier[] getBAModifiers() {
    return (entity.BAModifier[])__getInternalInterface().getFieldValue(BAMODIFIERS_PROP.get());
  }
  
  public entity.BusinessAutoLine getBasedOn() {
    return (entity.BusinessAutoLine)__getInternalInterface().getBasedOnUntyped();
  }
  
  public entity.PolicyPeriod getBranch() {
    return (entity.PolicyPeriod)getBranchUntyped();
  }
  
  /**
   * Gets the value of the BusinessVehicleAutoNumberSeq field.
   * Sequence to autonumber vehicles
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AutoNumberSequence getBusinessVehicleAutoNumberSeq() {
    return (entity.AutoNumberSequence)__getInternalInterface().getFieldValue(BUSINESSVEHICLEAUTONUMBERSEQ_PROP.get());
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
  
  public entity.CoverageSymbolGroup getCoverageSymbolGroup(gw.api.productmodel.CoverageSymbolGroupPattern coverageSymbolGroupPattern) {
    return ((gw.api.domain.CoverageSymbolGroupOwnerAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverageSymbolGroupOwnerAbstractDomainMethods")).getCoverageSymbolGroup(coverageSymbolGroupPattern);
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
   * Gets the value of the CustomAutoSymbolDesc field.
   * Description of custom covered auto symbol.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCustomAutoSymbolDesc() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CUSTOMAUTOSYMBOLDESC_PROP.get());
  }
  
  /**
   * Gets the value of the Drivers field.
   * Drivers on this policy line.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CommercialDriver[] getDrivers() {
    return (entity.CommercialDriver[])__getInternalInterface().getFieldValue(DRIVERS_PROP.get());
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
   * Gets the value of the Fleet field.
   * Vehicle fleet designation.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.FleetType getFleet() {
    return (typekey.FleetType)__getInternalInterface().getFieldValue(FLEET_PROP.get());
  }
  
  /**
   * Gets the value of the Jurisdictions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BAJurisdiction[] getJurisdictions() {
    return (entity.BAJurisdiction[])__getInternalInterface().getFieldValue(JURISDICTIONS_PROP.get());
  }
  
  /**
   * Returns the policy line that this modifiable belongs to.
   * @return the policy line of this modifiable
   */
  public entity.PolicyLine getModifiableLine() {
    return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).getModifiableLine();
  }
  
  /**
   * Returns the policy period that this modifiable belongs to.
   * @return the policy period of this modifiable
   */
  public entity.PolicyPeriod getModifiablePolicyPeriod() {
    return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).getModifiablePolicyPeriod();
  }
  
  /**
   * Returns the reference date of this Modifiable object. This will be the internally persisted
   * reference date (see {@link gw.api.domain.ModifiableAdapter#getReferenceDateInternal()} if
   * that is not null. Otherwise it will be calculated based on the Modifiable's policy line and
   * state.
   * @return the reference date of this modifiable
   */
  public java.util.Date getModifiableReferenceDate() {
    return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).getModifiableReferenceDate();
  }
  
  /**
   * 
   * @return the state of this modifiable
   */
  public typekey.Jurisdiction getModifiableState() {
    return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).getModifiableState();
  }
  
  /**
   * Finds a Modifier of the given pattern on this Modifiable.
   * @param pattern Pattern of modifier to retrieve
   * @return Modifier that matches the criteria or <code>null</code> if none found
   */
  public entity.Modifier getModifier(gw.api.productmodel.ModifierPatternBase pattern) {
    return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).getModifier(pattern);
  }
  
  /**
   * Finds a Modifier on this Modifiable based on the given pattern code.
   * @param modifierPatternCode Public ID of the Modifier to find
   * @return Modifier that matches the criteria or <code>null</code> if none found
   */
  public entity.Modifier getModifier(java.lang.String modifierPatternCode) {
    return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).getModifier(modifierPatternCode);
  }
  
  /**
   * Returns the modifiers that are on this Modifiable. This method allow common access to
   * modifiers on Modifiable entities. However, it may be more efficient to use a similar method on the
   * Modifiable implementor that returns a specific subtype of Modifier.
   * @return Modifier[] Modifiers held by this Modifiable; may be empty array, but should not be null
   */
  public entity.Modifier[] getModifiers() {
    return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).getModifiers();
  }
  
  public entity.PolicyLine getPolicyLine() {
    return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getPolicyLine();
  }
  
  public entity.PolicyLocation[] getPolicyLocations() {
    return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getPolicyLocations();
  }
  
  /**
   * Gets the value of the PolicyType field.
   * Type of Commercial Auto policy.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BAPolicyType getPolicyType() {
    return (typekey.BAPolicyType)__getInternalInterface().getFieldValue(POLICYTYPE_PROP.get());
  }
  
  /**
   * Gets the Preferred Coverage Currency for coverages associated with this coverable and initializes the value if null.
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getPreferredCoverageCurrency() {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getPreferredCoverageCurrency();
  }
  
  /**
   * Gets the value of the ReferenceDateInternal field.
   * Internal field for storing the reference date of this entity on bound policy periods.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getReferenceDateInternal() {
    return (java.util.Date)__getInternalInterface().getFieldValue(REFERENCEDATEINTERNAL_PROP.get());
  }
  
  public entity.BusinessAutoLine getSlice(java.util.Date sliceDate) {
    return (entity.BusinessAutoLine)getSliceUntyped(sliceDate);
  }
  
  public entity.BusinessAutoLine getUnsliced() {
    return (entity.BusinessAutoLine)getUnslicedUntyped();
  }
  
  /**
   * Gets the value of the Vehicles field.
   * Vehicles on this policy line.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BusinessVehicle[] getVehicles() {
    return (entity.BusinessVehicle[])__getInternalInterface().getFieldValue(VEHICLES_PROP.get());
  }
  
  public entity.windowed.BusinessAutoLineVersionList getVersionList() {
    return (entity.windowed.BusinessAutoLineVersionList)getVersionListUntyped();
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
   * Removes the given element from the BACosts array. This is achieved by marking the element for removal.
   */
  public void removeFromBACosts(entity.BACost element) {
    __getInternalInterface().removeArrayElement(BACOSTS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the BACosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBACosts(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(BACOSTS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the BALineConditions array. This is achieved by marking the element for removal.
   */
  public void removeFromBALineConditions(entity.BusinessAutoCond element) {
    __getInternalInterface().removeArrayElement(BALINECONDITIONS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the BALineConditions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBALineConditions(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(BALINECONDITIONS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the BALineCoverages array. This is achieved by marking the element for removal.
   */
  public void removeFromBALineCoverages(entity.BusinessAutoCov element) {
    __getInternalInterface().removeArrayElement(BALINECOVERAGES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the BALineCoverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBALineCoverages(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(BALINECOVERAGES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the BALineExclusions array. This is achieved by marking the element for removal.
   */
  public void removeFromBALineExclusions(entity.BusinessAutoExcl element) {
    __getInternalInterface().removeArrayElement(BALINEEXCLUSIONS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the BALineExclusions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBALineExclusions(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(BALINEEXCLUSIONS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the BAModifiers array. This is achieved by marking the element for removal.
   */
  public void removeFromBAModifiers(entity.BAModifier element) {
    __getInternalInterface().removeArrayElement(BAMODIFIERS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the BAModifiers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBAModifiers(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(BAMODIFIERS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Drivers array. This is achieved by marking the element for removal.
   */
  public void removeFromDrivers(entity.CommercialDriver element) {
    __getInternalInterface().removeArrayElement(DRIVERS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Drivers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDrivers(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(DRIVERS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Jurisdictions array. This is achieved by marking the element for removal.
   */
  public void removeFromJurisdictions(entity.BAJurisdiction element) {
    __getInternalInterface().removeArrayElement(JURISDICTIONS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Jurisdictions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromJurisdictions(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(JURISDICTIONS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Vehicles array. This is achieved by marking the element for removal.
   */
  public void removeFromVehicles(entity.BusinessVehicle element) {
    __getInternalInterface().removeArrayElement(VEHICLES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Vehicles array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromVehicles(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(VEHICLES_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the AutoSymbolsManualEditDate field.
   */
  public void setAutoSymbolsManualEditDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(AUTOSYMBOLSMANUALEDITDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BACosts field.
   */
  public void setBACosts(entity.BACost[] value) {
    __getInternalInterface().setFieldValue(BACOSTS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BALineConditions field.
   */
  public void setBALineConditions(entity.BusinessAutoCond[] value) {
    __getInternalInterface().setFieldValue(BALINECONDITIONS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BALineCoverages field.
   */
  public void setBALineCoverages(entity.BusinessAutoCov[] value) {
    __getInternalInterface().setFieldValue(BALINECOVERAGES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BALineExclusions field.
   */
  public void setBALineExclusions(entity.BusinessAutoExcl[] value) {
    __getInternalInterface().setFieldValue(BALINEEXCLUSIONS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BAModifiers field.
   */
  public void setBAModifiers(entity.BAModifier[] value) {
    __getInternalInterface().setFieldValue(BAMODIFIERS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BusinessVehicleAutoNumberSeq field.
   */
  public void setBusinessVehicleAutoNumberSeq(entity.AutoNumberSequence value) {
    __getInternalInterface().setFieldValue(BUSINESSVEHICLEAUTONUMBERSEQ_PROP.get(), value);
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
   * Sets the value of the CustomAutoSymbolDesc field.
   */
  public void setCustomAutoSymbolDesc(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CUSTOMAUTOSYMBOLDESC_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Drivers field.
   */
  public void setDrivers(entity.CommercialDriver[] value) {
    __getInternalInterface().setFieldValue(DRIVERS_PROP.get(), value);
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
   * Sets the value of the Fleet field.
   */
  public void setFleet(typekey.FleetType value) {
    __getInternalInterface().setFieldValue(FLEET_PROP.get(), value);
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
   * Sets the value of the Jurisdictions field.
   */
  public void setJurisdictions(entity.BAJurisdiction[] value) {
    __getInternalInterface().setFieldValue(JURISDICTIONS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PolicyType field.
   */
  public void setPolicyType(typekey.BAPolicyType value) {
    __getInternalInterface().setFieldValue(POLICYTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PreferredCoverageCurrency field.
   */
  public void setPreferredCoverageCurrency(typekey.Currency value) {
    __getInternalInterface().setFieldValue(PREFERREDCOVERAGECURRENCY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ReferenceDateInternal field.
   */
  public void setReferenceDateInternal(java.util.Date value) {
    __getInternalInterface().setFieldValue(REFERENCEDATEINTERNAL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Vehicles field.
   */
  public void setVehicles(entity.BusinessVehicle[] value) {
    __getInternalInterface().setFieldValue(VEHICLES_PROP.get(), value);
  }
  
  public entity.BusinessAutoLine split(java.util.Date splitDate) {
    return (entity.BusinessAutoLine)splitUntyped(splitDate);
  }
  
  /**
   * Synchronizes modifiers on this Modifiable instance with the product model, adding and removing them
   * as necessary to match pattern changes and availability conditions.
   * @return a list of ProductModelSyncIssues
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> updateModifiers() {
    return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).updateModifiers();
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.BusinessAutoLineInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.BusinessAutoLine.this.__getDelegateManager();
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
    
    public void addCoverageSymbolGroup(entity.CoverageSymbolGroup group) {
      ((gw.api.domain.CoverageSymbolGroupAdapter)__getDelegateManager().getImplementation("gw.api.domain.CoverageSymbolGroupAdapter")).addCoverageSymbolGroup(group);
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
     * Adds the given element to the AdditionalInsureds array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToAdditionalInsureds(entity.PolicyAddlInsured element) {
      __getInternalInterface().addArrayElement(ADDITIONALINSUREDS_PROP.get(), element);
    }
    
    /**
     * Addes given answer to answers stored on this AnswerContainer.
     * @param answer answer to add
     */
    public void addToAnswers(entity.PCAnswerDelegate answer) {
      ((gw.api.domain.AnswerContainerAdapter)__getDelegateManager().getImplementation("gw.api.domain.AnswerContainerAdapter")).addToAnswers(answer);
    }
    
    /**
     * Adds the given element to the BACosts array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToBACosts(entity.BACost element) {
      __getInternalInterface().addArrayElement(BACOSTS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the BALineConditions array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToBALineConditions(entity.BusinessAutoCond element) {
      __getInternalInterface().addArrayElement(BALINECONDITIONS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the BALineCoverages array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToBALineCoverages(entity.BusinessAutoCov element) {
      __getInternalInterface().addArrayElement(BALINECOVERAGES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the BALineExclusions array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToBALineExclusions(entity.BusinessAutoExcl element) {
      __getInternalInterface().addArrayElement(BALINEEXCLUSIONS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the BAModifiers array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToBAModifiers(entity.BAModifier element) {
      __getInternalInterface().addArrayElement(BAMODIFIERS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the CoverageSymbolGroups array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToCoverageSymbolGroups(entity.CoverageSymbolGroup element) {
      __getInternalInterface().addArrayElement(COVERAGESYMBOLGROUPS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the DiagnosticRatingWorksheets array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToDiagnosticRatingWorksheets(entity.DiagnosticRatingWorksheet element) {
      __getInternalInterface().addArrayElement(DIAGNOSTICRATINGWORKSHEETS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Drivers array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToDrivers(entity.CommercialDriver element) {
      __getInternalInterface().addArrayElement(DRIVERS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Jurisdictions array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToJurisdictions(entity.BAJurisdiction element) {
      __getInternalInterface().addArrayElement(JURISDICTIONS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the LineAnswers array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToLineAnswers(entity.PolicyLineAnswer element) {
      __getInternalInterface().addArrayElement(LINEANSWERS_PROP.get(), element);
    }
    
    /**
     * Adds the given Modifier to the Modifiable.
     * @param element 
     */
    public void addToModifiers(entity.Modifier element) {
      ((gw.api.domain.ModifiableAdapter)__getDelegateManager().getImplementation("gw.api.domain.ModifiableAdapter")).addToModifiers(element);
    }
    
    /**
     * Adds the given element to the Vehicles array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToVehicles(entity.BusinessVehicle element) {
      __getInternalInterface().addArrayElement(VEHICLES_PROP.get(), element);
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
    
    /**
     * Indicates whether ChangeEditEffectiveDate (CEED) can be performed on this policy line.
     * @return true if can CEED, false otherwise.
     */
    public boolean canSafelyCEED() {
      return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).canSafelyCEED();
    }
    
    /**
     * Indicates whether or not this building can be safely deleted.
     * @param building the building to check
     * @return an error message if it can't be safely deleted, null or the empty String if it can
     */
    public java.lang.String canSafelyDeleteBuilding(entity.Building building) {
      return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).canSafelyDeleteBuilding(building);
    }
    
    /**
     * Indicates whether or not this contact can be safely deleted, according to this policy line.  If this returns
     * a null or empty string, that means that the line thinks it's okay to delete this contact.  Otherwise, this method
     * should return an error message indicating why this contact can't be deleted.
     * @param toContact the contact to check
     * @return an error message if it can't be safely deleted, null or the empty String if it can
     */
    public java.lang.String canSafelyDeleteExistingContact(entity.Contact toContact) {
      return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).canSafelyDeleteExistingContact(toContact);
    }
    
    /**
     * Indicates whether or not this location can be safely deleted, according to this policy line.  If this returns
     * a null or empty string, that means that the line thinks it's okay to delete the location.  Otherwise, this method
     * should return an error message indicating why the location can't be deleted.
     * <p>Depending on the line, it may be possible to safely delete a location even
     * {@link #checkLocationInUse(entity.PolicyLocation) if it is in use}.
     * @param location the PolicyLocation to check
     * @return an error message if it can't be safely deleted, null or the empty String if it can
     */
    public java.lang.String canSafelyDeleteLocation(entity.PolicyLocation location) {
      return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).canSafelyDeleteLocation(location);
    }
    
    /**
     * Indicates whether or not this policy named insured can be safely deleted, according to this policy line.  If this returns
     * a null or empty string, that means that the line thinks it's okay to delete the policy named insured.  Otherwise, this method
     * should return an error message indicating why the policy named insured can't be deleted.
     * @param polNamedInsured the PolicyNamedInsured to check
     * @return an error message if it can't be safely deleted, null or the empty String if it can
     */
    public java.lang.String canSafelyDeleteNamedInsured(entity.PolicyNamedInsured polNamedInsured) {
      return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).canSafelyDeleteNamedInsured(polNamedInsured);
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
     * Checks all answers stored on this container against the availability of the questions defined in
     * the product model.
     * @return a list of issues encountered
     */
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkAnswersAgainstProductModel() {
      return ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).checkAnswersAgainstProductModel();
    }
    
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkAnswersAgainstProductModel(gw.api.productmodel.QuestionSet[] questionSetsToSync) {
      return ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).checkAnswersAgainstProductModel(questionSetsToSync);
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
    
    public void checkCoverageSymbolGroupInvariants() {
      ((com.guidewire.pc.domain.coverage.impl.CoverageSymbolGroupOwnerInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverageSymbolGroupOwnerInternalMethods")).checkCoverageSymbolGroupInvariants();
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
     * Indicates whether or not this location is in use by the policy line.
     * <p>Depending on the line, {@link #canSafelyDeleteLocation(entity.PolicyLocation) it may be possible to safely delete a location}
     * even if it is in use.
     * @param location the PolicyLocation to check
     * @return true if the PolicyLocation is in use by this line, false if it is not
     * @deprecated In 10.0.0 and will be removed in 11.0.0.
     * Please use {@link #getLocationsInUseOnOrAfterSliceDate()}.
     * If you currently have an overriding Line-of-Business-specific implementation, please override getLocationsInUseOnOrAfterSliceDate() instead.
     */
    @java.lang.Deprecated
    public boolean checkLocationInUse(entity.PolicyLocation location) {
      return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).checkLocationInUse(location);
    }
    
    /**
     * Checks modifiers on this Modifiable instance against the product model and returns the resulting sync issues.
     * None of the fix actions involved will be taken at this point; this will just return information about any
     * potential problems.
     * @return a list of ProductModelSyncIssues
     */
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkModifiersAgainstProductModel() {
      return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).checkModifiersAgainstProductModel();
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
    
    /**
     * Sets this Modifiable's internal reference date field to null so {@link #getModifiableReferenceDate()}
     * will compute the reference date based on the current policy data, rather than returning the
     * persisted field's value. This is meant to be called only upon creating a new policy term (e.g.,
     * in a renewal job), when the reference dates must be recalculated.
     */
    public void clearModifiableReferenceDateInternal() {
      ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).clearModifiableReferenceDateInternal();
    }
    
    /**
     * Clears any Question/QuestionFilter dependencies that have been cached. Should be
     * called before displaying a question set in the app.
     */
    public void clearQuestionDependencies() {
      ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).clearQuestionDependencies();
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
     * Creates an answer for the given question and sets its value to the question's
     * default answer value, if any.
     * @param question the question to create an answer for
     * @throws IllegalStateException if an answer has already been allocated for the
     * question.
     * @return the created answer
     */
    public entity.PCAnswerDelegate createAnswer(gw.api.productmodel.Question question) {
      return ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).createAnswer(question);
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
     * Creates and adds CoverageSymbolGroups using CoverageSymbolGroupPatterns
     * that belong to this owner's PolicyLine.
     */
    public void createCoverageSymbolGroups() {
      ((com.guidewire.pc.domain.coverage.CoverageSymbolGroupOwnerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverageSymbolGroupOwnerPublicMethods")).createCoverageSymbolGroups();
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
    
    public entity.Modifier createModifier(gw.api.productmodel.ModifierPatternBase pattern) {
      return ((com.guidewire.pc.domain.policy.impl.ModifiableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.impl.ModifiableInternalMethods")).createModifier(pattern);
    }
    
    /**
     * Creates and returns an answer of the type associated with this AnswerContainer.
     * @return newly created answer of the type associated with this AnswerContainer
     */
    public entity.PCAnswerDelegate createRawAnswer() {
      return ((gw.api.domain.AnswerContainerAdapter)__getDelegateManager().getImplementation("gw.api.domain.AnswerContainerAdapter")).createRawAnswer();
    }
    
    /**
     * Instantiates a new Modifier of the appropriate subtype for this Modifiable.
     */
    public entity.Modifier createRawModifier() {
      return ((gw.api.domain.ModifiableAdapter)__getDelegateManager().getImplementation("gw.api.domain.ModifiableAdapter")).createRawModifier();
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
    
    /**
     * Stores the current value of {@link #getModifiableReferenceDate()} in this Modifiable's internal
     * reference date field if that field is currently null, and does nothing otherwise. This should
     * be called only upon binding a policy period.
     */
    public void denormalizeModifiableReferenceDate() {
      ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).denormalizeModifiableReferenceDate();
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
     * Gets the value of the AdditionalInsureds field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyAddlInsured[] getAdditionalInsureds() {
      return (entity.PolicyAddlInsured[])__getInternalInterface().getFieldValue(ADDITIONALINSUREDS_PROP.get());
    }
    
    /**
     * <b>Note:</b> this method is expensive and should be used infrequently.
     * @return all coverages, exclusions, and conditions on the policy line
     */
    public entity.Clause[] getAllClauses() {
      return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).getAllClauses();
    }
    
    /**
     * Returns all conditions on the policy line
     * @return all conditions on the policy line
     */
    public entity.PolicyCondition[] getAllConditions() {
      return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).getAllConditions();
    }
    
    /**
     * Returns all Coverables on the policy line.
     * @return Coverable[]
     */
    public entity.Coverable[] getAllCoverables() {
      return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).getAllCoverables();
    }
    
    /**
     * <b>Note:</b> this method is expensive and should be used infrequently.
     * Moreover, each policy line should override this and include coverages
     * specific to the line. For instance, BA Line needs to add coverages on its
     * vehicles and jurisdictions.
     * @return all coverages on the policy line
     */
    public entity.Coverage[] getAllCoverages() {
      return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).getAllCoverages();
    }
    
    /**
     * If schedules are implemented on policy line, this method will return a list of current and future scheduled items.
     * @return all scheduled items on policy line
     */
    public java.util.List<entity.ScheduledItem> getAllCurrentAndFutureScheduledItems() {
      return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).getAllCurrentAndFutureScheduledItems();
    }
    
    /**
     * Returns all exclusions on the policy line
     * @return all exclusions on the policy line
     */
    public entity.Exclusion[] getAllExclusions() {
      return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).getAllExclusions();
    }
    
    /**
     * Returns the Modifier array on the Modifiable.
     */
    public entity.Modifier[] getAllModifiers() {
      return ((gw.api.domain.ModifiableAdapter)__getDelegateManager().getImplementation("gw.api.domain.ModifiableAdapter")).getAllModifiers();
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
     * Returns the answer to the given question, or null if none has been allocated
     * yet.
     * @param question the question to get the answer for
     * @return the answer for the given question
     */
    public entity.PCAnswerDelegate getAnswer(gw.api.productmodel.Question question) {
      return ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).getAnswer(question);
    }
    
    /**
     * Gets the actual value of the answer. If the answer is undefined on this
     * entity, use the default answer if there is one, else null.
     * @param question the question to get the answer value for
     * @return the answer value
     */
    public java.lang.Object getAnswerValue(gw.api.productmodel.Question question) {
      return ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).getAnswerValue(question);
    }
    
    public entity.PCAnswerDelegate[] getAnswers() {
      return ((gw.api.domain.AnswerContainerAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.AnswerContainerAbstractDomainMethods")).getAnswers();
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
    
    public entity.PolicyPeriod getAssociatedPolicyPeriod() {
      return ((gw.api.domain.AnswerContainerAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.AnswerContainerAbstractDomainMethods")).getAssociatedPolicyPeriod();
    }
    
    /**
     * Gets the value of the AutoSymbolsManualEditDate field.
     * Date when the selection of auto symbols was last manually edited
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getAutoSymbolsManualEditDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(AUTOSYMBOLSMANUALEDITDATE_PROP.get());
    }
    
    public com.guidewire.pc.domain.productmodel.ClauseAvailabilityContext getAvailabilityContext(gw.api.productmodel.ClausePattern pattern) {
      return ((com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods")).getAvailabilityContext(pattern);
    }
    
    /**
     * Gets the value of the BACosts field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.BACost[] getBACosts() {
      return (entity.BACost[])__getInternalInterface().getFieldValue(BACOSTS_PROP.get());
    }
    
    /**
     * Gets the value of the BALineConditions field.
     * Line-level conditions for Commercial Auto.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.BusinessAutoCond[] getBALineConditions() {
      return (entity.BusinessAutoCond[])__getInternalInterface().getFieldValue(BALINECONDITIONS_PROP.get());
    }
    
    /**
     * Gets the value of the BALineCoverages field.
     * Line-level coverages for Commercial Auto.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.BusinessAutoCov[] getBALineCoverages() {
      return (entity.BusinessAutoCov[])__getInternalInterface().getFieldValue(BALINECOVERAGES_PROP.get());
    }
    
    /**
     * Gets the value of the BALineExclusions field.
     * Line-level exclusions for Commercial Auto.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.BusinessAutoExcl[] getBALineExclusions() {
      return (entity.BusinessAutoExcl[])__getInternalInterface().getFieldValue(BALINEEXCLUSIONS_PROP.get());
    }
    
    /**
     * Gets the value of the BAModifiers field.
     * Rating info for the line.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.BAModifier[] getBAModifiers() {
      return (entity.BAModifier[])__getInternalInterface().getFieldValue(BAMODIFIERS_PROP.get());
    }
    
    /**
     * Returns the base state of the policy period that contains this line.
     * @return the base state of the period
     */
    public typekey.Jurisdiction getBaseState() {
      return ((com.guidewire.pc.domain.policy.lines.PolicyLinePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.lines.PolicyLinePublicMethods")).getBaseState();
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
    public entity.PolicyLine getBasedOnValue() {
      return (entity.PolicyLine)__getInternalInterface().getFieldValue(BASEDONVALUE_PROP.get());
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
     * Gets the value of the BusinessVehicleAutoNumberSeq field.
     * Sequence to autonumber vehicles
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AutoNumberSequence getBusinessVehicleAutoNumberSeq() {
      return (entity.AutoNumberSequence)__getInternalInterface().getFieldValue(BUSINESSVEHICLEAUTONUMBERSEQ_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getBusinessVehicleAutoNumberSeqID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(BUSINESSVEHICLEAUTONUMBERSEQ_PROP.get());
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
     * @return all this line's cost version lists in a LoB-independent manner.
     */
    public java.lang.Iterable<gw.pl.persistence.core.effdate.EffDatedVersionList> getCostVLs() {
      return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).getCostVLs();
    }
    
    /**
     * 
     * @return all this line's costs across the term, in window mode and in a LoB-independent manner.
     */
    public java.util.Set<entity.Cost> getCosts() {
      return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).getCosts();
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
    
    public entity.CoverageSymbolGroup getCoverageSymbolGroup(gw.api.productmodel.CoverageSymbolGroupPattern coverageSymbolGroupPattern) {
      return ((gw.api.domain.CoverageSymbolGroupOwnerAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverageSymbolGroupOwnerAbstractDomainMethods")).getCoverageSymbolGroup(coverageSymbolGroupPattern);
    }
    
    /**
     * Gets the value of the CoverageSymbolGroups field.
     * Groups of coverage symbols on this policy line
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.CoverageSymbolGroup[] getCoverageSymbolGroups() {
      return (entity.CoverageSymbolGroup[])__getInternalInterface().getFieldValue(COVERAGESYMBOLGROUPS_PROP.get());
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
     * Returns jurisdictions that are covered by this line.
     * @return Jurisdiction[] states covered by this line
     */
    public typekey.Jurisdiction[] getCoveredStates() {
      return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).getCoveredStates();
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
     * Gets the value of the CustomAutoSymbolDesc field.
     * Description of custom covered auto symbol.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCustomAutoSymbolDesc() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CUSTOMAUTOSYMBOLDESC_PROP.get());
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
     * Gets the value of the DiagnosticRatingWorksheets field.
     * A list of DiagnosticRatingWorksheet entities related to this PolicyLine
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.DiagnosticRatingWorksheet[] getDiagnosticRatingWorksheets() {
      return (entity.DiagnosticRatingWorksheet[])__getInternalInterface().getFieldValue(DIAGNOSTICRATINGWORKSHEETS_PROP.get());
    }
    
    /**
     * Gets the value of the Drivers field.
     * Drivers on this policy line.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.CommercialDriver[] getDrivers() {
      return (entity.CommercialDriver[])__getInternalInterface().getFieldValue(DRIVERS_PROP.get());
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
    public entity.PolicyLine getFixed() {
      return (entity.PolicyLine)__getInternalInterface().getFieldValue(FIXED_PROP.get());
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
     * Gets the value of the Fleet field.
     * Vehicle fleet designation.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.FleetType getFleet() {
      return (typekey.FleetType)__getInternalInterface().getFieldValue(FLEET_PROP.get());
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
     * Gets the value of the Jurisdictions field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.BAJurisdiction[] getJurisdictions() {
      return (entity.BAJurisdiction[])__getInternalInterface().getFieldValue(JURISDICTIONS_PROP.get());
    }
    
    /**
     * Gets the value of the LineAnswers field.
     * Set of answers for this policyline.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyLineAnswer[] getLineAnswers() {
      return (entity.PolicyLineAnswer[])__getInternalInterface().getFieldValue(LINEANSWERS_PROP.get());
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
     * Return all current and future policy locations in use by the policy line
     * @return set of fixedId's for all current and future policy locations in use by the policy line
     */
    public java.util.Set<gw.pl.persistence.core.Key> getLocationsInUseOnOrAfterSliceDate() {
      return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).getLocationsInUseOnOrAfterSliceDate();
    }
    
    public entity.EffDatedBase getMaster() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getMaster();
    }
    
    public gw.api.policy.PolicyLineJavaMethods getMethodsDelegate() {
      return ((com.guidewire.pc.domain.policy.lines.impl.PolicyLineInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.lines.impl.PolicyLineInternalMethods")).getMethodsDelegate();
    }
    
    /**
     * Returns the policy line that this modifiable belongs to.
     * @return the policy line of this modifiable
     */
    public entity.PolicyLine getModifiableLine() {
      return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).getModifiableLine();
    }
    
    /**
     * Returns the policy period that this modifiable belongs to.
     * @return the policy period of this modifiable
     */
    public entity.PolicyPeriod getModifiablePolicyPeriod() {
      return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).getModifiablePolicyPeriod();
    }
    
    /**
     * Returns the reference date of this Modifiable object. This will be the internally persisted
     * reference date (see {@link gw.api.domain.ModifiableAdapter#getReferenceDateInternal()} if
     * that is not null. Otherwise it will be calculated based on the Modifiable's policy line and
     * state.
     * @return the reference date of this modifiable
     */
    public java.util.Date getModifiableReferenceDate() {
      return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).getModifiableReferenceDate();
    }
    
    /**
     * 
     * @return the state of this modifiable
     */
    public typekey.Jurisdiction getModifiableState() {
      return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).getModifiableState();
    }
    
    /**
     * Finds a Modifier of the given pattern on this Modifiable.
     * @param pattern Pattern of modifier to retrieve
     * @return Modifier that matches the criteria or <code>null</code> if none found
     */
    public entity.Modifier getModifier(gw.api.productmodel.ModifierPatternBase pattern) {
      return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).getModifier(pattern);
    }
    
    /**
     * Finds a Modifier on this Modifiable based on the given pattern code.
     * @param modifierPatternCode Public ID of the Modifier to find
     * @return Modifier that matches the criteria or <code>null</code> if none found
     */
    public entity.Modifier getModifier(java.lang.String modifierPatternCode) {
      return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).getModifier(modifierPatternCode);
    }
    
    /**
     * Returns the modifiers that are on this Modifiable. This method allow common access to
     * modifiers on Modifiable entities. However, it may be more efficient to use a similar method on the
     * Modifiable implementor that returns a specific subtype of Modifier.
     * @return Modifier[] Modifiers held by this Modifiable; may be empty array, but should not be null
     */
    public entity.Modifier[] getModifiers() {
      return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).getModifiers();
    }
    
    /**
     * Gets the value of the NumAddInsured field.
     * The number of additional insureds. For Quick Quotes users enter just the number additional insureds instead of all the details
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getNumAddInsured() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(NUMADDINSURED_PROP.get());
    }
    
    /**
     * 
     * @return all states for which official IDs should be created.
     */
    public typekey.State[] getOfficialIDStates() {
      return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).getOfficialIDStates();
    }
    
    /**
     * 
     * @return the policy line pattern from which this line derived
     */
    public gw.api.productmodel.PolicyLinePattern getPattern() {
      return ((com.guidewire.pc.domain.policy.lines.PolicyLinePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.lines.PolicyLinePublicMethods")).getPattern();
    }
    
    /**
     * Gets the value of the PatternCode field.
     * The pattern defining what kind of PolicyLine this is
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPatternCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PATTERNCODE_PROP.get());
    }
    
    public entity.PolicyLine getPolicyLine() {
      return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getPolicyLine();
    }
    
    public entity.PolicyLocation[] getPolicyLocations() {
      return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getPolicyLocations();
    }
    
    /**
     * Returns the PolicyPeriod of the Modifiable. Must not return null.
     */
    public entity.PolicyPeriod getPolicyPeriod() {
      return ((gw.api.domain.ModifiableAdapter)__getDelegateManager().getImplementation("gw.api.domain.ModifiableAdapter")).getPolicyPeriod();
    }
    
    /**
     * Gets the value of the PolicyType field.
     * Type of Commercial Auto policy.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.BAPolicyType getPolicyType() {
      return (typekey.BAPolicyType)__getInternalInterface().getFieldValue(POLICYTYPE_PROP.get());
    }
    
    /**
     * Gets the Preferred Coverage Currency for coverages associated with this coverable and initializes the value if null.
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getPreferredCoverageCurrency() {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getPreferredCoverageCurrency();
    }
    
    public java.lang.String getProductModelTypeName() {
      return ((com.guidewire.pc.domain.policy.lines.impl.PolicyLineInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.lines.impl.PolicyLineInternalMethods")).getProductModelTypeName();
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Recalculates question dependencies if they have been cleared (see {@link #clearQuestionDependencies}),
     * then returns all questions that are dependent on the given question's answers.
     * @param question the question to get dependencies for
     * @return the set of questions on which the given question depends
     */
    public java.util.Set<gw.api.productmodel.Question> getQuestionDependencies(gw.api.productmodel.Question question) {
      return ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).getQuestionDependencies(question);
    }
    
    /**
     * Returns reference date to use for question set availability lookup based on question set type.
     * @param questionSetType question set type that reference date is requested for
     * @return reference date to use for availability lookup of question sets of given type.
     */
    public java.util.Date getQuestionSetLookupReferenceDate(typekey.QuestionSetType questionSetType) {
      return ((gw.api.domain.AnswerContainerAdapter)__getDelegateManager().getImplementation("gw.api.domain.AnswerContainerAdapter")).getQuestionSetLookupReferenceDate(questionSetType);
    }
    
    public gw.api.productmodel.QuestionSet[] getQuestionSets() {
      return ((gw.api.domain.AnswerContainerAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.AnswerContainerAbstractDomainMethods")).getQuestionSets();
    }
    
    /**
     * 
     * @return associated quote rounding level
     */
    public java.lang.Integer getQuoteRoundingLevel() {
      return ((com.guidewire.pc.domain.rating.RateflowMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.RateflowMethods")).getQuoteRoundingLevel();
    }
    
    /**
     * 
     * @return associated quote rounding mode
     */
    public java.math.RoundingMode getQuoteRoundingMode() {
      return ((com.guidewire.pc.domain.rating.RateflowMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.RateflowMethods")).getQuoteRoundingMode();
    }
    
    public com.guidewire.pc.domain.productmodel.RateFactorAvailabilityContext getRateFactorAvailabilityContext(gw.api.productmodel.ModifierPatternBase modifierPattern) {
      return ((com.guidewire.pc.domain.policy.impl.ModifiableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.impl.ModifiableInternalMethods")).getRateFactorAvailabilityContext(modifierPattern);
    }
    
    /**
     * Returns the reference date that should be used for availability lookups for the given state.
     * This method first determines the reference date type (either effective date, written date or
     * rating period date) for the given state, the type of this product and the underwriting
     * company on the policy period. Then the {@link gw.plugin.productmodel.IReferenceDatePlugin} is
     * invoked to return the appropriate date.
     * @param baseState the base state to check
     * @return the reference date for the given state in the job
     */
    public java.util.Date getReferenceDateForCurrentJob(typekey.Jurisdiction baseState) {
      return ((com.guidewire.pc.domain.policy.lines.PolicyLinePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.lines.PolicyLinePublicMethods")).getReferenceDateForCurrentJob(baseState);
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
     * Gets the value of the Subtype field.
     * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.PolicyLine getSubtype() {
      return (typekey.PolicyLine)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
    }
    
    /**
     * 
     * @return this line's transactions in a LoB-independent manner.
     */
    public java.util.Set<entity.Transaction> getTransactions() {
      return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).getTransactions();
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
     * Gets the value of the Vehicles field.
     * Vehicles on this policy line.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.BusinessVehicle[] getVehicles() {
      return (entity.BusinessVehicle[])__getInternalInterface().getFieldValue(VEHICLES_PROP.get());
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
    
    /**
     * Policy Line Subtype specific initialization
     */
    public void initialize() {
      ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).initialize();
    }
    
    public void initializeBaseState() {
      ((com.guidewire.pc.domain.policy.lines.impl.PolicyLineInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.lines.impl.PolicyLineInternalMethods")).initializeBaseState();
    }
    
    /**
     * Marks the PolicyLine as generated by APD. False for OOTB lines of business
     * @return true: Is APD Generated Line
     */
    public boolean isAPDLine() {
      return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).isAPDLine();
    }
    
    public boolean isAutoSplit() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).isAutoSplit();
    }
    
    public boolean isBasedOn() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).isBasedOn();
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
     * Returns true if AnswerContainer is locked and false otherwise.
     * @return true if AnswerContainer is locked and false otherwise.
     */
    public boolean isContainerLocked() {
      return ((gw.api.domain.AnswerContainerAdapter)__getDelegateManager().getImplementation("gw.api.domain.AnswerContainerAdapter")).isContainerLocked();
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
    
    /**
     * Indicates if unused location cleanup is enabled for this line of business.
     * If true, the quote process for any transaction on a policy that includes
     * this line of business will detect and remove unused locations.
     * @return true if the policy line has enabled unused location cleanup, false if it has not.
     */
    public boolean isUnusedLocationCleanupEnabled() {
      return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).isUnusedLocationCleanupEnabled();
    }
    
    /**
     * Marks lines that are WorkersComp lines. OOTB this is only the WCLine.
     * @return true: Is a WorkersComp line.
     */
    public boolean isWorkersComp() {
      return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).isWorkersComp();
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
    
    public com.guidewire.pl.system.expression.SymbolSet makeModifiableAvailabilitySymbolSet() {
      return ((com.guidewire.pc.domain.policy.impl.ModifiableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.impl.ModifiableInternalMethods")).makeModifiableAvailabilitySymbolSet();
    }
    
    public void markAsMerged() {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).markAsMerged();
    }
    
    public void mergeForwardFieldValue(gw.lang.reflect.IPropertyInfo property, java.lang.Object newValue) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).mergeForwardFieldValue(property, newValue);
    }
    
    /**
     * Generic callback executed on each line whenever a primary location is created during submission, allowing the line
     * to do any necessary book-keeping or updates to its own datamodel.
     * @param location the PolicyLocation being created
     */
    public void onPrimaryLocationCreation(entity.PolicyLocation location) {
      ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).onPrimaryLocationCreation(location);
    }
    
    /**
     * Generic callback executed on each line whenever the primary named insured is changed, allowing the line
     * to do any necessary book-keeping or updates to its own datamodel.
     * @param newPrimaryNamedInsured the new PolicyPriNamedInsured
     */
    public void onPrimaryNamedInsuredChange(entity.PolicyPriNamedInsured newPrimaryNamedInsured) {
      ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).onPrimaryNamedInsuredChange(newPrimaryNamedInsured);
    }
    
    public entity.KeyableBean overrideBundleAdd(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleAdd(bundle);
    }
    
    public entity.KeyableBean overrideBundleRemove(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleRemove(bundle);
    }
    
    /**
     * Called after applyChangesFromBranch
     * @param sourcePeriod 
     */
    public void postApplyChangesFromBranch(entity.PolicyPeriod sourcePeriod) {
      ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).postApplyChangesFromBranch(sourcePeriod);
    }
    
    /**
     * Called after a branch has been created in a new (logical) period. This will
     * be called for renewals and rewrites.
     */
    public void postCopyBranchIntoNewPolicy() {
      ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).postCopyBranchIntoNewPolicy();
    }
    
    /**
     * Called after a branch has been created in a new (logical) period. This will
     * be called for renewals and rewrites.
     */
    public void postCreateDraftBranchInNewPeriod() {
      ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).postCreateDraftBranchInNewPeriod();
    }
    
    /**
     * Called after the period dates have changed.
     * @param oldEffDate The old effective date of the period
     * @param oldExpDate The old expiration date of the period
     */
    public void postSetPeriodWindow(java.util.Date oldEffDate, java.util.Date oldExpDate) {
      ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).postSetPeriodWindow(oldEffDate, oldExpDate);
    }
    
    /**
     * Executes custom logic after modifiers are updated on the Modifiable.
     */
    public void postUpdateModifiers() {
      ((gw.api.domain.ModifiableAdapter)__getDelegateManager().getImplementation("gw.api.domain.ModifiableAdapter")).postUpdateModifiers();
    }
    
    /**
     */
    public void preLoadCoverages() {
      ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).preLoadCoverages();
    }
    
    /**
     * Generic callback executed on each line whenever a location is about to be deleted, allowing the line to do any
     * necessary book-keeping or updates to its own datamodel.
     * @param location the PolicyLocation that's about to be deleted
     */
    public void preLocationDelete(entity.PolicyLocation location) {
      ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).preLocationDelete(location);
    }
    
    /**
     * Prorate bases from the cancellation dates. This method should only be called from
     * the start of an Audit job.
     */
    public void prorateBasesFromCancellation() {
      ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).prorateBasesFromCancellation();
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
     * Removes the answer, if any, to the specified question.
     * @param question the question to remove the answer for
     */
    public void removeAnswer(gw.api.productmodel.Question question) {
      ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).removeAnswer(question);
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
     * Removes the given element from the AdditionalInsureds array. This is achieved by marking the element for removal.
     */
    public void removeFromAdditionalInsureds(entity.PolicyAddlInsured element) {
      __getInternalInterface().removeArrayElement(ADDITIONALINSUREDS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the AdditionalInsureds array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromAdditionalInsureds(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(ADDITIONALINSUREDS_PROP.get(), elementID);
    }
    
    /**
     * Removes given answer from answers stored on this AnswerContainer.
     * @param answer answer to remove
     */
    public void removeFromAnswers(entity.PCAnswerDelegate answer) {
      ((gw.api.domain.AnswerContainerAdapter)__getDelegateManager().getImplementation("gw.api.domain.AnswerContainerAdapter")).removeFromAnswers(answer);
    }
    
    /**
     * Removes the given element from the BACosts array. This is achieved by marking the element for removal.
     */
    public void removeFromBACosts(entity.BACost element) {
      __getInternalInterface().removeArrayElement(BACOSTS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the BACosts array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromBACosts(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(BACOSTS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the BALineConditions array. This is achieved by marking the element for removal.
     */
    public void removeFromBALineConditions(entity.BusinessAutoCond element) {
      __getInternalInterface().removeArrayElement(BALINECONDITIONS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the BALineConditions array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromBALineConditions(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(BALINECONDITIONS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the BALineCoverages array. This is achieved by marking the element for removal.
     */
    public void removeFromBALineCoverages(entity.BusinessAutoCov element) {
      __getInternalInterface().removeArrayElement(BALINECOVERAGES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the BALineCoverages array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromBALineCoverages(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(BALINECOVERAGES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the BALineExclusions array. This is achieved by marking the element for removal.
     */
    public void removeFromBALineExclusions(entity.BusinessAutoExcl element) {
      __getInternalInterface().removeArrayElement(BALINEEXCLUSIONS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the BALineExclusions array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromBALineExclusions(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(BALINEEXCLUSIONS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the BAModifiers array. This is achieved by marking the element for removal.
     */
    public void removeFromBAModifiers(entity.BAModifier element) {
      __getInternalInterface().removeArrayElement(BAMODIFIERS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the BAModifiers array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromBAModifiers(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(BAMODIFIERS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the CoverageSymbolGroups array. This is achieved by marking the element for removal.
     */
    public void removeFromCoverageSymbolGroups(entity.CoverageSymbolGroup element) {
      __getInternalInterface().removeArrayElement(COVERAGESYMBOLGROUPS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the CoverageSymbolGroups array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromCoverageSymbolGroups(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(COVERAGESYMBOLGROUPS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the DiagnosticRatingWorksheets array. This is achieved by marking the element for removal.
     */
    public void removeFromDiagnosticRatingWorksheets(entity.DiagnosticRatingWorksheet element) {
      __getInternalInterface().removeArrayElement(DIAGNOSTICRATINGWORKSHEETS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the DiagnosticRatingWorksheets array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromDiagnosticRatingWorksheets(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(DIAGNOSTICRATINGWORKSHEETS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Drivers array. This is achieved by marking the element for removal.
     */
    public void removeFromDrivers(entity.CommercialDriver element) {
      __getInternalInterface().removeArrayElement(DRIVERS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Drivers array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromDrivers(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(DRIVERS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Jurisdictions array. This is achieved by marking the element for removal.
     */
    public void removeFromJurisdictions(entity.BAJurisdiction element) {
      __getInternalInterface().removeArrayElement(JURISDICTIONS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Jurisdictions array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromJurisdictions(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(JURISDICTIONS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the LineAnswers array. This is achieved by marking the element for removal.
     */
    public void removeFromLineAnswers(entity.PolicyLineAnswer element) {
      __getInternalInterface().removeArrayElement(LINEANSWERS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the LineAnswers array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromLineAnswers(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(LINEANSWERS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given Modifier from the Modifiable.
     * @param element 
     */
    public void removeFromModifiers(entity.Modifier element) {
      ((gw.api.domain.ModifiableAdapter)__getDelegateManager().getImplementation("gw.api.domain.ModifiableAdapter")).removeFromModifiers(element);
    }
    
    /**
     * Removes the given element from the Vehicles array. This is achieved by marking the element for removal.
     */
    public void removeFromVehicles(entity.BusinessVehicle element) {
      __getInternalInterface().removeArrayElement(VEHICLES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Vehicles array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromVehicles(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(VEHICLES_PROP.get(), elementID);
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the AdditionalInsureds field.
     */
    public void setAdditionalInsureds(entity.PolicyAddlInsured[] value) {
      __getInternalInterface().setFieldValue(ADDITIONALINSUREDS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ArchivePartition field.
     */
    public void setArchivePartition(java.lang.Long value) {
      __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AutoSymbolsManualEditDate field.
     */
    public void setAutoSymbolsManualEditDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(AUTOSYMBOLSMANUALEDITDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BACosts field.
     */
    public void setBACosts(entity.BACost[] value) {
      __getInternalInterface().setFieldValue(BACOSTS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BALineConditions field.
     */
    public void setBALineConditions(entity.BusinessAutoCond[] value) {
      __getInternalInterface().setFieldValue(BALINECONDITIONS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BALineCoverages field.
     */
    public void setBALineCoverages(entity.BusinessAutoCov[] value) {
      __getInternalInterface().setFieldValue(BALINECOVERAGES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BALineExclusions field.
     */
    public void setBALineExclusions(entity.BusinessAutoExcl[] value) {
      __getInternalInterface().setFieldValue(BALINEEXCLUSIONS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BAModifiers field.
     */
    public void setBAModifiers(entity.BAModifier[] value) {
      __getInternalInterface().setFieldValue(BAMODIFIERS_PROP.get(), value);
    }
    
    public void setBasedOnId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).setBasedOnId(id);
    }
    
    /**
     * Sets the value of the BasedOnValue field.
     */
    public void setBasedOnValue(entity.PolicyLine value) {
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
     * Sets the value of the BranchValue field.
     */
    public void setBranchValue(entity.PolicyPeriod value) {
      __getInternalInterface().setFieldValue(BRANCHVALUE_PROP.get(), value);
    }
    
    public void setBranchValueID(gw.pl.persistence.core.Key value) {
      setFieldValue(BRANCHVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BusinessVehicleAutoNumberSeq field.
     */
    public void setBusinessVehicleAutoNumberSeq(entity.AutoNumberSequence value) {
      __getInternalInterface().setFieldValue(BUSINESSVEHICLEAUTONUMBERSEQ_PROP.get(), value);
    }
    
    public void setBusinessVehicleAutoNumberSeqID(gw.pl.persistence.core.Key value) {
      setFieldValue(BUSINESSVEHICLEAUTONUMBERSEQ_PROP.get(), value);
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
     * Sets the value of the CoverageSymbolGroups field.
     */
    public void setCoverageSymbolGroups(entity.CoverageSymbolGroup[] value) {
      __getInternalInterface().setFieldValue(COVERAGESYMBOLGROUPS_PROP.get(), value);
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
     * Sets the value of the CustomAutoSymbolDesc field.
     */
    public void setCustomAutoSymbolDesc(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CUSTOMAUTOSYMBOLDESC_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DiagnosticRatingWorksheets field.
     */
    public void setDiagnosticRatingWorksheets(entity.DiagnosticRatingWorksheet[] value) {
      __getInternalInterface().setFieldValue(DIAGNOSTICRATINGWORKSHEETS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Drivers field.
     */
    public void setDrivers(entity.CommercialDriver[] value) {
      __getInternalInterface().setFieldValue(DRIVERS_PROP.get(), value);
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
    public void setFixed(entity.PolicyLine value) {
      __getInternalInterface().setFieldValue(FIXED_PROP.get(), value);
    }
    
    public void setFixedID(gw.pl.persistence.core.Key value) {
      setFieldValue(FIXED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Fleet field.
     */
    public void setFleet(typekey.FleetType value) {
      __getInternalInterface().setFieldValue(FLEET_PROP.get(), value);
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
     * Sets the value of the Jurisdictions field.
     */
    public void setJurisdictions(entity.BAJurisdiction[] value) {
      __getInternalInterface().setFieldValue(JURISDICTIONS_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the LineAnswers field.
     */
    public void setLineAnswers(entity.PolicyLineAnswer[] value) {
      __getInternalInterface().setFieldValue(LINEANSWERS_PROP.get(), value);
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
     * Sets the value of the NumAddInsured field.
     */
    public void setNumAddInsured(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(NUMADDINSURED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PatternCode field.
     */
    public void setPatternCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PATTERNCODE_PROP.get(), value);
    }
    
    public void setPeriodWindow(com.guidewire.pl.system.util.DateRange oldPeriodRange) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).setPeriodWindow(oldPeriodRange);
    }
    
    /**
     * Sets the value of the PolicyType field.
     */
    public void setPolicyType(typekey.BAPolicyType value) {
      __getInternalInterface().setFieldValue(POLICYTYPE_PROP.get(), value);
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
    
    public void setSliceDate(java.util.Date sliceDate) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).setSliceDate(sliceDate);
    }
    
    public void setSlicesMap(java.util.Map<java.util.Date, entity.EffDatedBase> slices) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).setSlicesMap(slices);
    }
    
    /**
     * Sets the value of the Subtype field.
     */
    public void setSubtype(typekey.PolicyLine value) {
      __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
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
     * Sets the value of the Vehicles field.
     */
    public void setVehicles(entity.BusinessVehicle[] value) {
      __getInternalInterface().setFieldValue(VEHICLES_PROP.get(), value);
    }
    
    /**
     * Returns false for lines not supporting parallelization, true for lines supporting parallelization,
     * or -- depending on the implementation -- conditionally true for lines which support parallelization yet sometimes restrict it.
     * 
     * In the base configuration, the abstract implementation of this method returns false and must be overridden by each
     * line that supports parallelization.
     */
    public boolean shouldParallelizeRating() {
      return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).shouldParallelizeRating();
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
     * This base class implementation updates all the CoveredState. Subclasses may
     * update their own particular computed values.
     * <p/>
     * This method is typically called at "key" points in the lifecycle of a
     * policy, such as just before quoting and just before issuance.
     */
    public void syncComputedValues() {
      ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).syncComputedValues();
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
    
    /**
     * Synchronizes modifiers on this Modifiable instance with the product model, adding and removing them
     * as necessary to match pattern changes and availability conditions.
     * @return a list of ProductModelSyncIssues
     */
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> updateModifiers() {
      return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).updateModifiers();
    }
    
    /**
     * called to sync the territory codes on a location
     * @param location 
     */
    public void updateTerritoryCodes(entity.PolicyLocation location) {
      ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).updateTerritoryCodes(location);
    }
    
    /**
     * Determines if this line supports all OOS slice dates instead of only bound edit effective dates.
     * @return true: Supports all OOS slice dates; true for most lines
     *         false: Only uses bound edit effective dates
     */
    public boolean usesAllOOSSliceDates() {
      return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).usesAllOOSSliceDates();
    }
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pc.domain.coverage.CoverablePublicMethods", "com.guidewire.pc.domain.coverage.impl.CoverableImpl");
    config.put("com.guidewire.pc.domain.coverage.CoverageSymbolGroupOwnerPublicMethods", "com.guidewire.pc.domain.coverage.impl.CoverageSymbolGroupOwnerImpl");
    config.put("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods", "com.guidewire.pc.domain.coverage.impl.CoverableImpl");
    config.put("com.guidewire.pc.domain.coverage.impl.CoverageSymbolGroupOwnerInternalMethods", "com.guidewire.pc.domain.coverage.impl.CoverageSymbolGroupOwnerImpl");
    config.put("com.guidewire.pc.domain.policy.ModifiablePublicMethods", "com.guidewire.pc.domain.policy.impl.ModifiableImpl");
    config.put("com.guidewire.pc.domain.policy.impl.ModifiableInternalMethods", "com.guidewire.pc.domain.policy.impl.ModifiableImpl");
    config.put("com.guidewire.pc.domain.policy.lines.PolicyLinePublicMethods", "com.guidewire.pc.domain.policy.lines.impl.PolicyLineImpl");
    config.put("com.guidewire.pc.domain.policy.lines.impl.PolicyLineInternalMethods", "com.guidewire.pc.domain.policy.lines.impl.PolicyLineImpl");
    config.put("com.guidewire.pc.domain.question.AnswerContainerPublicMethods", "com.guidewire.pc.domain.question.impl.AnswerContainerImpl");
    config.put("com.guidewire.pc.domain.question.impl.AnswerContainerInternalMethods", "com.guidewire.pc.domain.question.impl.AnswerContainerImpl");
    config.put("com.guidewire.pc.domain.rating.RateflowMethods", "gw.api.rating.RateflowMethodsImpl");
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
    config.put("com.guidewire.pl.system.entity.DoesNotValidateOnCommit", "com.guidewire.pc.domain.policy.lines.impl.PolicyLineImpl");
    config.put("gw.api.copier.EffDatedCopyable", "gw.lob.common.PolicyLineCopier");
    config.put("gw.api.domain.AnswerContainerAbstractDomainMethods", "gw.question.PolicyLineAnswerContainerAdapter");
    config.put("gw.api.domain.AnswerContainerAdapter", "gw.question.PolicyLineAnswerContainerAdapter");
    config.put("gw.api.domain.CoverableAbstractDomainMethods", "gw.lob.ba.BALineCoverableModifiableCoverageSymbolGroupAdapter");
    config.put("gw.api.domain.CoverableAdapter", "gw.lob.ba.BALineCoverableModifiableCoverageSymbolGroupAdapter");
    config.put("gw.api.domain.CoverageSymbolGroupAdapter", "gw.lob.ba.BALineCoverableModifiableCoverageSymbolGroupAdapter");
    config.put("gw.api.domain.CoverageSymbolGroupOwnerAbstractDomainMethods", "gw.lob.ba.BALineCoverableModifiableCoverageSymbolGroupAdapter");
    config.put("gw.api.domain.ModifiableAdapter", "gw.lob.ba.BALineCoverableModifiableCoverageSymbolGroupAdapter");
    config.put("gw.api.logicalmatch.EffDatedLogicalMatcher", "gw.lob.common.PolicyLineMatcher");
    config.put("gw.api.logicalmatch.LogicalMatcher", "gw.lob.common.PolicyLineMatcher");
    config.put("gw.api.policy.PolicyLineJavaMethods", "gw.lob.ba.BAPolicyLineMethods");
    config.put("gw.api.policy.PolicyLineMethods", "gw.lob.ba.BAPolicyLineMethods");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.BusinessAutoLine.class, config);
    com.guidewire._generated.entity.BusinessAutoLineInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.BusinessAutoLine, com.guidewire._generated.entity.BusinessAutoLineInternal>() {
      public java.lang.Object getImplementation(entity.BusinessAutoLine bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.BusinessAutoLineInternal getInternalInterface(entity.BusinessAutoLine bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.BusinessAutoLine newEmptyInstance() {
        return new entity.BusinessAutoLine((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}