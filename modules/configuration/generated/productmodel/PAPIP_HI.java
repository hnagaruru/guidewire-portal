package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_HI.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PAPIP_HI extends entity.PersonalAutoCov {
  protected PAPIP_HI()  {
    super((java.lang.Void)null);
  }
  
  public PAPIP_HI(entity.PolicyPeriod branch)  {
    super(branch, "PAPIP_HI");
  }
  
  public PAPIP_HI(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PAPIP_HI");
  }
  
  public boolean getHasPAPIP_HI_AltTreatmentTerm() {
    return hasCovTerm("PAPIP_HI_AltTreatment");
  }
  
  public boolean getHasPAPIP_HI_DEDUCTIBLETerm() {
    return hasCovTerm("PAPIP_HI_DEDUCTIBLE");
  }
  
  public boolean getHasPAPIP_HI_DeathTerm() {
    return hasCovTerm("PAPIP_HI_Death");
  }
  
  public boolean getHasPAPIP_HI_FuneralTerm() {
    return hasCovTerm("PAPIP_HI_Funeral");
  }
  
  public boolean getHasPAPIP_HI_MANAGED_CARETerm() {
    return hasCovTerm("PAPIP_HI_MANAGED_CARE");
  }
  
  public boolean getHasPAPIP_HI_MGDCARE_COPAY_DEDUCTTerm() {
    return hasCovTerm("PAPIP_HI_MGDCARE_COPAY_DEDUCT");
  }
  
  public boolean getHasPAPIP_HI_MedRehabTerm() {
    return hasCovTerm("PAPIP_HI_MedRehab");
  }
  
  public boolean getHasPAPIP_HI_WageLossTerm() {
    return hasCovTerm("PAPIP_HI_WageLoss");
  }
  
  public productmodel.PackagePAPIP_HI_AltTreatmentType getPAPIP_HI_AltTreatmentTerm() {
    return (productmodel.PackagePAPIP_HI_AltTreatmentType)getCovTerm("PAPIP_HI_AltTreatment");
  }
  
  public productmodel.OptionPAPIP_HI_DEDUCTIBLEType getPAPIP_HI_DEDUCTIBLETerm() {
    return (productmodel.OptionPAPIP_HI_DEDUCTIBLEType)getCovTerm("PAPIP_HI_DEDUCTIBLE");
  }
  
  public productmodel.OptionPAPIP_HI_DeathType getPAPIP_HI_DeathTerm() {
    return (productmodel.OptionPAPIP_HI_DeathType)getCovTerm("PAPIP_HI_Death");
  }
  
  public productmodel.OptionPAPIP_HI_FuneralType getPAPIP_HI_FuneralTerm() {
    return (productmodel.OptionPAPIP_HI_FuneralType)getCovTerm("PAPIP_HI_Funeral");
  }
  
  public productmodel.GenericPAPIP_HI_MANAGED_CAREType getPAPIP_HI_MANAGED_CARETerm() {
    return (productmodel.GenericPAPIP_HI_MANAGED_CAREType)getCovTerm("PAPIP_HI_MANAGED_CARE");
  }
  
  public productmodel.OptionPAPIP_HI_MGDCARE_COPAY_DEDUCTType getPAPIP_HI_MGDCARE_COPAY_DEDUCTTerm() {
    return (productmodel.OptionPAPIP_HI_MGDCARE_COPAY_DEDUCTType)getCovTerm("PAPIP_HI_MGDCARE_COPAY_DEDUCT");
  }
  
  public productmodel.OptionPAPIP_HI_MedRehabType getPAPIP_HI_MedRehabTerm() {
    return (productmodel.OptionPAPIP_HI_MedRehabType)getCovTerm("PAPIP_HI_MedRehab");
  }
  
  public productmodel.PackagePAPIP_HI_WageLossType getPAPIP_HI_WageLossTerm() {
    return (productmodel.PackagePAPIP_HI_WageLossType)getCovTerm("PAPIP_HI_WageLoss");
  }
  
  static {
    com.guidewire._generated.productmodel.PAPIP_HIInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PAPIP_HI>() {
      public productmodel.PAPIP_HI newEmptyInstance() {
        return new productmodel.PAPIP_HI();
      }
      
      
    });
  }
}