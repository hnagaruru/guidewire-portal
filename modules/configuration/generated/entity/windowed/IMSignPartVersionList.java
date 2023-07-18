package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMSignPart.eti;IMSignPart.eix;IMSignPart.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface IMSignPartVersionList extends entity.windowed.IMCoveragePartVersionList {
  entity.IMSignPart AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.IMSignPartCost> IMSignPartCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.IMSign> IMSignsAsOf(java.util.Date date);
  
  
  void addToIMSignPartCosts(entity.IMSignPartCost bean);
  
  
  void addToIMSigns(entity.IMSign bean);
  
  
  java.util.List<? extends entity.IMSignPart> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.IMSignPartCostVersionList> getIMSignPartCosts();
  
  
  java.util.List<? extends entity.windowed.IMSignVersionList> getIMSigns();
  
  
  
}