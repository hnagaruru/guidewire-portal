package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAVhcleAddlInterest.eti;BAVhcleAddlInterest.eix;BAVhcleAddlInterest.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BAVhcleAddlInterestVersionList extends entity.windowed.AddlInterestDetailVersionList {
  entity.BAVhcleAddlInterest AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BAVhcleAddlInterest> getAllVersions();
  
  
  
}