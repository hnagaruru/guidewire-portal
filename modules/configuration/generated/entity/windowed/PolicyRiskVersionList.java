package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyRisk.eti;PolicyRisk.eix;PolicyRisk.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PolicyRiskVersionList extends entity.windowed.ReinsurableVersionList {
  entity.PolicyRisk AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PolicyRisk> getAllVersions();
  
  
  
}