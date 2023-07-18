package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellAddlInterest.eti;HOPDwellAddlInterest.eix;HOPDwellAddlInterest.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPDwellAddlInterestVersionList extends entity.windowed.AddlInterestDetailVersionList {
  entity.HOPDwellAddlInterest AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPDwellAddlInterest> getAllVersions();
  
  
  
}