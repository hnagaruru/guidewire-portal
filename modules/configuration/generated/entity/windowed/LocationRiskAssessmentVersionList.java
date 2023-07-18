package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "LocationRiskAssessment.eti;LocationRiskAssessment.eix;LocationRiskAssessment.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface LocationRiskAssessmentVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.LocationRiskAssessment AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.LocationRiskAssessment> getAllVersions();
  
  
  
}