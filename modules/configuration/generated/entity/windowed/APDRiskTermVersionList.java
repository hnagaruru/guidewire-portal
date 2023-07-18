package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskTerm.eti;APDRiskTerm.eix;APDRiskTerm.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface APDRiskTermVersionList extends entity.windowed.APDDataFieldVersionList {
  entity.APDRiskTerm AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.APDRiskTerm> getAllVersions();
  
  
  
}