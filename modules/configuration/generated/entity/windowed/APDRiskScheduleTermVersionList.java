package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskScheduleTerm.eti;APDRiskScheduleTerm.eix;APDRiskScheduleTerm.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface APDRiskScheduleTermVersionList extends entity.windowed.APDRiskTermVersionList {
  entity.APDRiskScheduleTerm AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.APDRiskScheduleTerm> getAllVersions();
  
  
  
}