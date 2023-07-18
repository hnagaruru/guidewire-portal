package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_HI.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class CAPIP_HI extends entity.BAStateCov {
  protected CAPIP_HI()  {
    super((java.lang.Void)null);
  }
  
  public CAPIP_HI(entity.PolicyPeriod branch)  {
    super(branch, "CAPIP_HI");
  }
  
  public CAPIP_HI(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "CAPIP_HI");
  }
  
  public productmodel.OptionHI_DeathType getHI_DeathTerm() {
    return (productmodel.OptionHI_DeathType)getCovTerm("HI_Death");
  }
  
  public boolean getHasHI_DeathTerm() {
    return hasCovTerm("HI_Death");
  }
  
  public boolean getHasPIPAltTreatmentTerm() {
    return hasCovTerm("PIPAltTreatment");
  }
  
  public boolean getHasPIPHI_DEDUCTIBLETerm() {
    return hasCovTerm("PIPHI_DEDUCTIBLE");
  }
  
  public boolean getHasPIPHI_MANAGED_CARETerm() {
    return hasCovTerm("PIPHI_MANAGED_CARE");
  }
  
  public boolean getHasPIPHI_MGDCARE_COPAY_DEDUCTTerm() {
    return hasCovTerm("PIPHI_MGDCARE_COPAY_DEDUCT");
  }
  
  public boolean getHasPIP_HI_FuneralTerm() {
    return hasCovTerm("PIP_HI_Funeral");
  }
  
  public boolean getHasPIP_HI_MedRehabTerm() {
    return hasCovTerm("PIP_HI_MedRehab");
  }
  
  public boolean getHasWageLossTerm() {
    return hasCovTerm("WageLoss");
  }
  
  public productmodel.PackagePIPAltTreatmentType getPIPAltTreatmentTerm() {
    return (productmodel.PackagePIPAltTreatmentType)getCovTerm("PIPAltTreatment");
  }
  
  public productmodel.OptionPIPHI_DEDUCTIBLEType getPIPHI_DEDUCTIBLETerm() {
    return (productmodel.OptionPIPHI_DEDUCTIBLEType)getCovTerm("PIPHI_DEDUCTIBLE");
  }
  
  public productmodel.GenericPIPHI_MANAGED_CAREType getPIPHI_MANAGED_CARETerm() {
    return (productmodel.GenericPIPHI_MANAGED_CAREType)getCovTerm("PIPHI_MANAGED_CARE");
  }
  
  public productmodel.OptionPIPHI_MGDCARE_COPAY_DEDUCTType getPIPHI_MGDCARE_COPAY_DEDUCTTerm() {
    return (productmodel.OptionPIPHI_MGDCARE_COPAY_DEDUCTType)getCovTerm("PIPHI_MGDCARE_COPAY_DEDUCT");
  }
  
  public productmodel.OptionPIP_HI_FuneralType getPIP_HI_FuneralTerm() {
    return (productmodel.OptionPIP_HI_FuneralType)getCovTerm("PIP_HI_Funeral");
  }
  
  public productmodel.OptionPIP_HI_MedRehabType getPIP_HI_MedRehabTerm() {
    return (productmodel.OptionPIP_HI_MedRehabType)getCovTerm("PIP_HI_MedRehab");
  }
  
  public productmodel.PackageWageLossType getWageLossTerm() {
    return (productmodel.PackageWageLossType)getCovTerm("WageLoss");
  }
  
  static {
    com.guidewire._generated.productmodel.CAPIP_HIInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.CAPIP_HI>() {
      public productmodel.CAPIP_HI newEmptyInstance() {
        return new productmodel.CAPIP_HI();
      }
      
      
    });
  }
}