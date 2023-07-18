package entity;

/**
 * Coverable
 * 
 *     Delegate that can be implemented by any entity that coverages can attach to.
 *   
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Coverable.eti;Coverable.eix;Coverable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface Coverable extends entity.EffDated {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.Coverable> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.Coverable>("entity.Coverable");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INITIALCONDITIONSCREATED_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("InitialConditionsCreated", "InitialConditionsCreated");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INITIALCOVERAGESCREATED_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("InitialCoveragesCreated", "InitialCoveragesCreated");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INITIALEXCLUSIONSCREATED_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("InitialExclusionsCreated", "InitialExclusionsCreated");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PREFERREDCOVERAGECURRENCY_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("PreferredCoverageCurrency", "PreferredCoverageCurrency");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> REFERENCEDATEINTERNAL_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("ReferenceDateInternal", "ReferenceDateInternal");
  
  /**
   * Finds all issues involving conditions on this coverable. None of the actions involved will
   * be taken at this point; this will just return information about any potential problems.
   * @return the list of ProductModelSyncIssues found
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkConditionsAgainstProductModel();
  
  
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkConditionsAgainstProductModel(gw.api.productmodel.ConditionPattern[] patternsToCheck);
  
  
  /**
   * Finds all issues involving conditions contained on this coverable.  None of the actions
   * involved will be taken at this point; this will just return information about any
   * potential problems.
   * @param policyLine the PolicyLine for this Coverable
   * @return a list of ProductModelSyncIssues
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkConditionsAgainstProductModelwLine(entity.PolicyLine policyLine);
  
  
  /**
   * Finds all issues involving coverages contained on this coverable. None of the actions
   * involved will be taken at this point; this will just return information about any
   * potential problems.
   * @return the list of ProductModelSyncIssues found
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkCoveragesAgainstProductModel();
  
  
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkCoveragesAgainstProductModel(gw.api.productmodel.CoveragePattern[] patternsToCheck);
  
  
  /**
   * Finds all issues involving coverages contained on this coverable.  None of the actions
   * involved will be taken at this point; this will just return information about any
   * potential problems.
   * @param policyLine the PolicyLine for this Coverable
   * @return a list of ProductModelSyncIssues
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkCoveragesAgainstProductModelwLine(entity.PolicyLine policyLine);
  
  
  /**
   * Finds all issues involving coverages, conditions, and exclusions on this coverable. None of the actions
   * involved will be taken at this point; this will just return information about any potential problems.
   * @return the list of ProductModelSyncIssues found
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkCoveragesConditionsAndExclusionsAgainstProductModel();
  
  
  /**
   * Finds all issues involving exclusions on this coverable. None of the actions involved will
   * be taken at this point; this will just return information about any potential problems.
   * @return the list of ProductModelSyncIssues found
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkExclusionsAgainstProductModel();
  
  
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkExclusionsAgainstProductModel(gw.api.productmodel.ExclusionPattern[] patternsToCheck);
  
  
  /**
   * Finds all issues involving exclusions contained on this coverable.  None of the actions
   * involved will be taken at this point; this will just return information about any
   * potential problems.
   * @param policyLine the PolicyLine for this Coverable
   * @return a list of ProductModelSyncIssues
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkExclusionsAgainstProductModelwLine(entity.PolicyLine policyLine);
  
  
  /**
   * Sets this Coverable's internal reference date field to null so {@link #getCoverableReferenceDate()}
   * will compute the reference date based on the current policy data, rather than returning the
   * persisted field's value. This is meant to be called only upon creating a new policy term (e.g.,
   * in a renewal job), when the reference dates must be recalculated.
   */
  public void clearCoverableReferenceDateInternal();
  
  
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
  public entity.PolicyCondition createCondition(gw.api.productmodel.ConditionPattern pattern);
  
  
  /**
   * Creates conditions on this object.  Asserts there are no existing
   * conditions on this object.  Use this method when first creating a coverable to
   * create conditions.
   * <p/>
   * Conditions created are available and of existence type Required or Suggested.
   * @throws IllegalStateException if this coverable already has conditions
   */
  public void createConditions();
  
  
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
  public entity.Coverage createCoverage(gw.api.productmodel.CoveragePattern pattern);
  
  
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
  public entity.Clause createCoverageConditionOrExclusion(gw.api.productmodel.ClausePattern pattern);
  
  
  /**
   * Creates coverages on this object.  Asserts there are no existing
   * coverages on this object.  Use this method when first creating a coverable to
   * create coverages.
   * <p/>
   * Coverages created are available and of existence type Required or Suggested.
   * @throws IllegalStateException if this coverable already has coverages
   */
  public void createCoverages();
  
  
  /**
   * Creates coverages, conditions, and exclusions on this object.  Asserts there are no existing
   * coverages, conditions, and exclusions on this object.  Use this method when first creating a coverable to
   * create coverages, conditions, and exclusions.
   * <p/>
   * Coverages, conditions, and exclusions created are available and of existence type Required or Suggested.
   * @throws IllegalStateException if this coverable already has coverages, conditions, or exclusions
   */
  public void createCoveragesConditionsAndExclusions();
  
  
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
  public entity.Exclusion createExclusion(gw.api.productmodel.ExclusionPattern pattern);
  
  
  /**
   * Creates exclusions on this object.  Asserts there are no existing
   * exclusions on this object.  Use this method when first creating a coverable to
   * create exclusions.
   * <p/>
   * Exclusions created are available and of existence type Required or Suggested.
   * @throws IllegalStateException if this coverable already has exclusions
   */
  public void createExclusions();
  
  
  /**
   * Stores the current value of {@link #getCoverableReferenceDate()} in this Coverable's internal
   * reference date field if that field is currently null, and does nothing otherwise. This should
   * be called only upon binding a policy period.
   */
  public void denormalizeCoverableReferenceDate();
  
  
  public typekey.CoveragePartType[] getAssociatedCoveragePartTypes();
  
  
  /**
   * Returns the condition on the coverable object that has
   * the passed in pattern.
   * @param pattern - the coverage type to get
   * @return the condition on the coverable
   */
  public entity.PolicyCondition getCondition(gw.api.productmodel.ConditionPattern pattern);
  
  
  public entity.PolicyCondition[] getConditionsFromCoverable();
  
  
  /**
   * 
   * @return the reference date of this Coverable object. This will be the internally persisted
   * reference date if that is not null. Otherwise it will be calculated based on the Coverable's policy line and
   * state.
   */
  public java.util.Date getCoverableReferenceDate();
  
  
  /**
   * 
   * @return the state of this particular Coverable object.
   */
  public typekey.Jurisdiction getCoverableState();
  
  
  /**
   * Returns the coverage on the coverable object that has
   * the passed in pattern.
   * @param pattern - the coverage type to get
   * @return the coverage on the coverable
   */
  public entity.Coverage getCoverage(gw.api.productmodel.CoveragePattern pattern);
  
  
  /**
   * Returns the coverage, condition, or exclusion on the coverable object that has
   * the passed in pattern.
   * @param pattern - the type of coverage, condition, or exclusion to get
   * @return the clause on the coverable
   */
  public entity.Clause getCoverageConditionOrExclusion(gw.api.productmodel.ClausePattern pattern);
  
  
  /**
   * 
   * @return all the coverages, conditions, and exclusions on this coverable object.
   */
  public entity.Clause[] getCoveragesConditionsAndExclusionsFromCoverable();
  
  
  public entity.Coverage[] getCoveragesFromCoverable();
  
  
  /**
   * Returns the exclusion on the coverable object that has
   * the passed in pattern.
   * @param pattern - the coverage type to get
   * @return the exclusion on the coverable
   */
  public entity.Exclusion getExclusion(gw.api.productmodel.ExclusionPattern pattern);
  
  
  public entity.Exclusion[] getExclusionsFromCoverable();
  
  
  public entity.PolicyLine getPolicyLine();
  
  
  public entity.PolicyLocation[] getPolicyLocations();
  
  
  /**
   * Gets the Preferred Coverage Currency for coverages associated with this coverable and initializes the value if null.
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getPreferredCoverageCurrency();
  
  
  /**
   * Gets the value of the ReferenceDateInternal field.
   * Internal field for storing the reference date of this entity on bound policy periods.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getReferenceDateInternal();
  
  
  /**
   * 
   * @param conditionPattern the pattern of the condition to check on this coverable
   * @return true if condition of the given <code>conditionPattern</code>
   * exists on this Coverable; false otherwise.
   */
  public boolean hasCondition(gw.api.productmodel.ConditionPattern conditionPattern);
  
  
  /**
   * 
   * @param coveragePattern the pattern of the coverage to check
   * @return true if coverage of the given <code>coveragePattern</code>
   * exists on this Coverable; false otherwise.
   */
  public boolean hasCoverage(gw.api.productmodel.CoveragePattern coveragePattern);
  
  
  /**
   * 
   * @param pattern the pattern of the clause to check on this coverable
   * @return true if coverage, condition, or exclusion of the given <code>pattern</code>
   * exists on this Coverable; false otherwise.
   */
  public boolean hasCoverageConditionOrExclusion(gw.api.productmodel.ClausePattern pattern);
  
  
  /**
   * 
   * @param exclusionPattern the pattern of the exclusion to check on this coverable
   * @return true if exclusion of the given <code>exclusionPattern</code>
   * exists on this Coverable; false otherwise.
   */
  public boolean hasExclusion(gw.api.productmodel.ExclusionPattern exclusionPattern);
  
  
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
  public java.lang.Boolean isConditionAvailable(gw.api.productmodel.ConditionPattern conditionPattern);
  
  
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
  public java.lang.Boolean isCovTermAvailable(gw.api.productmodel.CovTermPattern pattern);
  
  
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
  public java.lang.Boolean isCoverageAvailable(gw.api.productmodel.CoveragePattern pattern);
  
  
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
  public java.lang.Boolean isCoverageConditionOrExclusionAvailable(gw.api.productmodel.ClausePattern pattern);
  
  
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
  public java.lang.Boolean isExclusionAvailable(gw.api.productmodel.ExclusionPattern exclusionPattern);
  
  
  /**
   * Gets the value of the InitialConditionsCreated field.
   * Whether or not the initial set of conditions has been created on this Coverable.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isInitialConditionsCreated();
  
  
  /**
   * Gets the value of the InitialCoveragesCreated field.
   * Whether or not the initial set of coverages has been created on this Coverable.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isInitialCoveragesCreated();
  
  
  /**
   * Gets the value of the InitialExclusionsCreated field.
   * Whether or not the initial set of exclusions has been created on this Coverable.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isInitialExclusionsCreated();
  
  
  /**
   * Removes the given <code>condition</code> from this Coverable
   * @param policyCondition the condition to remove
   */
  public void removeConditionFromCoverable(entity.PolicyCondition policyCondition);
  
  
  /**
   * Removes the given coverage, condition, or exclusion from this Coverable
   * @param coverageConditionOrExclusion the clause to remove
   */
  public void removeCoverageConditionOrExclusionFromCoverable(entity.Clause coverageConditionOrExclusion);
  
  
  /**
   * Removes the given <code>coverage</code> from this Coverable
   * @param coverage the coverage to remove
   */
  public void removeCoverageFromCoverable(entity.Coverage coverage);
  
  
  /**
   * Removes the given <code>exclusion</code> from this Coverable
   * @param exclusion the exclusion to remove
   */
  public void removeExclusionFromCoverable(entity.Exclusion exclusion);
  
  
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
  public void setConditionExists(gw.api.productmodel.ConditionPattern pattern, java.lang.Boolean exist);
  
  
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
  public void setCoverageConditionOrExclusionExists(gw.api.productmodel.ClausePattern pattern, java.lang.Boolean exist);
  
  
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
  public void setCoverageExists(gw.api.productmodel.CoveragePattern pattern, java.lang.Boolean exist);
  
  
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
  public void setExclusionExists(gw.api.productmodel.ExclusionPattern pattern, java.lang.Boolean exist);
  
  
  /**
   * Sets the value of the InitialConditionsCreated field.
   */
  public void setInitialConditionsCreated(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the InitialCoveragesCreated field.
   */
  public void setInitialCoveragesCreated(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the InitialExclusionsCreated field.
   */
  public void setInitialExclusionsCreated(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the PreferredCoverageCurrency field.
   */
  public void setPreferredCoverageCurrency(typekey.Currency value);
  
  
  /**
   * Sets the value of the ReferenceDateInternal field.
   */
  public void setReferenceDateInternal(java.util.Date value);
  
  
  
}