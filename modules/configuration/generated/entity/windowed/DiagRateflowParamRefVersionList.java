package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "DiagRateflowParamRef.eti;DiagRateflowParamRef.eix;DiagRateflowParamRef.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface DiagRateflowParamRefVersionList extends entity.windowed.DiagRatingWorksheetRefVersionList {
  entity.DiagRateflowParamRef AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.DiagRateflowParamRef> getAllVersions();
  
  
  
}