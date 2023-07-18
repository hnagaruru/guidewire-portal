package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_KS.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class CAPIP_KS extends entity.BAStateCov {
  protected CAPIP_KS()  {
    super((java.lang.Void)null);
  }
  
  public CAPIP_KS(entity.PolicyPeriod branch)  {
    super(branch, "CAPIP_KS");
  }
  
  public CAPIP_KS(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "CAPIP_KS");
  }
  
  public boolean getHasPIPKS_FUNERALTerm() {
    return hasCovTerm("PIPKS_FUNERAL");
  }
  
  public boolean getHasPIPKS_MEDTerm() {
    return hasCovTerm("PIPKS_MED");
  }
  
  public boolean getHasPIPKS_REHABTerm() {
    return hasCovTerm("PIPKS_REHAB");
  }
  
  public boolean getHasPIPKS_SERVICESTerm() {
    return hasCovTerm("PIPKS_SERVICES");
  }
  
  public boolean getHasPIPKS_SURVIVORTerm() {
    return hasCovTerm("PIPKS_SURVIVOR");
  }
  
  public boolean getHasPIPKS_WORKTerm() {
    return hasCovTerm("PIPKS_WORK");
  }
  
  public productmodel.OptionPIPKS_FUNERALType getPIPKS_FUNERALTerm() {
    return (productmodel.OptionPIPKS_FUNERALType)getCovTerm("PIPKS_FUNERAL");
  }
  
  public productmodel.OptionPIPKS_MEDType getPIPKS_MEDTerm() {
    return (productmodel.OptionPIPKS_MEDType)getCovTerm("PIPKS_MED");
  }
  
  public productmodel.OptionPIPKS_REHABType getPIPKS_REHABTerm() {
    return (productmodel.OptionPIPKS_REHABType)getCovTerm("PIPKS_REHAB");
  }
  
  public productmodel.OptionPIPKS_SERVICESType getPIPKS_SERVICESTerm() {
    return (productmodel.OptionPIPKS_SERVICESType)getCovTerm("PIPKS_SERVICES");
  }
  
  public productmodel.PackagePIPKS_SURVIVORType getPIPKS_SURVIVORTerm() {
    return (productmodel.PackagePIPKS_SURVIVORType)getCovTerm("PIPKS_SURVIVOR");
  }
  
  public productmodel.PackagePIPKS_WORKType getPIPKS_WORKTerm() {
    return (productmodel.PackagePIPKS_WORKType)getCovTerm("PIPKS_WORK");
  }
  
  static {
    com.guidewire._generated.productmodel.CAPIP_KSInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.CAPIP_KS>() {
      public productmodel.CAPIP_KS newEmptyInstance() {
        return new productmodel.CAPIP_KS();
      }
      
      
    });
  }
}