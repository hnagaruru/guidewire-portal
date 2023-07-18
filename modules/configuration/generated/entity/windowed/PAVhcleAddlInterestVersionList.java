package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PAVhcleAddlInterest.eti;PAVhcleAddlInterest.eix;PAVhcleAddlInterest.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PAVhcleAddlInterestVersionList extends entity.windowed.AddlInterestDetailVersionList {
  entity.PAVhcleAddlInterest AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PAVhcleAddlInterest> getAllVersions();
  
  
  
}