package entity;

/**
 * InboundRiskAssessmentErrorTempStore
 * Delegate for entities to hold risk assessment error.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "InboundRiskAssessmentErrorTempStore.eti;InboundRiskAssessmentErrorTempStore.eix;InboundRiskAssessmentErrorTempStore.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface InboundRiskAssessmentErrorTempStore extends entity.Extractable {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.InboundRiskAssessmentErrorTempStore> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.InboundRiskAssessmentErrorTempStore>("entity.InboundRiskAssessmentErrorTempStore");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> RISKASSESSMENTERROR_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("RiskAssessmentError", "RiskAssessmentError");
  
  /**
   * Gets the value of the RiskAssessmentError field.
   * error associated with risk assessment of OutboundLocationRiskAssessmentTempStore
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RiskAssessmentError getRiskAssessmentError();
  
  
  /**
   * Sets the value of the RiskAssessmentError field.
   */
  public void setRiskAssessmentError(typekey.RiskAssessmentError value);
  
  
  
}