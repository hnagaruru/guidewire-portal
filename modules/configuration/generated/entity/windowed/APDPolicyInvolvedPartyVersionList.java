package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDPolicyInvolvedParty.eti;APDPolicyInvolvedParty.eix;APDPolicyInvolvedParty.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface APDPolicyInvolvedPartyVersionList extends entity.windowed.PolicyContactRoleVersionList {
  entity.APDPolicyInvolvedParty AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.APDPolicyInvolvedParty> getAllVersions();
  
  
  
}