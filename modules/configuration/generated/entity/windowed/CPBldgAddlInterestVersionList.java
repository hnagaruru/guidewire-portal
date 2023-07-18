package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPBldgAddlInterest.eti;CPBldgAddlInterest.eix;CPBldgAddlInterest.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface CPBldgAddlInterestVersionList extends entity.windowed.AddlInterestDetailVersionList {
  entity.CPBldgAddlInterest AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CPBldgAddlInterest> getAllVersions();
  
  
  
}