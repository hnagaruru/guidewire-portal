package entity;

/**
 * PolicyCondition
 * A condition defines something about the insurance contract that is neither providing coverage nor excluding coverage.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyCondition.eti;PolicyCondition.eix;PolicyCondition.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface PolicyCondition extends entity.Clause, gw.api.domain.Clause {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.PolicyCondition> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.PolicyCondition>("entity.PolicyCondition");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CURRENCY_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("Currency", "Currency");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PATTERNCODE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("PatternCode", "PatternCode");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> REFERENCEDATEINTERNAL_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("ReferenceDateInternal", "ReferenceDateInternal");
  
  /**
   * Creates a new condition which is a copy of the current condition
   * @return The new copy of this condition
   */
  public entity.PolicyCondition copyCondition();
  
  
  /**
   * Gets the value of the Currency field.
   * Currency associated with the policy condition
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getCurrency();
  
  
  /**
   * Gets the value of the PatternCode field.
   * The pattern defining what kind of Condition this is
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPatternCode();
  
  
  /**
   * Gets the value of the ReferenceDateInternal field.
   * Internal field for storing the reference date of coverages on bound policy periods. Normally the ReferenceDate property should be used instead.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getReferenceDateInternal();
  
  
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