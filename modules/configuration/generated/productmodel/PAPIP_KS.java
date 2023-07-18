package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_KS.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PAPIP_KS extends entity.PersonalAutoCov {
  protected PAPIP_KS()  {
    super((java.lang.Void)null);
  }
  
  public PAPIP_KS(entity.PolicyPeriod branch)  {
    super(branch, "PAPIP_KS");
  }
  
  public PAPIP_KS(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PAPIP_KS");
  }
  
  public boolean getHasPAPIPKS_FUNERALTerm() {
    return hasCovTerm("PAPIPKS_FUNERAL");
  }
  
  public boolean getHasPAPIPKS_MEDTerm() {
    return hasCovTerm("PAPIPKS_MED");
  }
  
  public boolean getHasPAPIPKS_REHABTerm() {
    return hasCovTerm("PAPIPKS_REHAB");
  }
  
  public boolean getHasPAPIPKS_SERVICESTerm() {
    return hasCovTerm("PAPIPKS_SERVICES");
  }
  
  public boolean getHasPAPIPKS_SURVIVORTerm() {
    return hasCovTerm("PAPIPKS_SURVIVOR");
  }
  
  public boolean getHasPAPIPKS_WORKTerm() {
    return hasCovTerm("PAPIPKS_WORK");
  }
  
  public productmodel.OptionPAPIPKS_FUNERALType getPAPIPKS_FUNERALTerm() {
    return (productmodel.OptionPAPIPKS_FUNERALType)getCovTerm("PAPIPKS_FUNERAL");
  }
  
  public productmodel.OptionPAPIPKS_MEDType getPAPIPKS_MEDTerm() {
    return (productmodel.OptionPAPIPKS_MEDType)getCovTerm("PAPIPKS_MED");
  }
  
  public productmodel.OptionPAPIPKS_REHABType getPAPIPKS_REHABTerm() {
    return (productmodel.OptionPAPIPKS_REHABType)getCovTerm("PAPIPKS_REHAB");
  }
  
  public productmodel.OptionPAPIPKS_SERVICESType getPAPIPKS_SERVICESTerm() {
    return (productmodel.OptionPAPIPKS_SERVICESType)getCovTerm("PAPIPKS_SERVICES");
  }
  
  public productmodel.PackagePAPIPKS_SURVIVORType getPAPIPKS_SURVIVORTerm() {
    return (productmodel.PackagePAPIPKS_SURVIVORType)getCovTerm("PAPIPKS_SURVIVOR");
  }
  
  public productmodel.PackagePAPIPKS_WORKType getPAPIPKS_WORKTerm() {
    return (productmodel.PackagePAPIPKS_WORKType)getCovTerm("PAPIPKS_WORK");
  }
  
  static {
    com.guidewire._generated.productmodel.PAPIP_KSInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PAPIP_KS>() {
      public productmodel.PAPIP_KS newEmptyInstance() {
        return new productmodel.PAPIP_KS();
      }
      
      
    });
  }
}