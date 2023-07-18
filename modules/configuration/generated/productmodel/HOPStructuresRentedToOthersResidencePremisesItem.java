package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPStructuresRentedToOthersResidencePremisesItem.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPStructuresRentedToOthersResidencePremisesItem extends entity.HOPDwellSchCovItemCov {
  protected HOPStructuresRentedToOthersResidencePremisesItem()  {
    super((java.lang.Void)null);
  }
  
  public HOPStructuresRentedToOthersResidencePremisesItem(entity.PolicyPeriod branch)  {
    super(branch, "zcgjavp5vcr21558v9bucnfqj0b");
  }
  
  public HOPStructuresRentedToOthersResidencePremisesItem(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zcgjavp5vcr21558v9bucnfqj0b");
  }
  
  public productmodel.DirectHOPStructuresRentedToOthersResidencePremisesItemLimitType getHOPStructuresRentedToOthersResidencePremisesItemLimitTerm() {
    return (productmodel.DirectHOPStructuresRentedToOthersResidencePremisesItemLimitType)getCovTerm("zfui0ffmtkk791n0hi96k2njjr9");
  }
  
  public boolean getHasHOPStructuresRentedToOthersResidencePremisesItemLimitTerm() {
    return hasCovTerm("zfui0ffmtkk791n0hi96k2njjr9");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPStructuresRentedToOthersResidencePremisesItemInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPStructuresRentedToOthersResidencePremisesItem>() {
      public productmodel.HOPStructuresRentedToOthersResidencePremisesItem newEmptyInstance() {
        return new productmodel.HOPStructuresRentedToOthersResidencePremisesItem();
      }
      
      
    });
  }
}