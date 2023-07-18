package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RiskAssessmentResult.eti;RiskAssessmentResult.eix;RiskAssessmentResult.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RiskAssessmentResultInternal extends com.guidewire.pl.domain.persistence.core.impl.BeanInternal, com.guidewire.pc.domain.riskassessment.RiskAssessmentResultPublicMethods {
  /**
   * Gets the value of the AssessmentDate field.
   * The datetime of when assessment is handed back to Policy Center
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getAssessmentDate();
  
  
  /**
   * Gets the value of the FloodRisk field.
   * Flood Risk: Unknown, Low, Medium, High
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFloodRisk();
  
  
  /**
   * Gets the value of the FloodScore field.
   * Flood Score of Policy Location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFloodScore();
  
  
  /**
   * Gets the value of the RiskProfileCode field.
   * Risk Profile Code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRiskProfileCode();
  
  
  /**
   * Gets the value of the SnapshotReportURL field.
   * Reference to report of how risk assessment took place
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSnapshotReportURL();
  
  
  /**
   * Gets the value of the SpatialPoint field.
   * Latitude and longitude of this location, represented as an instance of SpatialPoint.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.api.database.spatial.SpatialPoint getSpatialPoint();
  
  
  /**
   * Gets the value of the UnparsedRiskAssessmentResponse field.
   * Unparsed risk assessment information
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getUnparsedRiskAssessmentResponse();
  
  
  /**
   * Sets the value of the AssessmentDate field.
   */
  public void setAssessmentDate(java.util.Date value);
  
  
  /**
   * Sets the value of the FloodRisk field.
   */
  public void setFloodRisk(java.lang.String value);
  
  
  /**
   * Sets the value of the FloodScore field.
   */
  public void setFloodScore(java.lang.String value);
  
  
  /**
   * Sets the value of the RiskProfileCode field.
   */
  public void setRiskProfileCode(java.lang.String value);
  
  
  /**
   * Sets the value of the SnapshotReportURL field.
   */
  public void setSnapshotReportURL(java.lang.String value);
  
  
  /**
   * Sets the value of the SpatialPoint field.
   */
  public void setSpatialPoint(gw.api.database.spatial.SpatialPoint value);
  
  
  /**
   * Sets the value of the UnparsedRiskAssessmentResponse field.
   */
  public void setUnparsedRiskAssessmentResponse(java.lang.String value);
  
  
  
}