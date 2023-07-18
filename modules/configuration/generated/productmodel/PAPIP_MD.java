package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_MD.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PAPIP_MD extends entity.PersonalAutoCov {
  protected PAPIP_MD()  {
    super((java.lang.Void)null);
  }
  
  public PAPIP_MD(entity.PolicyPeriod branch)  {
    super(branch, "PAPIP_MD");
  }
  
  public PAPIP_MD(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PAPIP_MD");
  }
  
  public boolean getHasPAPIPMD_GUESTTerm() {
    return hasCovTerm("PAPIPMD_GUEST");
  }
  
  public boolean getHasPAPIPMD_LIMITTerm() {
    return hasCovTerm("PAPIPMD_LIMIT");
  }
  
  public boolean getHasPAPIPMD_WAIVERTerm() {
    return hasCovTerm("PAPIPMD_WAIVER");
  }
  
  public productmodel.GenericPAPIPMD_GUESTType getPAPIPMD_GUESTTerm() {
    return (productmodel.GenericPAPIPMD_GUESTType)getCovTerm("PAPIPMD_GUEST");
  }
  
  public productmodel.OptionPAPIPMD_LIMITType getPAPIPMD_LIMITTerm() {
    return (productmodel.OptionPAPIPMD_LIMITType)getCovTerm("PAPIPMD_LIMIT");
  }
  
  public productmodel.GenericPAPIPMD_WAIVERType getPAPIPMD_WAIVERTerm() {
    return (productmodel.GenericPAPIPMD_WAIVERType)getCovTerm("PAPIPMD_WAIVER");
  }
  
  static {
    com.guidewire._generated.productmodel.PAPIP_MDInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PAPIP_MD>() {
      public productmodel.PAPIP_MD newEmptyInstance() {
        return new productmodel.PAPIP_MD();
      }
      
      
    });
  }
}