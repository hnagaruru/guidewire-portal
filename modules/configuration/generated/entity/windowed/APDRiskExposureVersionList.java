package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskExposure.eti;APDRiskExposure.eix;APDRiskExposure.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface APDRiskExposureVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.APDRiskExposure AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.APDRiskExposureField> FieldsAsOf(java.util.Date date);
  
  
  void addToFields(entity.APDRiskExposureField bean);
  
  
  java.util.List<? extends entity.APDRiskExposure> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.APDRiskExposureFieldVersionList> getFields();
  
  
  
}