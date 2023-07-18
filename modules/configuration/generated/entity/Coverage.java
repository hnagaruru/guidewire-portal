package entity;

/**
 * Coverage
 * 
 *     A coverage is specific cause of loss or insurable object within a single PolicyLine. This table contains coverage (boolean) and coverage attribute information spanning policyline. Policyline is differentiated by approximately 5 dozen sub-type entities.
 *   
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Coverage.eti;Coverage.eix;Coverage.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface Coverage extends entity.Clause, gw.api.domain.Clause {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.Coverage> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.Coverage>("entity.Coverage");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CURRENCY_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("Currency", "Currency");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PATTERNCODE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("PatternCode", "PatternCode");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> REFERENCEDATEINTERNAL_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("ReferenceDateInternal", "ReferenceDateInternal");
  
  /**
   * Creates a new coverage which is a copy of the current coverage
   * @return The new copy of this coverage
   */
  public entity.Coverage copyCoverage();
  
  
  /**
   * Fires an initialize event on the coverage.
   */
  public void fireInitializeEvent();
  
  
  /**
   * Fires a removal event on the coverage.
   */
  public void fireRemovalEvent();
  
  
  /**
   * Gets the value of the Currency field.
   * Currency associated with the coverage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getCurrency();
  
  
  /**
   * Gets the value of the PatternCode field.
   * The pattern defining what kind of Coverage this is
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPatternCode();
  
  
  /**
   * Gets the value of the ReferenceDateInternal field.
   * Internal field for storing the reference date of coverages on bound policy periods. Normally the ReferenceDate property should be used instead.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getReferenceDateInternal();
  
  
  public gw.api.reinsurance.ReinsurableCoverable getReinsurableCoverable();
  
  
  /**
   * Convenience wrapper around isFieldChangedFromBasedOn that takes a CovTermPattern.
   * @param pattern the pattern of the cov term to check
   * @return true if either the cov term value has changed or if the cov term availability has changed.
   */
  public boolean isCovTermChangedFromBasedOn(gw.api.productmodel.CovTermPattern pattern);
  
  
  /**
   * Sets the value of the Currency field.
   */
  public void setCurrency(typekey.Currency value);
  
  
  
}