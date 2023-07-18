package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_MN.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PAPIP_MN extends entity.PersonalAutoCov {
  protected PAPIP_MN()  {
    super((java.lang.Void)null);
  }
  
  public PAPIP_MN(entity.PolicyPeriod branch)  {
    super(branch, "PAPIP_MN");
  }
  
  public PAPIP_MN(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PAPIP_MN");
  }
  
  public boolean getHasPAPIPMN_CYCLETerm() {
    return hasCovTerm("PAPIPMN_CYCLE");
  }
  
  public boolean getHasPAPIPMN_EXC_WORKTerm() {
    return hasCovTerm("PAPIPMN_EXC_WORK");
  }
  
  public boolean getHasPAPIPMN_MEDICALTerm() {
    return hasCovTerm("PAPIPMN_MEDICAL");
  }
  
  public boolean getHasPAPIPMN_MED_DEDUCTTerm() {
    return hasCovTerm("PAPIPMN_MED_DEDUCT");
  }
  
  public boolean getHasPAPIPMN_OTHERTerm() {
    return hasCovTerm("PAPIPMN_OTHER");
  }
  
  public boolean getHasPAPIPMN_OTH_DEDUCTTerm() {
    return hasCovTerm("PAPIPMN_OTH_DEDUCT");
  }
  
  public boolean getHasPAPIPMN_SERVICESTerm() {
    return hasCovTerm("PAPIPMN_SERVICES");
  }
  
  public boolean getHasPAPIPMN_STACKTerm() {
    return hasCovTerm("PAPIPMN_STACK");
  }
  
  public boolean getHasPAPIPMN_SURVIVORTerm() {
    return hasCovTerm("PAPIPMN_SURVIVOR");
  }
  
  public boolean getHasPAPIPMN_WORKTerm() {
    return hasCovTerm("PAPIPMN_WORK");
  }
  
  public productmodel.GenericPAPIPMN_CYCLEType getPAPIPMN_CYCLETerm() {
    return (productmodel.GenericPAPIPMN_CYCLEType)getCovTerm("PAPIPMN_CYCLE");
  }
  
  public productmodel.TypekeyPAPIPMN_EXC_WORKType getPAPIPMN_EXC_WORKTerm() {
    return (productmodel.TypekeyPAPIPMN_EXC_WORKType)getCovTerm("PAPIPMN_EXC_WORK");
  }
  
  public productmodel.OptionPAPIPMN_MEDICALType getPAPIPMN_MEDICALTerm() {
    return (productmodel.OptionPAPIPMN_MEDICALType)getCovTerm("PAPIPMN_MEDICAL");
  }
  
  public productmodel.OptionPAPIPMN_MED_DEDUCTType getPAPIPMN_MED_DEDUCTTerm() {
    return (productmodel.OptionPAPIPMN_MED_DEDUCTType)getCovTerm("PAPIPMN_MED_DEDUCT");
  }
  
  public productmodel.OptionPAPIPMN_OTHERType getPAPIPMN_OTHERTerm() {
    return (productmodel.OptionPAPIPMN_OTHERType)getCovTerm("PAPIPMN_OTHER");
  }
  
  public productmodel.OptionPAPIPMN_OTH_DEDUCTType getPAPIPMN_OTH_DEDUCTTerm() {
    return (productmodel.OptionPAPIPMN_OTH_DEDUCTType)getCovTerm("PAPIPMN_OTH_DEDUCT");
  }
  
  public productmodel.OptionPAPIPMN_SERVICESType getPAPIPMN_SERVICESTerm() {
    return (productmodel.OptionPAPIPMN_SERVICESType)getCovTerm("PAPIPMN_SERVICES");
  }
  
  public productmodel.GenericPAPIPMN_STACKType getPAPIPMN_STACKTerm() {
    return (productmodel.GenericPAPIPMN_STACKType)getCovTerm("PAPIPMN_STACK");
  }
  
  public productmodel.OptionPAPIPMN_SURVIVORType getPAPIPMN_SURVIVORTerm() {
    return (productmodel.OptionPAPIPMN_SURVIVORType)getCovTerm("PAPIPMN_SURVIVOR");
  }
  
  public productmodel.OptionPAPIPMN_WORKType getPAPIPMN_WORKTerm() {
    return (productmodel.OptionPAPIPMN_WORKType)getCovTerm("PAPIPMN_WORK");
  }
  
  static {
    com.guidewire._generated.productmodel.PAPIP_MNInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PAPIP_MN>() {
      public productmodel.PAPIP_MN newEmptyInstance() {
        return new productmodel.PAPIP_MN();
      }
      
      
    });
  }
}