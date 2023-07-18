package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskExposureField.eti;APDRiskExposureField.eix;APDRiskExposureField.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface APDRiskExposureFieldVersionList extends entity.windowed.APDDataFieldVersionList {
  entity.APDRiskExposureField AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.APDRiskExposureField> getAllVersions();
  
  
  
}