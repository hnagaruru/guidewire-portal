package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPSectionIDeductibles.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPSectionIDeductibles extends entity.HOPDwellingCov {
  protected HOPSectionIDeductibles()  {
    super((java.lang.Void)null);
  }
  
  public HOPSectionIDeductibles(entity.PolicyPeriod branch)  {
    super(branch, "zocji60oon5qu43lr22k8q4o15a");
  }
  
  public HOPSectionIDeductibles(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zocji60oon5qu43lr22k8q4o15a");
  }
  
  public productmodel.OptionHOPSectionIDeductiblesHurricaneType getHOPSectionIDeductiblesHurricaneTerm() {
    return (productmodel.OptionHOPSectionIDeductiblesHurricaneType)getCovTerm("zj8ik0gtjuev47mdmkj29th5jt9");
  }
  
  public productmodel.OptionHOPSectionIDeductiblesOtherPerilsType getHOPSectionIDeductiblesOtherPerilsTerm() {
    return (productmodel.OptionHOPSectionIDeductiblesOtherPerilsType)getCovTerm("zm7g2sosoafsv74h974bld972ta");
  }
  
  public productmodel.OptionHOPSectionIDeductiblesPerilsType getHOPSectionIDeductiblesPerilsTerm() {
    return (productmodel.OptionHOPSectionIDeductiblesPerilsType)getCovTerm("zfvimq6hie4hr27sr3r4gfu8pnb");
  }
  
  public productmodel.OptionHOPSectionIDeductiblesWindstormType getHOPSectionIDeductiblesWindstormTerm() {
    return (productmodel.OptionHOPSectionIDeductiblesWindstormType)getCovTerm("zpbhoiumut2dk7dsff5ao5nro59");
  }
  
  public boolean getHasHOPSectionIDeductiblesHurricaneTerm() {
    return hasCovTerm("zj8ik0gtjuev47mdmkj29th5jt9");
  }
  
  public boolean getHasHOPSectionIDeductiblesOtherPerilsTerm() {
    return hasCovTerm("zm7g2sosoafsv74h974bld972ta");
  }
  
  public boolean getHasHOPSectionIDeductiblesPerilsTerm() {
    return hasCovTerm("zfvimq6hie4hr27sr3r4gfu8pnb");
  }
  
  public boolean getHasHOPSectionIDeductiblesWindstormTerm() {
    return hasCovTerm("zpbhoiumut2dk7dsff5ao5nro59");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPSectionIDeductiblesInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPSectionIDeductibles>() {
      public productmodel.HOPSectionIDeductibles newEmptyInstance() {
        return new productmodel.HOPSectionIDeductibles();
      }
      
      
    });
  }
}