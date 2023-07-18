package entity;

/**
 * RateFactor
 * 
 *     A rate factor is a risk characteristic and its associated numeric value which might have an impact on premium.
 *     As used here rate factors are applied to base premium rather than rates. A common example of rate factors are the
 *     components of IRPM (individual risk premium modifier).
 *   
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RateFactor.eti;RateFactor.eix;RateFactor.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface RateFactor extends entity.EffDated {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.RateFactor> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.RateFactor>("entity.RateFactor");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ASSESSMENT_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("Assessment", "Assessment");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> JUSTIFICATION_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("Justification", "Justification");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PATTERNCODE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("PatternCode", "PatternCode");
  
  /**
   * Gets the value of the Assessment field.
   * Credit or debit multiplier for this rate factor. Use the setAssessmentWithinLimits method to set this value within its minimum and maximum.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getAssessment();
  
  
  /**
   * 
   * @return the value of the Assessment property.
   */
  public java.math.BigDecimal getAssessmentWithinLimits();
  
  
  /**
   * Gets the value of the Justification field.
   * Additional comment to justify this rate factor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getJustification();
  
  
  /**
   * 
   * @return the maximum value allowed for this rate factor. If a max value is defined for the state of this rate factor,
   * that value is returned. Otherwise the default max value is returned.
   */
  public java.math.BigDecimal getMaximum();
  
  
  /**
   * 
   * @return the minimum value allowed for this rate factor. If a min value is defined for the state of this rate factor,
   * that value is returned. Otherwise the default min value is returned.
   */
  public java.math.BigDecimal getMinimum();
  
  
  public entity.Modifier getModifier();
  
  
  /**
   * 
   * @return The {@link gw.api.productmodel.RateFactorPatternBase} on which this RateFactor is based.
   */
  public gw.api.productmodel.RateFactorPatternBase getPattern();
  
  
  /**
   * Gets the value of the PatternCode field.
   * The pattern used to create this RateFactor that defines its type.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPatternCode();
  
  
  /**
   * 
   * @return the rate factor type stored on this RateFactor's pattern.
   */
  public typekey.RateFactorType getRateFactorType();
  
  
  /**
   * Sets the value of the Assessment field.
   */
  public void setAssessment(java.math.BigDecimal value);
  
  
  /**
   * Sets the given credit or debit multiplier to this rate factor, restricting the value as necessary within the
   * minimum/maximum limits established in the product model. If the value is below the minimum limit, the value is
   * set with the minimum; likewise, if the value is above the maximum limit, the value is set with the
   * the maximum.
   * @param value - the value to be assigned
   */
  public void setAssessmentWithinLimits(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the Justification field.
   */
  public void setJustification(java.lang.String value);
  
  
  /**
   * Sets the {@link gw.api.productmodel.RateFactorPatternBase} on which this RateFactor is based.
   * This method should normally only be called by internal code and never by customer code.
   * @param pattern The {@link gw.api.productmodel.RateFactorPatternBase} on which this RateFactor
   * is based.
   */
  public void setPattern(gw.api.productmodel.RateFactorPatternBase pattern);
  
  
  
}