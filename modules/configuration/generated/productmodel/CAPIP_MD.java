package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_MD.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class CAPIP_MD extends entity.BAStateCov {
  protected CAPIP_MD()  {
    super((java.lang.Void)null);
  }
  
  public CAPIP_MD(entity.PolicyPeriod branch)  {
    super(branch, "CAPIP_MD");
  }
  
  public CAPIP_MD(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "CAPIP_MD");
  }
  
  public boolean getHasPIPMD_GUESTTerm() {
    return hasCovTerm("PIPMD_GUEST");
  }
  
  public boolean getHasPIPMD_PIPTerm() {
    return hasCovTerm("PIPMD_PIP");
  }
  
  public boolean getHasPIPMD_WAIVERTerm() {
    return hasCovTerm("PIPMD_WAIVER");
  }
  
  public productmodel.GenericPIPMD_GUESTType getPIPMD_GUESTTerm() {
    return (productmodel.GenericPIPMD_GUESTType)getCovTerm("PIPMD_GUEST");
  }
  
  public productmodel.OptionPIPMD_PIPType getPIPMD_PIPTerm() {
    return (productmodel.OptionPIPMD_PIPType)getCovTerm("PIPMD_PIP");
  }
  
  public productmodel.GenericPIPMD_WAIVERType getPIPMD_WAIVERTerm() {
    return (productmodel.GenericPIPMD_WAIVERType)getCovTerm("PIPMD_WAIVER");
  }
  
  static {
    com.guidewire._generated.productmodel.CAPIP_MDInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.CAPIP_MD>() {
      public productmodel.CAPIP_MD newEmptyInstance() {
        return new productmodel.CAPIP_MD();
      }
      
      
    });
  }
}