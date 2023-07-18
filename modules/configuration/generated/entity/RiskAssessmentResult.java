package entity;

/**
 * RiskAssessmentResult
 * Risk Assessable holds Risk Assessment Fields.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RiskAssessmentResult.eti;RiskAssessmentResult.eix;RiskAssessmentResult.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface RiskAssessmentResult extends gw.pl.persistence.core.Bean, com.guidewire.pc.domain.riskassessment.RiskAssessmentResultPublicMethods {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.RiskAssessmentResult> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.RiskAssessmentResult>("entity.RiskAssessmentResult");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ASSESSMENTDATE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("AssessmentDate", "AssessmentDate");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FLOODRISK_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("FloodRisk", "FloodRisk");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FLOODSCORE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("FloodScore", "FloodScore");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RISKPROFILECODE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("RiskProfileCode", "RiskProfileCode");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SNAPSHOTREPORTURL_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("SnapshotReportURL", "SnapshotReportURL");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SPATIALPOINT_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("SpatialPoint", "SpatialPoint");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UNPARSEDRISKASSESSMENTRESPONSE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("UnparsedRiskAssessmentResponse", "UnparsedRiskAssessmentResponse");
  
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