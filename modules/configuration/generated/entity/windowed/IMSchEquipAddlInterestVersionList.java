package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMSchEquipAddlInterest.eti;IMSchEquipAddlInterest.eix;IMSchEquipAddlInterest.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface IMSchEquipAddlInterestVersionList extends entity.windowed.AddlInterestDetailVersionList {
  entity.IMSchEquipAddlInterest AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.IMSchEquipAddlInterest> getAllVersions();
  
  
  
}