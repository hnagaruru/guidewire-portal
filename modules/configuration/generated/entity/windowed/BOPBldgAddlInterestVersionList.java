package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPBldgAddlInterest.eti;BOPBldgAddlInterest.eix;BOPBldgAddlInterest.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BOPBldgAddlInterestVersionList extends entity.windowed.AddlInterestDetailVersionList {
  entity.BOPBldgAddlInterest AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BOPBldgAddlInterest> getAllVersions();
  
  
  
}